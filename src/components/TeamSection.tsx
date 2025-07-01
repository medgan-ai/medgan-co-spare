
import React, { useEffect } from "react";
import { observeScrollAnimation } from "@/utils/animation";
import { Linkedin, Twitter, Mail } from "lucide-react";

const TeamSection = () => {
  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);

  return (
    <section id="team" className="section-padding bg-white relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-medgan-light-blue/30 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-64 h-64 rounded-full bg-medgan-light-blue/20 animate-pulse-slow blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-medgan-light-blue text-sm font-medium text-medgan-blue">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Co-Founders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We bring together expertise in AI engineering and machine learning to create cutting-edge AI solutions across all fields.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-morphism rounded-2xl overflow-hidden animate-on-scroll">
            <div className="aspect-w-3 aspect-h-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-medgan-blue/10 to-medgan-light-blue/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Mohammed Zaloom</h3>
              <p className="text-medgan-blue mb-3">AI Engineer & Co-Founder</p>
              <p className="text-gray-600 mb-4">
                Specialized in developing advanced AI models and integrating AI solutions into practical applications across industries.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-medgan-blue transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-medgan-blue transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-medgan-blue transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism rounded-2xl overflow-hidden animate-on-scroll">
            <div className="aspect-w-3 aspect-h-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-medgan-blue/10 to-medgan-light-blue/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Mahmoud Abu Awd</h3>
              <p className="text-medgan-blue mb-3">ML Engineer & Co-Founder</p>
              <p className="text-gray-600 mb-4">
                Expert in machine learning algorithms and data modeling with a focus on creating scalable AI solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-medgan-blue transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-medgan-blue transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-medgan-blue transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism rounded-2xl overflow-hidden animate-on-scroll">
            <div className="aspect-w-3 aspect-h-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-medgan-blue/10 to-medgan-light-blue/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Hamza Nasser</h3>
              <p className="text-medgan-blue mb-3">ML Engineer & Co-Founder</p>
              <p className="text-gray-600 mb-4">
                Specializes in developing sophisticated machine learning models and AI agents for diverse industry applications.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-medgan-blue transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-medgan-blue transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-medgan-blue transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 glass-morphism p-8 rounded-2xl animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-medgan-dark-blue">Join Our Team</h3>
              <p className="text-gray-600 mb-6">
                We're looking for talented AI engineers and machine learning specialists who are passionate about pushing the boundaries of artificial intelligence. Join us in our mission to build cutting-edge AI solutions.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow">
                  <h4 className="font-semibold">Senior AI Engineer</h4>
                  <p className="text-sm text-gray-500">Full-time • Remote</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow">
                  <h4 className="font-semibold">Machine Learning Specialist</h4>
                  <p className="text-sm text-gray-500">Full-time • Hybrid</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow">
                  <h4 className="font-semibold">AI Research Scientist</h4>
                  <p className="text-sm text-gray-500">Full-time • On-site</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-tr from-medgan-blue/10 to-medgan-light-blue/30 p-6 rounded-xl">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold mb-2">Our Values</h4>
                <p className="text-gray-600">
                  The principles that guide our work and culture
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-medgan-blue/10 flex items-center justify-center text-medgan-blue font-bold mr-3">
                      1
                    </div>
                    <h5 className="font-semibold">Innovation</h5>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-medgan-blue/10 flex items-center justify-center text-medgan-blue font-bold mr-3">
                      2
                    </div>
                    <h5 className="font-semibold">Integrity</h5>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-medgan-blue/10 flex items-center justify-center text-medgan-blue font-bold mr-3">
                      3
                    </div>
                    <h5 className="font-semibold">Collaboration</h5>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-medgan-blue/10 flex items-center justify-center text-medgan-blue font-bold mr-3">
                      4
                    </div>
                    <h5 className="font-semibold">Impact</h5>
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

export default TeamSection;
