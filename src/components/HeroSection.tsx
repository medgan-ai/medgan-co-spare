
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { observeScrollAnimation } from "@/utils/animation";

const HeroSection = () => {
  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);

  return (    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-medgan-cream/50 to-medgan-light-purple/10"></div>
        <div className="absolute top-20 left-40 w-72 h-72 rounded-full bg-medgan-purple/10 animate-pulse-slow blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-80 h-80 rounded-full bg-medgan-dark-blue/10 animate-float blur-3xl"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-medgan-light-purple/20 border border-medgan-purple/30 text-sm font-medium text-medgan-dark-blue">
              Revolutionizing Industries with AI
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI-Powered Innovations for a Smarter Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              MedGAN transforms complex data into actionable insights using advanced 
              generative AI models, empowering organizations across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">              <Button
              className="bg-medgan-dark-blue hover:bg-medgan-purple text-white px-8 py-6 rounded-md transition-all"
              onClick={() => window.location.href = "/#about"}
            >
              Learn More
            </Button>

              <Button
              variant="outline"
              className="border-medgan-purple text-medgan-purple hover:bg-medgan-light-purple/20 px-8 py-6 rounded-md transition-all"
              onClick={() => window.location.href = "/#contact"}
            >
              Schedule Demo
            </Button>

            </div>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="relative z-10 glass-morphism rounded-2xl overflow-hidden shadow-xl">
              <div className="p-1 bg-gradient-to-tr from-medgan-blue/20 to-medgan-light-blue/40 rounded-2xl">
                <div className="bg-white p-4 rounded-xl">
                  <div className="aspect-[4/3] bg-medgan-light-blue rounded-lg flex items-center justify-center overflow-hidden relative">
                    <div className="absolute w-56 h-56 bg-medgan-blue/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
                    <div className="absolute w-40 h-40 bg-white/50 rounded-full filter blur-xl animate-spin-slow"></div>
                    
                    <div className="relative z-10 w-3/4 aspect-square">
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg viewBox="0 0 200 200" className="w-full h-full text-medgan-blue animate-float">
                            <path 
                              fill="currentColor"
                              d="M47.7,-57.2C59.1,-47.3,64.1,-30.1,68.1,-12.4C72,5.3,74.9,23.5,68.2,37.8C61.5,52.1,45.3,62.4,28.3,67.3C11.3,72.3,-6.6,71.8,-23.5,66.4C-40.4,60.9,-56.2,50.5,-65.2,35.8C-74.1,21.1,-76.1,2.1,-71.2,-14.3C-66.2,-30.7,-54.2,-44.5,-40.5,-54.2C-26.8,-63.9,-11.4,-69.3,3.5,-73.6C18.4,-77.8,36.3,-67.1,47.7,-57.2Z" 
                              transform="translate(100 100)" 
                            />
                          </svg>
                          
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-xl font-bold text-white">MedGAN</div>
                              <div className="text-xs text-white/80">AI Innovation</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="h-2 bg-medgan-gray rounded-full w-full animate-pulse"></div>
                    <div className="h-2 bg-medgan-gray rounded-full w-3/4 animate-pulse"></div>
                    <div className="h-2 bg-medgan-gray rounded-full w-1/2 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass-morphism p-4 rounded-lg shadow-lg animate-float max-w-[200px]">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-medgan-blue rounded-md flex items-center justify-center text-white font-bold">
                  AI
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 glass-morphism p-4 rounded-lg shadow-lg animate-float delay-300 max-w-[200px]">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-medgan-blue rounded-md flex items-center justify-center text-white font-bold">
                  ML
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
