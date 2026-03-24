export default function Features() {
  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-slate-900">
          Une gestion sans effort, <br /> <span className="bg-gradient-to-r from-brand-500 to-emerald-600 bg-clip-text text-transparent">au doigt et à l'œil.</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Découvrez comment Medipatte métamorphose le suivi médical de vos compagnons à travers une interface fluide et organique.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="relative group overflow-hidden rounded-3xl col-span-1 md:col-span-2 aspect-[4/3] md:aspect-auto shadow-apple border border-slate-100">
          <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200" alt="Chien heureux" loading="lazy" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"/>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-2xl font-bold text-white mb-2">Suivi Quotidien</h3>
            <p className="text-brand-50 font-medium opacity-90">Des rappels précis pour chaque pilule, vaccin ou traitement.</p>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-3xl col-span-1 aspect-[4/3] md:aspect-auto shadow-apple border border-slate-100">
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800" alt="Chat" loading="lazy" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"/>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold text-white mb-1">Multi-profils</h3>
            <p className="text-blue-50 text-sm opacity-90 font-medium">Chien, chat, lapin...</p>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-3xl col-span-1 aspect-[4/3] md:aspect-auto shadow-apple border border-slate-100">
          <img src="https://images.unsplash.com/photo-1628009368231-7bb7cbcb8127?auto=format&fit=crop&q=80&w=800" alt="Vétérinaire" loading="lazy" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"/>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/95 via-brand-900/50 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold text-white mb-1">Dossier Santé</h3>
            <p className="text-brand-100 text-sm font-medium">Partagez avec le véto.</p>
          </div>
        </div>
      </div>
    </>
  );
}
