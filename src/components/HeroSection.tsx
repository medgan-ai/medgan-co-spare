import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { observeScrollAnimation } from "@/utils/animation";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const mouseX = useRef<number | null>(null);
  const mouseY = useRef<number | null>(null);

  // Load your logo image
  useEffect(() => {
    const logoImg = new Image();
    logoImg.src = "/images/logo.png"; // Update this path to your logo
    logoImg.onload = () => {
      logoRef.current = logoImg;
    };
  }, []);

  useEffect(() => {
    const cleanup = observeScrollAnimation();
    
    // Futuristic AI Grid Animation
    if (containerRef.current) {
      const container = containerRef.current;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return cleanup;
      
      container.appendChild(canvas);
      
      let width = container.offsetWidth;
      let height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Grid configuration
      const gridSize = 20;
      const cols = Math.ceil(width / gridSize) + 1;
      const rows = Math.ceil(height / gridSize) + 1;
      const points: {x: number, y: number, originX: number, originY: number}[] = [];
      
      // Create grid points
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          points.push({
            x: i * gridSize,
            y: j * gridSize,
            originX: i * gridSize,
            originY: j * gridSize
          });
        }
      }
      
      // Mouse interaction handlers
      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseX.current = e.clientX - rect.left;
        mouseY.current = e.clientY - rect.top;
      };
      
      const handleMouseLeave = () => {
        mouseX.current = null;
        mouseY.current = null;
      };
      
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      
      // Animation loop
      let animationId: number;
      const animate = () => {
        ctx.clearRect(0, 0, width, height);
        
        // Draw connections
        ctx.strokeStyle = 'rgba(100, 150, 255, 0.15)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < points.length; i++) {
          // Check if mouse is active
          if (mouseX.current !== null && mouseY.current !== null) {
            // Calculate distance to mouse
            const dx = mouseX.current - points[i].x;
            const dy = mouseY.current - points[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Move points away from mouse
            if (distance < 150) {
              const force = (150 - distance) / 150;
              const angle = Math.atan2(dy, dx);
              
              points[i].x = points[i].originX + Math.cos(angle) * force * 30;
              points[i].y = points[i].originY + Math.sin(angle) * force * 30;
            } else {
              // Return to original position
              points[i].x += (points[i].originX - points[i].x) * 0.1;
              points[i].y += (points[i].originY - points[i].y) * 0.1;
            }
          } else {
            // Smoothly return to original position when mouse leaves
            points[i].x += (points[i].originX - points[i].x) * 0.2;
            points[i].y += (points[i].originY - points[i].y) * 0.2;
          }
          
          // Connect to nearby points (only if close enough)
          for (let j = i + 1; j < points.length; j++) {
            const dx2 = points[j].x - points[i].x;
            const dy2 = points[j].y - points[i].y;
            const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            
            if (dist2 < gridSize * 2.5) {
              const opacity = 0.15 * (1 - dist2 / (gridSize * 2.5));
              ctx.strokeStyle = `rgba(100, 150, 255, ${opacity})`;
              ctx.beginPath();
              ctx.moveTo(points[i].x, points[i].y);
              ctx.lineTo(points[j].x, points[j].y);
              ctx.stroke();
            }
          }
        }
        
        // Draw points
        ctx.fillStyle = 'rgba(100, 150, 255, 0.8)';
        for (let i = 0; i < points.length; i++) {
          ctx.beginPath();
          ctx.arc(points[i].x, points[i].y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Enhanced central logo display
        const centerX = width / 2;
        const centerY = height / 2;
        const currentTime = Date.now();
        const pulse = 0.8 + Math.sin(currentTime / 800) * 0.2;

        // Outer glow effect
        ctx.shadowColor = 'rgba(100, 180, 255, 0.7)';
        ctx.shadowBlur = 20 * pulse;
        
        // Draw your logo image with pulsing effect
        if (logoRef.current) {
          const logoSize = 100 * pulse; // Adjust size as needed
          const logoX = centerX - logoSize/2;
          const logoY = centerY - logoSize/2;
          
          ctx.save();
          ctx.globalAlpha = 0.9 * pulse;
          ctx.drawImage(logoRef.current, logoX, logoY, logoSize, logoSize);
          ctx.restore();
        }
        
        ctx.shadowBlur = 0;
        
        // Small orbiting dots for high-tech feel
        for (let i = 0; i < 3; i++) {
          const orbitTime = currentTime / (1000 + i * 500);
          const orbitRadius = 60 + i * 10;
          const orbitX = centerX + Math.cos(orbitTime) * orbitRadius * pulse;
          const orbitY = centerY + Math.sin(orbitTime) * orbitRadius * pulse;
          
          ctx.fillStyle = `rgba(100, 220, 255, ${0.8 - i * 0.2})`;
          ctx.beginPath();
          ctx.arc(orbitX, orbitY, 2 * pulse, 0, Math.PI * 2);
          ctx.fill();
        }
        
        animationId = requestAnimationFrame(animate);
      };
      
      animate();
      
      // Handle resize
      const handleResize = () => {
        width = container.offsetWidth;
        height = container.offsetHeight;
        canvas.width = width;
        canvas.height = height;
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        cancelAnimationFrame(animationId);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('resize', handleResize);
        if (canvas.parentNode === container) {
          container.removeChild(canvas);
        }
      };
    }
    
    return cleanup;
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-medgan-cream/50 to-medgan-light-purple/10"></div>
        <div className="absolute top-20 left-40 w-72 h-72 rounded-full bg-medgan-purple/10 animate-pulse-slow blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-80 h-80 rounded-full bg-medgan-dark-blue/10 animate-float blur-3xl"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-medgan-light-purple/20 border border-medgan-purple/30 text-sm font-medium text-medgan-dark-blue">
              Revolutionizing Industries with AI
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Business with Agentic AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Leading Agentic AI provider in MENA, building intelligent autonomous agents that transform business operations and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-medgan-dark-blue hover:bg-medgan-purple text-white px-8 py-6 rounded-md transition-all"
                onClick={() => {
                  const element = document.querySelector('#about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>

              <Button
                variant="outline"
                className="border-medgan-purple text-medgan-purple hover:bg-medgan-light-purple/20 px-8 py-6 rounded-md transition-all"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="relative z-10 glass-morphism rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
              <div className="p-1 bg-gradient-to-tr from-medgan-blue/20 to-medgan-light-blue/40 rounded-2xl h-full">
                <div className="bg-white/10 p-4 rounded-xl h-full">
                  <div 
                    ref={containerRef}
                    className="aspect-[4/3] bg-gradient-to-br from-medgan-dark-blue/10 to-medgan-purple/10 rounded-lg w-full h-full relative overflow-hidden"
                  >
                    {/* Animation is rendered via canvas */}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating AI Elements */}
            <div className="absolute -bottom-6 -right-6 glass-morphism p-3 rounded-lg shadow-lg animate-float max-w-[180px] backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-medgan-blue to-medgan-purple rounded-md flex items-center justify-center text-white font-bold">
                    <div className="absolute inset-0 rounded-md bg-white/10 animate-ping opacity-75"></div>
                    AG
                  </div>
                </div>
                <div className="text-sm font-medium text-medgan-dark-blue">Agent Network</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 glass-morphism p-3 rounded-lg shadow-lg animate-float delay-300 max-w-[180px] backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-medgan-blue to-medgan-purple rounded-md flex items-center justify-center text-white font-bold">
                    <div className="absolute inset-0 rounded-md bg-white/10 animate-ping opacity-75 delay-300"></div>
                    AI
                  </div>
                </div>
                <div className="text-sm font-medium text-medgan-dark-blue">Autonomous Intelligence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;