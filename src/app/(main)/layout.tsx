import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { NativeUiWrapper } from "@/components/native-ui-wrapper";
import { Footer } from "@/components/footer";
import { MobileNavInit } from "@/components/mobile-nav-init";
import { UpdateModal } from "@/components/update-modal";
import { CookieConsent } from "@/components/cookie-consent";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NativeUiWrapper />
      <CookieConsent />
      <button
        id="mobile-nav-toggle"
        className="mobile-nav-btn"
        aria-label="Toggle menu"
        suppressHydrationWarning
      >
        <svg className="hamburger-open w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg className="hamburger-close w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <MobileNavInit />
      <Navbar />
      <Suspense>
        <main className="flex-1 relative z-10">{children}</main>
      </Suspense>
      <UpdateModal />
      <Footer />
    </>
  );
}
