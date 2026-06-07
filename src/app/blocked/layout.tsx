// This layout hides all navigation chrome for the access-denied page.
// A <style> tag placed anywhere in the DOM applies globally in HTML.
export default function BlockedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        header,
        nav,
        #mobile-nav-toggle,
        .mobile-nav-btn,
        .mobile-nav-panel {
          display: none !important;
        }
        main { padding: 0 !important; }
      `}</style>
      {children}
    </>
  );
}
