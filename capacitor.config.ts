import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "xyz.championslab.app",
  appName: "Champions Lab",
  // webDir points to Next.js static export output.
  // Without server.url, Capacitor serves these bundled web assets directly from
  // the device — the app works fully offline with no server dependency.
  //
  // To build and bundle:
  //   npm run build:mobile
  // This runs "next build" then "npx cap copy" to copy the built assets into
  // the Android/iOS native project. After that, open the native project and run.
  webDir: "out",

  // server: {
  //   // DEVELOPMENT ONLY — point to a local Next.js dev server for live reload.
  //   // Never set this in production; it creates a hard dependency on an external
  //   // URL and breaks the app when the server is unreachable.
  //   url: "http://YOUR_LOCAL_IP:3000",
  //   cleartext: true,
  // },
};

export default config;
