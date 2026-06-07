import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "xyz.championslab.app",
  appName: "Champions Lab",
  // webDir is used only when server.url is not set (local bundle fallback)
  webDir: "public",
  server: {
    // The app loads the web content directly from the deployed Vercel instance.
    // All JavaScript (battle engine, team builder, etc.) runs inside the WebView
    // on the device — no computation happens on the server.
    // To ship an update, just deploy to Vercel — users get it on the next app open.
    // Token is validated once by middleware → sets a 90-day httpOnly cookie.
    // Change GATE_TOKEN in Vercel env vars + this value together to revoke access.
    url: "https://champions-lab-puce.vercel.app?token=clvgc2025x7k9mq4r",
    cleartext: false,
  },
};

export default config;
