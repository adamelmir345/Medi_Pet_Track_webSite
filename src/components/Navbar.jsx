export default function Navbar() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <nav className="fixed w-full z-50 glass-nav border-b border-slate-200 transition-all duration-300" id="navbar">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={scrollToTop}>
          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🐾</span>
          <span className="font-bold text-xl tracking-tight text-slate-800 group-hover:text-brand-500 transition-colors duration-300">Medipatte</span>
        </div>
        <a href="#beta" className="bg-brand-500 text-brand-900 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-600 hover:scale-105 transition-all shadow-sm">
          Accès Bêta
        </a>
      </div>
    </nav>
  );
}
