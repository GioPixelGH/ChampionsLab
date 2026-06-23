"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ScanLine,
  Monitor,
  Upload,
  Camera,
  Play,
  Pause,
  Square,
  RotateCcw,
  AlertCircle,
  Loader2,
  CheckCircle2,
  MousePointerClick,
  Info,
  Smartphone,
} from "lucide-react";
import { POKEMON_SEED } from "@/lib/pokemon-data";
import { cn } from "@/lib/utils";
import { useIsNative } from "@/hooks/useIsNative";
import { getMyRoster, toggleRosterPokemon } from "@/lib/storage";
import {
  recognizeNameFromCanvas,
  matchPokemonByName,
  terminateOCRWorker,
  type NameRegion,
} from "@/lib/box-scanner/ocr-detector";
import {
  requestScreenCapture,
  isScreenCaptureSupported,
  type CaptureStream,
} from "@/lib/box-scanner/screen-capture";
import { CaptureError, type ScanState } from "@/lib/box-scanner/types";
import { BoxScannerPreview } from "@/components/BoxScannerPreview";
import { DetectedRoster } from "@/components/DetectedRoster";

const ALL_POKEMON = POKEMON_SEED.filter((p) => !p.hidden);

export default function BoxScannerPage() {
  const isNative = useIsNative();
  const captureSupported = !isNative && isScreenCaptureSupported();

  // Screen capture
  const captureStreamRef = useRef<CaptureStream | null>(null);
  const [activeStream, setActiveStream] = useState<MediaStream | null>(null);

  // Name region calibration
  const [nameRegion, setNameRegion] = useState<NameRegion | null>(null);

  // State machine
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Detected Pokémon
  const [detectedIds, setDetectedIds] = useState<Set<number>>(new Set());

  // Upload mode
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [isProcessingUpload, setIsProcessingUpload] = useState(false);

  // Mobile detection (pointer-primary touch device — updated after mount)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(
      typeof window !== "undefined" &&
        (navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches)
    );
  }, []);

  // Mobile tab
  const [activeTab, setActiveTab] = useState<"scanner" | "roster">("scanner");

  // Clean up on unmount
  useEffect(() => {
    return () => {
      captureStreamRef.current?.stop();
      terminateOCRWorker();
    };
  }, []);

  const handleDetected = useCallback((pokemonId: number) => {
    setDetectedIds((prev) => {
      if (prev.has(pokemonId)) return prev;
      const next = new Set(prev);
      next.add(pokemonId);
      return next;
    });
    // Switch to roster tab on mobile when first detection
    setActiveTab("roster");
  }, []);

  const handleStartCapture = async () => {
    setErrorMsg(null);
    try {
      const cs = await requestScreenCapture();
      captureStreamRef.current = cs;
      setActiveStream(cs.stream);
      cs.stream.getVideoTracks()[0]?.addEventListener("ended", handleStop);
      setScanState("calibrating");
    } catch (err) {
      if (err instanceof CaptureError) {
        if (err.code === "NOT_ALLOWED") {
          setErrorMsg("Permesso di acquisizione schermo negato. Riprova e consenti la condivisione.");
        } else if (err.code === "NOT_SUPPORTED") {
          setErrorMsg("Acquisizione schermo non supportata su questo dispositivo.");
        } else {
          setErrorMsg("Errore sconosciuto durante l'acquisizione.");
        }
      } else {
        setErrorMsg("Errore durante l'avvio della cattura.");
      }
    }
  };

  const handleStop = useCallback(() => {
    captureStreamRef.current?.stop();
    captureStreamRef.current = null;
    setActiveStream(null);
    setScanState("idle");
  }, []);

  const handlePauseResume = () => {
    setScanState((s) => (s === "scanning" ? "paused" : "scanning"));
  };

  const handleRecalibrate = () => {
    setScanState("calibrating");
  };

  const handleAddToRoster = (ids: number[], seasonId: number) => {
    const currentRoster = getMyRoster(seasonId);
    ids.forEach((id) => {
      if (!currentRoster.has(id)) {
        toggleRosterPokemon(id, seasonId);
      }
    });
    setScanState("saved");
    setTimeout(() => setScanState(activeStream ? "scanning" : "idle"), 2500);
  };

  const handleRemoveDetected = (id: number) => {
    setDetectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const handleClearDetected = () => {
    setDetectedIds(new Set());
  };

  // Upload screenshot — run OCR on each file
  const handleUploadFiles = async (files: FileList) => {
    setIsProcessingUpload(true);
    setActiveTab("roster");

    for (const file of Array.from(files)) {
      try {
        const bitmap = await createImageBitmap(file);
        const canvas = document.createElement("canvas");
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(bitmap, 0, 0);

        // If user has calibrated a name region, use it; otherwise scan the whole image
        const region = nameRegion ?? {
          x: 0,
          y: 0,
          w: bitmap.width,
          h: bitmap.height,
        };

        const cropped = document.createElement("canvas");
        cropped.width = region.w;
        cropped.height = region.h;
        const cctx = cropped.getContext("2d")!;
        cctx.drawImage(canvas, region.x, region.y, region.w, region.h, 0, 0, region.w, region.h);

        const ocrText = await recognizeNameFromCanvas(cropped);
        const match = matchPokemonByName(ocrText, ALL_POKEMON);
        if (match) {
          setDetectedIds((prev) => {
            const next = new Set(prev);
            next.add(match.id);
            return next;
          });
        }
      } catch {
        // Skip unreadable files
      }
    }

    setIsProcessingUpload(false);
  };

  const isScanning = scanState === "scanning";
  const isPaused = scanState === "paused";
  const isCalibrating = scanState === "calibrating";
  const isSaved = scanState === "saved";

  return (
    <main className="min-h-screen pt-16 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0a1128] dark:to-[#0d1635]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Page header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <ScanLine className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-2xl font-bold font-heading">Box Scanner</h1>
          </div>
          <p className="text-sm text-muted-foreground ml-12">
            Naviga nel tuo Box in gioco: ogni Pokémon selezionato viene registrato automaticamente
          </p>
        </div>

        {/* How it works hint */}
        <div className="mb-4 flex items-start gap-2 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40 text-blue-800 dark:text-blue-300 text-xs">
          <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>
            Il rilevamento legge il <strong>nome</strong> che compare nel pannello in alto a destra
            quando selezioni un Pokémon nel Box. Seleziona ogni Pokémon con il cursore o il controller
            e l&apos;app lo registra in automatico.
          </span>
        </div>

        {/* Mobile banner — screen capture unsupported */}
        {isMobile && !captureSupported && (
          <div className="mb-4 flex items-start gap-2 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 text-amber-800 dark:text-amber-300 text-xs">
            <Smartphone className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>
              <strong>La cattura schermo non è supportata su mobile.</strong> Usa{" "}
              <strong>Carica immagine</strong> per caricare uno screenshot o{" "}
              <strong>Fotocamera</strong> per scattare una foto del pannello di gioco.
            </span>
          </div>
        )}

        {/* Error */}
        {errorMsg && (
          <div className="mb-4 flex items-start gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 text-red-700 dark:text-red-300 text-xs">
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Saved confirmation */}
        {isSaved && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 flex items-center gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-300 text-sm font-medium"
          >
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            Pokémon aggiunti al tuo Roster!
          </motion.div>
        )}

        {/* Mobile tab switch */}
        <div className="desktop:hidden flex rounded-xl bg-white dark:bg-white/5 border border-gray-200/60 dark:border-gray-700/40 p-1 gap-1 mb-4">
          <button
            onClick={() => setActiveTab("scanner")}
            className={cn(
              "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
              activeTab === "scanner"
                ? "bg-emerald-500 text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Scanner
          </button>
          <button
            onClick={() => setActiveTab("roster")}
            className={cn(
              "flex-1 py-2 text-sm font-medium rounded-lg transition-all relative",
              activeTab === "roster"
                ? "bg-emerald-500 text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Rilevati
            {detectedIds.size > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 text-[10px] font-bold bg-red-500 text-white rounded-full flex items-center justify-center">
                {detectedIds.size}
              </span>
            )}
          </button>
        </div>

        {/* Main layout */}
        <div className="flex flex-col desktop:flex-row gap-4">

          {/* Left: Scanner panel */}
          <div className={cn("flex-1 min-w-0", activeTab !== "scanner" && "hidden desktop:block")}>
            <div className="bg-white dark:bg-white/5 rounded-2xl border border-gray-200/60 dark:border-gray-700/40 p-4 flex flex-col gap-4">

              {/* Video preview */}
              {activeStream ? (
                <BoxScannerPreview
                  stream={activeStream}
                  nameRegion={nameRegion}
                  scanState={scanState}
                  pokemonList={ALL_POKEMON}
                  onNameRegionChange={setNameRegion}
                  onDetected={handleDetected}
                  onStateChange={setScanState}
                />
              ) : (
                <div className="aspect-video bg-gray-100 dark:bg-black/30 rounded-xl flex flex-col items-center justify-center gap-3 text-muted-foreground border-2 border-dashed border-gray-200 dark:border-gray-700">
                  <Monitor className="w-10 h-10 opacity-30" />
                  <p className="text-sm">Nessuna schermata attiva</p>
                  <p className="text-xs opacity-60">Clicca &quot;Condividi schermata&quot; per iniziare</p>
                </div>
              )}

              {/* Calibration hint */}
              {isCalibrating && (
                <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2.5 rounded-lg border border-emerald-200 dark:border-emerald-800/40">
                  <MousePointerClick className="w-4 h-4 flex-shrink-0" />
                  <span>
                    <strong>Clicca sul nome</strong> del Pokémon che vedi in alto a destra nel pannello
                    di gioco (es. &quot;Venusaur&quot;). Il rettangolo verde segnerà l&apos;area monitorata.
                  </span>
                </div>
              )}

              {/* Controls */}
              <div className="flex flex-wrap gap-2">
                {captureSupported && scanState === "idle" && (
                  <button
                    onClick={handleStartCapture}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition-all active:scale-95 shadow-sm"
                  >
                    <Monitor className="w-4 h-4" />
                    Condividi schermata
                  </button>
                )}

                {(isScanning || isPaused) && (
                  <button
                    onClick={handlePauseResume}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-white transition-all active:scale-95 shadow-sm"
                  >
                    {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                    {isPaused ? "Riprendi" : "Pausa"}
                  </button>
                )}

                {(isScanning || isPaused) && (
                  <button
                    onClick={handleRecalibrate}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                  >
                    <MousePointerClick className="w-4 h-4" />
                    Riclicca nome
                  </button>
                )}

                {activeStream && (
                  <button
                    onClick={handleStop}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium border border-red-200 dark:border-red-800/40 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                  >
                    <Square className="w-4 h-4" />
                    Ferma
                  </button>
                )}

                {detectedIds.size > 0 && (
                  <button
                    onClick={handleClearDetected}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 transition-all ml-auto"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Azzera
                  </button>
                )}
              </div>

              {/* Status indicator */}
              {activeStream && (
                <div className="flex items-center gap-2 text-xs">
                  <span
                    className={cn(
                      "w-2 h-2 rounded-full",
                      isScanning ? "bg-emerald-500 animate-pulse" :
                      isPaused ? "bg-amber-500" :
                      isCalibrating ? "bg-blue-500 animate-pulse" :
                      "bg-gray-400"
                    )}
                  />
                  <span className="text-muted-foreground">
                    {isScanning && `Scansione attiva — naviga nel Box per registrare i Pokémon`}
                    {isPaused && "In pausa"}
                    {isCalibrating && "Calibrazione — clicca sul nome del Pokémon nel gioco"}
                    {isSaved && "Salvato!"}
                  </span>
                </div>
              )}

              {/* Upload / Camera section */}
              <div className="border-t border-gray-200/60 dark:border-gray-700/40 pt-4">
                <p className="text-xs text-muted-foreground mb-2">
                  {captureSupported
                    ? "Oppure carica screenshot del pannello nome:"
                    : "Carica uno screenshot o usa la fotocamera:"}
                </p>

                {/* Hidden file inputs */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.length) {
                      handleUploadFiles(e.target.files);
                      e.target.value = "";
                    }
                  }}
                />
                {/* Camera input — opens device camera on mobile */}
                <input
                  ref={cameraInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.length) {
                      handleUploadFiles(e.target.files);
                      e.target.value = "";
                    }
                  }}
                />

                <div className="flex flex-wrap gap-2">
                  {/* Upload button — works everywhere */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isProcessingUpload}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border",
                      !captureSupported
                        ? "border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 active:scale-95"
                        : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 active:scale-95",
                      isProcessingUpload && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    {isProcessingUpload ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Upload className="w-4 h-4" />
                    )}
                    {isProcessingUpload ? "Lettura OCR…" : "Carica immagine"}
                  </button>

                  {/* Camera button — only on mobile (touch devices) */}
                  {isMobile && (
                    <button
                      onClick={() => cameraInputRef.current?.click()}
                      disabled={isProcessingUpload}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border",
                        "border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 active:scale-95",
                        isProcessingUpload && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <Camera className="w-4 h-4" />
                      Fotocamera
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detected Roster */}
          <div className={cn(
            "w-full desktop:w-80 desktop:flex-shrink-0",
            activeTab !== "roster" && "hidden desktop:block"
          )}>
            <div className="bg-white dark:bg-white/5 rounded-2xl border border-gray-200/60 dark:border-gray-700/40 p-4 desktop:sticky desktop:top-20 desktop:max-h-[calc(100vh-8rem)] desktop:flex desktop:flex-col">
              <DetectedRoster
                detectedIds={detectedIds}
                onRemove={handleRemoveDetected}
                onAddToRoster={handleAddToRoster}
                onClear={handleClearDetected}
              />
            </div>
          </div>
        </div>

        {/* How it works — shown only when idle */}
        {scanState === "idle" && !activeStream && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                icon: Monitor,
                title: "1. Condividi la schermata",
                desc: "Clicca \"Condividi schermata\" e seleziona la finestra di Pokémon Champions. Su console, usa invece lo screenshot.",
              },
              {
                icon: MousePointerClick,
                title: "2. Clicca sul nome",
                desc: "Clicca una volta sul nome del Pokémon che appare in alto a destra nel pannello di gioco per calibrare l'area di lettura.",
              },
              {
                icon: ScanLine,
                title: "3. Naviga il Box",
                desc: "Sposta il cursore o usa il controller per selezionare ogni Pokémon. L'app li registra automaticamente nel pannello a destra.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="flex gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200/60 dark:border-gray-700/40"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <step.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5">{step.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
