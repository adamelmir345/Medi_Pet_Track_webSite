export default function Hero() {
  return (
    <section className="sticky top-0 h-screen bg-gradient-to-t to-brand-50 from-slate-100 flex flex-col items-center justify-center text-black overflow-hidden origin-top" id="section1">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-grid"></div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mt-12">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm text-brand-600 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-brand-100 cursor-default hover:bg-white transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Bientôt disponible sur iOS & Android
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
            La santé de votre <br /><span className="text-brand-500 relative inline-block">compagnon
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-200" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent"/></svg>
            </span> simplifiée.
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
            Scrollez vers le bas pour découvrir le carnet de santé le plus intuitif jamais créé pour vos animaux. 👇
          </p>
        </div>

        <div className="tilt-container">
          <div className="relative max-w-sm mx-auto group animate-float" id="phone-mockup">
            <div className="absolute inset-0 bg-brand-500 opacity-20 blur-3xl rounded-full transition-opacity duration-500 group-hover:opacity-40"></div>
            
            <div className="relative bg-white rounded-[3rem] p-3 shadow-apple border-4 border-slate-900 overflow-hidden transform transition-transform duration-300 ease-out tilt-target">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>

              <div className="bg-white rounded-[2.2rem] overflow-hidden aspect-[9/19] flex flex-col relative px-5 pt-12 pb-5 font-sans">
                <h2 className="text-xl font-bold text-brand-600 text-center mb-6 mt-2">Nouveau Traitement</h2>

                <button className="w-full flex items-center justify-center gap-2 py-3 px-2 border border-brand-500 bg-brand-50 text-brand-500 rounded-2xl text-[13px] font-semibold mb-6 hover:bg-brand-100 transition-colors shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8V5a2 2 0 012-2h3m13 5V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3m13-5v3a2 2 0 01-2 2h-3m-4-7a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  <span>Scanner une boîte ou ordonnance (IA)</span>
                </button>

                <div className="flex-1 overflow-y-auto scrollbar-none space-y-5 pb-2">
                  <div>
                    <p className="text-[13px] text-slate-500 mb-2 font-medium">Pour qui ?</p>
                    <div className="flex gap-3">
                      <div className="px-6 py-2 bg-brand-200 text-white font-bold rounded-full shadow-sm text-sm cursor-pointer whitespace-nowrap hover:scale-105 transition-transform">Rex</div>
                      <div className="px-6 py-2 bg-brand-50 text-brand-600 font-bold rounded-full text-sm cursor-pointer hover:bg-brand-100 transition-colors whitespace-nowrap border border-brand-50/50">Luna</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-brand-50/70 p-3.5 rounded-2xl text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101M10.172 13.828a4 4 0 015.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                      <span className="text-sm font-medium">Nom du médicament</span>
                    </div>
                    <div className="flex items-center gap-3 bg-brand-50/70 p-3.5 rounded-2xl text-slate-400">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                      <span className="text-sm font-medium truncate">Dosage (ex: 1 pilule)</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[13px] text-slate-500 mb-2 font-medium">Format</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-100/60 text-brand-600 rounded-full text-xs font-bold cursor-pointer">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"></path></svg>
                          Pilule
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-brand-600 rounded-full text-xs font-bold cursor-pointer hover:bg-slate-100 transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"></path></svg>
                          Goutte
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-brand-600 rounded-full text-xs font-bold cursor-pointer hover:bg-slate-100 transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547"></path></svg>
                          Seringue
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-brand-600 rounded-full text-xs font-bold cursor-pointer hover:bg-slate-100 transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                          Autre
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 bg-slate-50/70 p-3 rounded-2xl flex flex-col gap-1.5 border border-slate-50">
                      <div className="flex items-center gap-2 text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          <span className="text-[12px] font-medium">Date</span>
                      </div>
                      <div className="bg-brand-200 text-brand-900 py-1.5 px-2 rounded-xl text-center text-[13px] font-bold shadow-sm">
                          09/03/2026
                      </div>
                    </div>
                    <div className="flex-1 bg-slate-50/70 p-3 rounded-2xl flex flex-col gap-1.5 border border-slate-50">
                      <div className="flex items-center gap-2 text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          <span className="text-[12px] font-medium">Heure</span>
                      </div>
                      <div className="bg-brand-200 text-brand-900 py-1.5 px-2 rounded-xl text-center text-[13px] font-bold shadow-sm">
                          22:27
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 mt-auto relative z-10 bg-white">
                  <button className="w-full bg-brand-500 text-brand-900 font-extrabold py-3.5 rounded-2xl shadow-md hover:bg-brand-600 transition-colors text-sm hover:shadow-lg transform active:scale-95 duration-200">
                    Ajouter le traitement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
