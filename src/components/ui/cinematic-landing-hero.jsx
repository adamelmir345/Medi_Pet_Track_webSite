import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ==========================================
// ADAPTED MEDIPATTE THEME (Light & Warm)
// ==========================================
const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  /* Environment Overlays */
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.03; mix-blend-mode: multiply;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      /* Very subtle slate/gray grid for light mode */
      background-image: 
          linear-gradient(to right, rgba(148, 163, 184, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148, 163, 184, 0.15) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  /* -------------------------------------------------------------------
     PHYSICAL SKEUOMORPHIC MATERIALS (Restored 3D Depth)
  ---------------------------------------------------------------------- */
  
  /* Text outside - Dark Slate */
  .text-3d-matte {
      color: #0f172a; 
      text-shadow: 
          0 10px 30px rgba(15, 23, 42, 0.1), 
          0 2px 4px rgba(15, 23, 42, 0.05);
  }

  /* Main focal text outside (Slate gradient) */
  .text-silver-matte {
      background: linear-gradient(180deg, #1e293b 0%, #475569 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 8px 16px rgba(15,23,42,0.1)) 
          drop-shadow(0px 2px 4px rgba(15,23,42,0.05));
  }

  /* Text inside the card - Keeping it white/slate since card is orange */
  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #fff7ed 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 12px 24px rgba(159, 18, 57, 0.2)) 
          drop-shadow(0px 4px 8px rgba(159, 18, 57, 0.1));
  }

  /* THE MEDIPATTE DEEP CARD (Warm Amber/Orange/Yellow gradient instead of Dark Blue) */
  .premium-depth-card {
      /* Medipatte brand colors gradient */
      background: linear-gradient(145deg, #f59e0b 0%, #ea580c 100%);
      box-shadow: 
          0 40px 100px -20px rgba(194, 65, 12, 0.4),
          0 20px 40px -20px rgba(194, 65, 12, 0.3),
          inset 0 1px 2px rgba(255, 255, 255, 0.4),
          inset 0 -2px 4px rgba(67, 20, 7, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.2);
      position: relative;
  }

  /* Light sheen on the orange card */
  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.15) 0%, transparent 40%);
      mix-blend-mode: overlay; transition: opacity 0.3s ease;
  }

  /* Realistic iPhone Mockup Hardware */
  .iphone-bezel {
      background-color: #f8fafc; /* White/Silver phone */
      box-shadow: 
          inset 0 0 0 2px #e2e8f0, 
          inset 0 0 0 6px #f1f5f9, 
          0 40px 80px -15px rgba(0,0,0,0.3),
          0 15px 25px -5px rgba(0,0,0,0.2);
      transform-style: preserve-3d;
      border: 1px solid #cbd5e1;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #e2e8f0 0%, #f8fafc 100%);
      box-shadow: 
          -2px 0 3px rgba(0,0,0,0.1),
          inset -1px 0 1px rgba(255,255,255,0.8),
          inset 1px 0 2px rgba(0,0,0,0.1);
      border-left: 1px solid rgba(255,255,255,0.5);
  }
  
  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 45%);
  }

  /* Floating UI Badges (Glassmorphism adapted for orange bg) */
  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
      backdrop-filter: blur(24px); 
      -webkit-backdrop-filter: blur(24px);
      box-shadow: 
          0 0 0 1px rgba(255, 255, 255, 0.5),
          0 25px 50px -12px rgba(153, 27, 27, 0.3),
          inset 0 1px 1px rgba(255,255,255,0.6),
          inset 0 -1px 1px rgba(0,0,0,0.05);
  }

  /* Physical Tactile Buttons (For the CTA) */
  .btn-modern-light, .btn-modern-dark {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-modern-light {
      background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%);
      color: #0F172A;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.15), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.1), 0 20px 32px -6px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active {
      transform: translateY(1px);
      background: linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1), inset 0 3px 6px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.02);
  }
  /* Our dark CTA button */
  .btn-modern-dark {
      background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
      color: #FFFFFF;
      box-shadow: 0 0 0 1px rgba(15,23,42,0.1), 0 2px 4px rgba(15,23,42,0.3), 0 12px 24px -4px rgba(15,23,42,0.4), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.4);
  }
  .btn-modern-dark:hover {
      transform: translateY(-3px);
      background: linear-gradient(180deg, #334155 0%, #1e293b 100%);
      box-shadow: 0 0 0 1px rgba(15,23,42,0.15), 0 6px 12px -2px rgba(15,23,42,0.3), 0 20px 32px -6px rgba(15,23,42,0.5), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(0,0,0,0.4);
  }
  .btn-modern-dark:active {
      transform: translateY(1px);
      background: #0f172a;
      box-shadow: 0 0 0 1px rgba(15,23,42,0.05), inset 0 3px 8px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,0,0,0.5);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`;

export function CinematicLandingHero({ 
  brandName = "Medipatte",
  tagline1 = "La santé animale,",
  tagline2 = "au doigt et à l'œil.",
  cardHeading = "Le suivi réinventé.",
  cardDescription = <><span className="text-white font-semibold flex mb-2">Medipatte</span> donne aux parents d'animaux le pouvoir de gérer les traitements, rappels et vaccins avec une interface fluide, et une bienveillance qui a du chien.</>,
  metricValue = 2,
  metricLabel = "Traitements",
  ctaHeading = "Rejoignez la meute.",
  ctaDescription = "Téléchargez Medipatte dès aujourd'hui et offrez à votre compagnon l'attention qu'il mérite.",
  className, 
  ...props 
}) {
  
  const containerRef = useRef(null);
  const mainCardRef = useRef(null);
  const mockupRef = useRef(null);
  const requestRef = useRef(0);

  // 1. Mouse Interaction Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.scrollY > window.innerHeight * 2) return;

      cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          
          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  },[]);

  // 2. Cinematic GSAP Timeline
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], { autoAlpha: 0 });
      gsap.set(".cta-wrapper", { autoAlpha: 0, scale: 0.8, filter: "blur(30px)", display: "none" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=5000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to([".hero-text-wrapper", ".bg-grid-theme"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
        )
        // Medipatte specific: scale the screen UI elements
        .fromTo(".phone-widget", { y: 20, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.1, ease: "back.out(1.2)", duration: 1 }, "-=1.5")
        
        // Progress ring logic replaced by standard staggering since we swapped the UI
        .fromTo(".floating-badge", { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 }, { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
        .fromTo(".card-left-text", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .fromTo(".card-right-text", { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
        .to({}, { duration: 2.5 })
        
        // Hide initial text, show CTA
        .set(".hero-text-wrapper", { display: "none" })
        .set(".cta-wrapper", { display: "flex", autoAlpha: 0 }) 
        
        .to({}, { duration: 1.5 })
        .to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text", ".card-right-text"], {
          scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
        })
        
        // Responsive card pullback sizing
        .to(".main-card", { 
          width: isMobile ? "94vw" : "85vw", 
          height: isMobile ? "90vh" : "85vh", 
          borderRadius: isMobile ? "32px" : "40px", 
          ease: "expo.inOut", 
          duration: 1.8 
        }, "pullback") 
        .to(".cta-wrapper", { autoAlpha: 1, scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });

    }, containerRef);

    return () => ctx.revert();
  },[metricValue]); 

  return (
    <div
      ref={containerRef}
      className={cn("relative w-screen h-screen overflow-hidden flex items-center justify-center bg-slate-50 text-slate-800 font-sans antialiased", className)}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-[0.85]" aria-hidden="true" />

      {/* BACKGROUND LAYER 1: Hero Texts (Light Theme) */}
      <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform transform-style-3d">
        <h1 className="text-track gsap-reveal text-3d-matte text-[11vw] md:text-[8vw] lg:text-[7vw] font-bold tracking-tight mb-2 leading-[1.1]">
          {tagline1}
        </h1>
        <h1 className="text-days gsap-reveal text-silver-matte text-[11vw] md:text-[8vw] lg:text-[7vw] font-extrabold tracking-tighter leading-[1.1]">
          {tagline2}
        </h1>
      </div>

      {/* BACKGROUND LAYER 2: Tactile CTA Buttons */}
      <div className="cta-wrapper absolute z-10 flex-col items-center justify-center text-center w-screen px-4 gsap-reveal pointer-events-auto will-change-transform hidden">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-slate-900">
          {ctaHeading}
        </h2>
        <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium leading-relaxed">
          {ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#" aria-label="Download on the App Store" className="btn-modern-light flex items-center justify-center gap-3 px-8 py-4 rounded-3xl group">
            <svg className="w-8 h-8 transition-transform group-hover:scale-105" fill="currentColor" viewBox="0 0 384 512" aria-hidden="true">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase mb-[-2px]">Download on the</div>
              <div className="text-xl font-bold leading-none tracking-tight">App Store</div>
            </div>
          </a>
          <a href="#" aria-label="Get it on Google Play" className="btn-modern-dark flex items-center justify-center gap-3 px-8 py-4 rounded-3xl group">
            <svg className="w-7 h-7 text-white transition-transform group-hover:scale-105" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
               <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
            </svg>
            <div className="text-left text-white">
              <div className="text-[10px] font-bold tracking-wider text-slate-300 uppercase mb-[-2px]">Get it on</div>
              <div className="text-xl font-bold leading-none tracking-tight">Google Play</div>
            </div>
          </a>
        </div>
      </div>

      {/* FOREGROUND LAYER: The Physical Orange Medipatte Card */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          {/* DYNAMIC RESPONSIVE GRID */}
          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">
            
            {/* BRAND NAME */}
            <div className="card-right-text gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
              <h2 className="text-5xl md:text-[6rem] lg:text-[7rem] font-black uppercase tracking-tighter text-card-silver-matte lg:mt-0">
                {brandName}
              </h2>
            </div>

            {/* IPHONE MOCKUP (Light Edition) */}
            <div className="mockup-scroll-wrapper order-2 lg:order-2 relative w-full h-[400px] lg:h-[600px] flex items-center justify-center z-10" style={{ perspective: "1000px" }}>
              <div className="relative w-full h-full flex items-center justify-center transform scale-[0.70] md:scale-85 lg:scale-105">
                
                {/* Silver Bezel */}
                <div
                  ref={mockupRef}
                  className="relative w-[300px] h-[600px] rounded-[3.2rem] iphone-bezel flex flex-col will-change-transform transform-style-3d p-2.5 pb-3 bg-white"
                >
                  <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]" aria-hidden="true" />

                  {/* Inner Screen Container - App Mockup UI substituted here */}
                  <div className="absolute inset-[8px] bg-slate-50 rounded-[2.8rem] overflow-hidden shadow-[inset_0_0_8px_rgba(0,0,0,0.1)] text-slate-800 z-10 flex flex-col">
                    <div className="absolute inset-0 screen-glare z-40 pointer-events-none" aria-hidden="true" />

                    {/* Notch */}
                    <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[110px] h-[26px] bg-black rounded-full z-50 flex items-center justify-end px-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                    </div>

                    {/* The Medipatte Form UI */}
                    <div className="bg-white rounded-[2.6rem] overflow-hidden flex-1 flex flex-col relative px-5 pt-12 pb-5 font-sans">
                      <h2 className="phone-widget text-xl font-bold text-brand-600 text-center mb-6 mt-2 relative z-20">Nouveau Traitement</h2>

                      <button className="phone-widget relative z-20 w-full flex items-center justify-center gap-2 py-3 px-2 border border-brand-500 bg-brand-50 text-brand-500 rounded-2xl text-[13px] font-semibold mb-6 shadow-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8V5a2 2 0 012-2h3m13 5V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3m13-5v3a2 2 0 01-2 2h-3m-4-7a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                          <span>Scanner ordonnance (IA)</span>
                      </button>

                      <div className="flex-1 overflow-hidden space-y-5 pb-2 relative z-20">
                          <div className="phone-widget">
                              <p className="text-[13px] text-slate-500 mb-2 font-medium">Pour qui ?</p>
                              <div className="flex gap-3">
                                  <div className="px-6 py-2 bg-brand-200 text-white font-bold rounded-full shadow-sm text-sm whitespace-nowrap">Rex</div>
                                  <div className="px-6 py-2 bg-brand-50 text-brand-600 font-bold rounded-full text-sm whitespace-nowrap border border-brand-50/50">Luna</div>
                              </div>
                          </div>

                          <div className="space-y-3">
                              <div className="phone-widget flex items-center gap-3 bg-brand-50/70 p-3.5 rounded-2xl text-slate-400">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101M10.172 13.828a4 4 0 015.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                                  <span className="text-sm font-medium">Nom du médicament</span>
                              </div>
                              <div className="phone-widget flex items-center gap-3 bg-brand-50/70 p-3.5 rounded-2xl text-slate-400">
                                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                                  <span className="text-sm font-medium truncate">Dosage</span>
                              </div>
                          </div>

                          <div className="phone-widget">
                              <p className="text-[13px] text-slate-500 mb-2 font-medium">Format</p>
                              <div className="flex gap-2">
                                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-100/60 text-brand-600 rounded-full text-xs font-bold">
                                      Pilule
                                  </div>
                                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-brand-600 rounded-full text-xs font-bold">
                                      Goutte
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="phone-widget pt-3 mt-auto relative z-20 bg-white">
                          <button className="w-full bg-brand-500 text-brand-900 font-extrabold py-3.5 rounded-2xl shadow-md text-sm">
                              Ajouter le traitement
                          </button>
                      </div>

                      {/* Phone Bottom Bar Indicator */}
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-slate-300 rounded-full z-40" />
                    </div>
                  </div>
                </div>

                {/* Floating Glass Badges adapted for light mode */}
                <div className="floating-badge absolute flex top-8 lg:top-14 left-[-10px] lg:left-[-70px] bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30 shadow-lg shadow-brand-500/10">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-brand-50 flex items-center justify-center border border-brand-100 shadow-sm">
                    <span className="text-base lg:text-xl drop-shadow-sm" aria-hidden="true">🐶</span>
                  </div>
                  <div>
                    <p className="text-slate-800 text-xs lg:text-sm font-bold tracking-tight">Vaccin Rex effectué</p>
                    <p className="text-brand-600 text-[10px] lg:text-xs font-medium">Enregistré à 08:30</p>
                  </div>
                </div>

                <div className="floating-badge absolute flex bottom-14 lg:bottom-24 right-[-10px] lg:right-[-70px] bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30 shadow-lg shadow-brand-500/10">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 shadow-sm">
                    <span className="text-base lg:text-lg drop-shadow-sm" aria-hidden="true">🩺</span>
                  </div>
                  <div>
                    <p className="text-slate-800 text-xs lg:text-sm font-bold tracking-tight">Dossier Partagé</p>
                    <p className="text-emerald-600 text-[10px] lg:text-xs font-medium">Cabinet Vétérinaire 🐾</p>
                  </div>
                </div>

              </div>
            </div>

            {/* ACCOUNTABILITY TEXT */}
            <div className="card-left-text gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full lg:max-w-none px-4 lg:px-0">
              <h3 className="text-white text-3xl md:text-3xl lg:text-4xl font-extrabold mb-0 lg:mb-5 tracking-tight drop-shadow-sm">
                {cardHeading}
              </h3>
              <p className="hidden md:block text-brand-50/90 text-sm md:text-base lg:text-lg font-medium leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none mt-2 lg:mt-0">
                {cardDescription}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
