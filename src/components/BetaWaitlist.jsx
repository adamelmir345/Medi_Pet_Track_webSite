import { useState } from 'react';

export default function BetaWaitlist() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <div id="beta" className="mt-32 p-12 bg-white border border-slate-100 shadow-apple-lg rounded-[3rem] text-center relative overflow-hidden backdrop-blur-sm">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]"></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">L'avant-première Medipatte</h2>
        <p className="text-slate-500 mb-8 max-w-lg mx-auto">Rejoignez la liste d'attente pour être parmi les premiers à profiter de l'expérience Medipatte.</p>
        
        <form id="waitlist-form" action="https://formspree.io/YOUR_FORM_ID" method="POST" className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 relative" onSubmit={handleSubmit}>
          <input type="email" id="email-input" name="email" placeholder="Votre mail" required className="flex-1 px-6 py-4 rounded-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all" />
          <button type="submit" id="submit-btn" className="px-8 py-4 bg-brand-500 text-brand-900 font-extrabold rounded-full hover:bg-brand-600 transition-colors shadow-md hover:shadow-lg">
            S'inscrire
          </button>
          <div id="success-msg" className={`absolute inset-0 bg-brand-500 text-brand-900 font-extrabold rounded-full flex items-center justify-center transition-opacity duration-300 pointer-events-none ${success ? 'opacity-100' : 'opacity-0'}`}>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            Vous êtes sur la liste !
          </div>
        </form>
      </div>
    </div>
  );
}
