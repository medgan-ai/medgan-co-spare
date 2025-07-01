import React, { useEffect } from "react";
import { observeScrollAnimation } from "@/utils/animation";
import { Database, Layers, BarChart, Network, Microscope, Lock, Globe, Shield, Cpu } from "lucide-react";

const FeaturesSection = () => {
  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);

  return (
    <section id="features" className="section-padding bg-medgan-light-blue/30 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-white/60 animate-float blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-medgan-blue/10 animate-pulse-slow blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-white text-sm font-medium text-medgan-blue">
            Our Technology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Solutions Built for the MENA Region</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We develop accessible AI technologies that address regional challenges while meeting global standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="glass-morphism p-8 rounded-2xl animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-medgan-dark-blue">Regional AI Platform</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-medgan-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">MENA-Focused Solutions</h4>
                  <p className="text-gray-600">
                    AI models specifically trained on regional data and business contexts.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-medgan-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Arabic NLP</h4>
                  <p className="text-gray-600">
                    Advanced natural language processing for Arabic dialects and business terminology.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-medgan-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Local Compliance</h4>
                  <p className="text-gray-600">
                    Built to meet MENA data protection and regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism p-8 rounded-2xl animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-medgan-dark-blue">Accessible AI Technology</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-medgan-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Lightweight Architecture</h4>
                  <p className="text-gray-600">
                    Optimized for businesses with limited technical infrastructure.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-medgan-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Modular Deployment</h4>
                  <p className="text-gray-600">
                    Start small and scale as your business grows.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                  <BarChart className="w-5 h-5 text-medgan-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Cost-Effective</h4>
                  <p className="text-gray-600">
                    Affordable pricing models for businesses of all sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl animate-on-scroll">
          <div className="p-1 bg-gradient-to-tr from-medgan-blue to-medgan-light-blue">
            <div className="bg-white p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <h3 className="text-2xl font-bold mb-4 text-medgan-dark-blue">Regional Impact</h3>
                  <p className="text-gray-600 mb-6">
                    Our solutions are transforming businesses across the Middle East and North Africa,
                    helping regional organizations compete on a global scale.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Arabic Language Accuracy</span>
                        <span className="text-sm font-medium text-medgan-blue">96%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-medgan-blue h-2 rounded-full" style={{ width: "96%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Local Business Adoption</span>
                        <span className="text-sm font-medium text-medgan-blue">89%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-medgan-blue h-2 rounded-full" style={{ width: "89%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Implementation Speed</span>
                        <span className="text-sm font-medium text-medgan-blue">94%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-medgan-blue h-2 rounded-full" style={{ width: "94%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-medgan-blue/10 to-medgan-light-blue/30 p-6">
                  <div className="text-center p-4">
                    <div className="mb-2 text-lg font-bold text-medgan-dark-blue">MENA Success Metrics</div>
                    <div className="space-y-4">
                      <div className="glass-morphism p-4 rounded-lg">
                        <div className="text-3xl font-bold text-medgan-blue">78%</div>
                        <div className="text-sm text-gray-600">Faster regional market analysis</div>
                      </div>
                      
                      <div className="glass-morphism p-4 rounded-lg">
                        <div className="text-3xl font-bold text-medgan-blue">65%</div>
                        <div className="text-sm text-gray-600">Reduction in localization costs</div>
                      </div>
                      
                      <div className="glass-morphism p-4 rounded-lg">
                        <div className="text-3xl font-bold text-medgan-blue">90%</div>
                        <div className="text-sm text-gray-600">Arabic content processing accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;