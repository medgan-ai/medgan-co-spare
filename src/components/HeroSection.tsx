import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Placeholder for observeScrollAnimation
    const cleanup = () => {};
    return cleanup;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Colors from your palette
    const colors = ['#1230AE', '#6C48C5', '#C68FE6', '#FFF7F7'];
    
    // Create gradient orbs
    const orbs = Array.from({ length: 6 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 300 + 200,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.3 + 0.1
    }));

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw orbs
      orbs.forEach(orb => {
        // Update position
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off edges
        if (orb.x < -orb.radius || orb.x > width + orb.radius) orb.vx *= -1;
        if (orb.y < -orb.radius || orb.y > height + orb.radius) orb.vy *= -1;

        // Create radial gradient
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        );
        
        gradient.addColorStop(0, `${orb.color}${Math.floor(orb.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${orb.color}00`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add overall gradient overlay
      const overlayGradient = ctx.createLinearGradient(0, 0, width, height);
      overlayGradient.addColorStop(0, '#1230AE15');
      overlayGradient.addColorStop(0.3, '#6C48C520');
      overlayGradient.addColorStop(0.7, '#C68FE620');
      overlayGradient.addColorStop(1, '#FFF7F730');
      
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 md:pt-40 md:pb-28 px-4 md:px-8 relative overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
      />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center animate-on-scroll">
          <div className="inline-block mb-3 md:mb-4 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-xs md:text-sm font-medium text-[#1230AE] backdrop-blur-sm">
            Revolutionizing Industries with AI
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 text-black drop-shadow-lg">
            Transform Your Business with{' '}
            <span className="text-[#1230AE] block md:inline">Agentic AI</span>
          </h1>
          
          <p className="text-base md:text-xl lg:text-2xl text-black mb-6 md:mb-8 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
            Leading <span className="text-[#1230AE]">Agentic AI</span> provider in MENA, building intelligent autonomous agents that transform business operations and growth.
          </p>
          
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center max-w-xs md:max-w-none mx-auto">
            <Button
              className="bg-[#1230AE] hover:bg-[#6C48C5] text-white px-6 md:px-8 py-4 md:py-6 rounded-lg md:rounded-md transition-all shadow-lg backdrop-blur-sm w-full md:w-auto"
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>

            <Button
              variant="outline"
              className="border border-black text-black hover:bg-black/10 px-6 md:px-8 py-4 md:py-6 rounded-lg md:rounded-md transition-all backdrop-blur-sm shadow-lg w-full md:w-auto"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;