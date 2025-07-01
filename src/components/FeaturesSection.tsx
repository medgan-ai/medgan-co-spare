
import React, { useEffect } from "react";
import { observeScrollAnimation } from "@/utils/animation";
import { Database, Layers, BarChart, Network, Microscope, Lock } from "lucide-react";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cutting-Edge AI for Every Industry</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our proprietary technologies leverage the latest advancements in generative AI to create 
            powerful solutions for professionals across all fields.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="glass-morphism p-8 rounded-2xl animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-medgan-dark-blue">MedGAN Core Platform</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-medgan-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Secure Data Processing</h4>
                  <p className="text-gray-600">
                    Industry-leading encryption and anonymization for sensitive data protection.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-medgan-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Modular Architecture</h4>
                  <p className="text-gray-600">
                    Customizable components to address specific industry needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                  <BarChart className="w-5 h-5 text-medgan-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Advanced Analytics</h4>
                  <p className="text-gray-600">
                    Real-time insights from complex data to inform decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism p-8 rounded-2xl animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-medgan-dark-blue">Generative AI Systems</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                  <Network className="w-5 h-5 text-medgan-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Neural Networks</h4>
                  <p className="text-gray-600">
                    Sophisticated models trained on diverse datasets for accurate results across industries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-medgan-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Tailored Solutions</h4>
                  <p className="text-gray-600">
                    Customized recommendations based on specific industry and organizational needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-medgan-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Compliance Built-in</h4>
                  <p className="text-gray-600">
                    Designed with regulatory requirements and industry standards in mind.
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
                  <h3 className="text-2xl font-bold mb-4 text-medgan-dark-blue">Technology in Action</h3>
                  <p className="text-gray-600 mb-6">
                    Our AI solutions are deployed across various industries, from finance to manufacturing to retail,
                    helping professionals make better decisions and improve operational efficiency.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Prediction Accuracy</span>
                        <span className="text-sm font-medium text-medgan-blue">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-medgan-blue h-2 rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Processing Speed</span>
                        <span className="text-sm font-medium text-medgan-blue">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-medgan-blue h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Patient Satisfaction</span>
                        <span className="text-sm font-medium text-medgan-blue">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-medgan-blue h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-medgan-blue/10 to-medgan-light-blue/30 p-6">
                  <div className="text-center p-4">
                    <div className="mb-2 text-lg font-bold text-medgan-dark-blue">Real-world Impact</div>
                    <div className="space-y-4">
                      <div className="glass-morphism p-4 rounded-lg">
                        <div className="text-3xl font-bold text-medgan-blue">85%</div>
                        <div className="text-sm text-gray-600">Reduction in processing time</div>
                      </div>
                      
                      <div className="glass-morphism p-4 rounded-lg">
                        <div className="text-3xl font-bold text-medgan-blue">60%</div>
                        <div className="text-sm text-gray-600">Decrease in operational errors</div>
                      </div>
                      
                      <div className="glass-morphism p-4 rounded-lg">
                        <div className="text-3xl font-bold text-medgan-blue">40%</div>
                        <div className="text-sm text-gray-600">Cost reduction for organizations</div>
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
