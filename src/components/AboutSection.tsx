
import React, { useEffect } from "react";
import { observeScrollAnimation } from "@/utils/animation";
import { Brain, ShieldCheck, TrendingUp, HeartPulse } from "lucide-react";

const AboutSection = () => {
  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);

  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-medgan-light-blue/40 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-medgan-light-blue/30 animate-pulse-slow blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-medgan-light-blue text-sm font-medium text-medgan-blue">
            About MedGAN
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pioneering AI Solutions Across All Fields</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MedGAN is an innovative AI startup dedicated to developing cutting-edge AI models and intelligent agents
            that revolutionize how industries operate and solve complex problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-morphism p-6 rounded-xl animate-on-scroll">
            <div className="w-12 h-12 rounded-lg bg-medgan-light-blue flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-medgan-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced AI Models</h3>
            <p className="text-gray-600">
              Creating sophisticated AI models trained on comprehensive datasets for diverse applications.
            </p>
          </div>
          
          <div className="glass-morphism p-6 rounded-xl animate-on-scroll">
            <div className="w-12 h-12 rounded-lg bg-medgan-light-blue flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-medgan-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure AI Agents</h3>
            <p className="text-gray-600">
              Developing autonomous AI agents with robust security measures and ethical considerations.
            </p>
          </div>
          
          <div className="glass-morphism p-6 rounded-xl animate-on-scroll">
            <div className="w-12 h-12 rounded-lg bg-medgan-light-blue flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-medgan-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cross-Industry Solutions</h3>
            <p className="text-gray-600">
              Implementing AI technologies across multiple sectors from healthcare to finance to manufacturing.
            </p>
          </div>
          
          <div className="glass-morphism p-6 rounded-xl animate-on-scroll">
            <div className="w-12 h-12 rounded-lg bg-medgan-light-blue flex items-center justify-center mb-4">
              <HeartPulse className="w-6 h-6 text-medgan-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Human-Centered AI</h3>
            <p className="text-gray-600">
              Creating AI solutions that augment human capabilities and improve quality of life.
            </p>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div className="animate-on-scroll">
    <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
    <p className="text-gray-600 mb-6">
      To democratize artificial intelligence by making advanced AI solutions accessible to businesses of all sizes across the MENA region. 
      We believe every organization deserves the competitive advantage that comes with intelligent automation and autonomous AI agents.
    </p>
    
    <div className="space-y-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <svg className="w-5 h-5 text-medgan-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-gray-600">
            Empower businesses with cutting-edge AI technology
          </p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <svg className="w-5 h-5 text-medgan-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-gray-600">
            Bridge the AI gap in the MENA region
          </p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <svg className="w-5 h-5 text-medgan-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-gray-600">
            Create sustainable competitive advantages
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="glass-morphism rounded-2xl overflow-hidden p-1 animate-on-scroll">
    <div className="bg-gradient-to-tr from-medgan-blue/10 to-medgan-light-blue/30 p-8 rounded-xl">
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-white rounded-full p-2 shadow-md">
            <div className="w-8 h-8 bg-medgan-blue rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold mb-1">Research & Development</h4>
            <p className="text-gray-600">
              Pioneering new AI approaches tailored for MENA market needs.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-white rounded-full p-2 shadow-md">
            <div className="w-8 h-8 bg-medgan-blue rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold mb-1">Regional Adaptation</h4>
            <p className="text-gray-600">
              Customizing solutions for Arabic language and local business contexts.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-white rounded-full p-2 shadow-md">
            <div className="w-8 h-8 bg-medgan-blue rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold mb-1">Accessible Integration</h4>
            <p className="text-gray-600">
              Seamless implementation for businesses at any digital maturity level.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-white rounded-full p-2 shadow-md">
            <div className="w-8 h-8 bg-medgan-blue rounded-full flex items-center justify-center text-white font-bold">
              4
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold mb-1">Continuous Localization</h4>
            <p className="text-gray-600">
              Ongoing refinement based on regional performance data and feedback.
            </p>
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

export default AboutSection;
