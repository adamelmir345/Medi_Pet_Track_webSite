const testimonialsData = [
  { name: "Sophie & Max", type: "Parent de Chien", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop", text: "Medipatte a changé notre vie. Mon chien n'oublie plus jamais ses médicaments pour le cœur. L'appli est fantastique." },
  { name: "Thomas", type: "Parent de Chat", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop", text: "L'interface est super intuitive. Je peux partager le carnet de santé directement avec mon vétérinaire en un clic." },
  { name: "Emma & Rocky", type: "Globetrotteuse", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", text: "L'historique des vaccins toujours dans la poche, c'est un vrai soulagement pour tous nos voyages." },
  { name: "Marie", type: "Assistante Vétérinaire", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop", text: "Enfin une application qui comprend qu'on peut avoir des quarts de pilules à donner ! Tout est si facile." },
  { name: "Julien", type: "Famille nombreuse", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop", text: "Le multi-profil est génial. J'ai 3 chats et un chien, c'était un cauchemar de s'organiser avant Medipatte." },
  { name: "Lucas", type: "Parent de Chat", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop", text: "Très pratique pour le suivi quotidien du diabète de Caramel. Et le design de l'appli est fantastique." },
  { name: "Chloé", type: "Fière maîtresse", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop", text: "Mon vétérinaire était impressionné par l'historique de suivi que je pouvais lui montrer lors des visites." },
  { name: "Antoine", type: "Geek & Papa Poule", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop", text: "Fini les rappels et post-it illisibles sur le frigo ! Tout est propre dans l'app et je valide sur ma montre." },
  { name: "Sarah & Bella", type: "Parent de Chien", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop", text: "L'interface est si agréable que c'est un pur plaisir de cocher les rappels chaque matin pour mon labrador." },
];

function TestimonialCard({ item }) {
  return (
    <div className="p-8 rounded-3xl border border-slate-100 shadow-lg shadow-brand-500/5 max-w-xs w-full bg-white transition-transform hover:scale-105 cursor-default">
      <p className="text-slate-600 text-sm mb-5 leading-relaxed">"{item.text}"</p>
      <div className="flex items-center gap-3">
        <img src={item.image} alt="Avatar" loading="lazy" className="h-10 w-10 rounded-full object-cover shadow-sm" />
        <div>
          <div className="font-medium text-slate-900 text-sm leading-none mb-1">{item.name}</div>
          <div className="text-[11px] text-slate-500">{item.type}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const col1 = testimonialsData.slice(0, 3);
  const col2 = testimonialsData.slice(3, 6);
  const col3 = testimonialsData.slice(6, 9);
  
  return (
    <div className="mt-32">
      <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center">
        <div className="inline-block border border-slate-200 py-1 px-4 rounded-lg bg-white shadow-sm text-brand-600 font-medium text-sm mb-5">Témoignages</div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Ce que nos utilisateurs disent</h2>
        <p className="mt-5 text-slate-500 text-lg">Découvrez les retours de notre communauté de parents d'animaux.</p>
      </div>

      <div className="flex justify-center gap-6 mt-16 mask-gradient-y max-h-[740px] overflow-hidden">
        {/* Column 1 */}
        <div className="flex flex-col gap-6 pb-6 animate-scroll-y-15 hover:[animation-play-state:paused]">
          {[...col1, ...col1].map((item, i) => (
            <TestimonialCard key={`col1-${i}`} item={item} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="hidden md:flex flex-col gap-6 pb-6 animate-scroll-y-19 hover:[animation-play-state:paused]">
          {[...col2, ...col2].map((item, i) => (
            <TestimonialCard key={`col2-${i}`} item={item} />
          ))}
        </div>

        {/* Column 3 */}
        <div className="hidden lg:flex flex-col gap-6 pb-6 animate-scroll-y-17 hover:[animation-play-state:paused]">
          {[...col3, ...col3].map((item, i) => (
            <TestimonialCard key={`col3-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
