import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import { CinematicLandingHero } from './components/ui/cinematic-landing-hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import BetaWaitlist from './components/BetaWaitlist';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // GSAP Scroll Animations for the rest of the page
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const scrollContainer = document.getElementById('scroll-container');

    if (section1 && section2 && scrollContainer) {
      // The old hero animation logic is removed, handled entirely by CinematicLandingHero now.
      gsap.fromTo(section2, 
        { scale: 0.95, y: "15%" }, 
        {
          scrollTrigger: {
            trigger: section2,
            start: "top bottom", // Starts entering when the bottom of viewport hits section2
            end: "top top",
            scrub: 1,
          },
          scale: 1,
          y: "0%",
          transformOrigin: "center center",
          ease: "none",
        }
      );

      // Navbar shadow on scroll
      ScrollTrigger.create({
        trigger: section2,
        start: "top center",
        onEnter: () => document.getElementById("navbar")?.classList.add("shadow-sm"),
        onLeaveBack: () => document.getElementById("navbar")?.classList.remove("shadow-sm")
      });
    }
    
    // Cleanup GSAP scroll triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-background text-slate-800 overflow-x-hidden font-sans">
      <Navbar />

      <main className="relative bg-background" id="scroll-container">
        <CinematicLandingHero />
        
        <section className="relative min-h-[120vh] bg-gradient-to-t to-white from-slate-50 text-slate-900 flex flex-col origin-bottom border-t border-slate-100 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-[3rem] z-30" id="section2">
          <div className="absolute inset-0 bg-grid opacity-30"></div>
          
          <article className="container mx-auto max-w-6xl px-6 relative z-10 pt-32 pb-20">
            <Features />
            <Testimonials />
            <BetaWaitlist />
          </article>
        </section>

        <Footer />
      </main>
    </div>
  );
}
