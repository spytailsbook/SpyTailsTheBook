export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-accent-amber/30 px-6 py-8 md:py-6 flex flex-col md:flex-row items-center justify-between z-10 bg-tertiary-dark relative gap-6 rounded-none"
    >
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <a
          href="https://www.globepequot.com/imprint/prometheus-books/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent-amber text-black px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors inline-block text-center whitespace-nowrap"
        >
          Pre-Order Now
        </a>
        <div className="flex items-center gap-4 hidden sm:flex">
          <div className="w-2 h-2 rounded-full bg-accent-amber animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_var(--color-accent-amber)]"></div>
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
            Signal Status: SECURE
          </span>
        </div>
      </div>

      <div className="text-[9px] md:text-[10px] text-text-muted uppercase tracking-widest text-center">
        &copy; 2026 Spy Tails // Unauthorized Duplication Prohibited
      </div>
    </footer>
  );
}
