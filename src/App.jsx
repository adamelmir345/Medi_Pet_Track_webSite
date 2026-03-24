import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import BetaWaitlist from './components/BetaWaitlist';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // 3D Tilt Effect logic 
    const tiltContainer = document.querySelector('.tilt-container');
    const tiltTarget = document.querySelector('.tilt-target');
    
    if (tiltContainer && tiltTarget && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const handleMouseMove = (e) => {
        const rect = tiltContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        tiltTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      };
      
      const handleMouseLeave = () => {
        tiltTarget.style.transform = `rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
      };

      tiltContainer.addEventListener('mousemove', handleMouseMove);
      tiltContainer.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
      return () => {
        tiltContainer.removeEventListener('mousemove', handleMouseMove);
        tiltContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  useEffect(() => {
    // GSAP Scroll Animations
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const scrollContainer = document.getElementById('scroll-container');

    if (section1 && section2 && scrollContainer) {
      // Animation de la Section 1 (Hero)
      gsap.to(section1, {
        scrollTrigger: {
          trigger: scrollContainer,
          start: "top top",
          end: "+=100%",
          scrub: 1,
        },
        scale: 0.85, 
        rotation: -3,
        opacity: 0.5,
        transformOrigin: "center center",
        ease: "none"
      });

      // Apparition de la section 2
      gsap.fromTo(section2, 
        { scale: 0.95, y: "15%" }, 
        {
          scrollTrigger: {
            trigger: scrollContainer,
            start: "top top",
            end: "+=100%",
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
        <Hero />
        
        <section className="relative min-h-[120vh] bg-gradient-to-t to-white from-slate-50 text-slate-900 flex flex-col origin-bottom border-t border-slate-100 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-[3rem]" id="section2">
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
