export default function Navbar() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between px-6 py-6 md:py-8 z-50 sticky top-0 bg-primary-dark/95 backdrop-blur border-b border-accent-amber/30 gap-4 sm:gap-0">
      <div className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-3 md:gap-4 text-white">
        <span className="h-[1px] w-6 md:w-12 bg-accent-amber"></span>
        Spy Tails
        <span className="h-[1px] w-6 md:w-12 bg-accent-amber"></span>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <nav className="flex flex-wrap justify-center gap-3 md:gap-8 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold">
          <a
            href="#about-book"
            className="text-text-main hover:text-accent-amber transition-colors"
          >
            Overview
          </a>
          <a
            href="#chapters"
            className="text-text-main hover:text-accent-amber transition-colors"
          >
            Dossiers
          </a>
          <a
            href="#global-activity"
            className="text-text-main hover:text-accent-amber transition-colors"
          >
            Map
          </a>
          <a
            href="#authors"
            className="text-text-main hover:text-accent-amber transition-colors"
          >
            Authors
          </a>
        </nav>
        <a
          href="https://www.globepequot.com/imprint/prometheus-books/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent-amber text-black px-4 py-2 sm:px-6 sm:py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors inline-block text-center whitespace-nowrap"
        >
          Pre-Order
        </a>
      </div>
    </header>
  );
}
