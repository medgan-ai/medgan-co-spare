
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { observeScrollAnimation } from "@/utils/animation";
import { Brain, Database, Zap, LineChart, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AiSolutions = () => {
  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 bg-gradient-to-b from-medgan-light-blue/30 to-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Advanced AI Solutions for Modern Businesses
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Harness the power of artificial intelligence to transform your business operations, drive innovation, and gain competitive advantage.
              </p>
              <Link to="/contact">
                <Button className="bg-medgan-blue hover:bg-medgan-dark-blue text-white px-8 py-6">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-20 px-6 md:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive AI Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our cutting-edge AI technologies are designed to address complex challenges across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 animate-on-scroll">
                <div className="w-12 h-12 bg-medgan-light-blue rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-medgan-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Machine Learning Models</h3>
                <p className="text-gray-600 mb-4">
                  Custom machine learning models designed to solve specific business problems and extract insights from your data.
                </p>
                <Link to="/ai-solutions" className="inline-flex items-center text-medgan-blue hover:text-medgan-dark-blue font-medium">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 animate-on-scroll">
                <div className="w-12 h-12 bg-medgan-light-blue rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-medgan-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Processing</h3>
                <p className="text-gray-600 mb-4">
                  Efficient and scalable solutions for processing large datasets, ensuring high-quality data for your AI systems.
                </p>
                <Link to="/ai-solutions" className="inline-flex items-center text-medgan-blue hover:text-medgan-dark-blue font-medium">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 animate-on-scroll">
                <div className="w-12 h-12 bg-medgan-light-blue rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-medgan-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Forecast future trends and behaviors with our advanced predictive analytics solutions powered by AI.
                </p>
                <Link to="/ai-solutions" className="inline-flex items-center text-medgan-blue hover:text-medgan-dark-blue font-medium">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 animate-on-scroll">
                <div className="w-12 h-12 bg-medgan-light-blue rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="w-6 h-6 text-medgan-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Business Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Transform raw data into actionable insights with our AI-powered business intelligence solutions.
                </p>
                <Link to="/ai-solutions" className="inline-flex items-center text-medgan-blue hover:text-medgan-dark-blue font-medium">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 animate-on-scroll">
                <div className="w-12 h-12 bg-medgan-light-blue rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-medgan-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom AI Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Tailored AI solutions designed specifically for your unique business challenges and requirements.
                </p>
                <Link to="/ai-solutions" className="inline-flex items-center text-medgan-blue hover:text-medgan-dark-blue font-medium">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 animate-on-scroll">
                <div className="w-12 h-12 bg-medgan-light-blue rounded-lg flex items-center justify-center mb-4">
                  <div className="text-medgan-blue font-bold text-xl">API</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI APIs & Integration</h3>
                <p className="text-gray-600 mb-4">
                  Seamless integration of AI capabilities into your existing systems through our robust API solutions.
                </p>
                <Link to="/ai-solutions" className="inline-flex items-center text-medgan-blue hover:text-medgan-dark-blue font-medium">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Industries Section */}
        <section className="py-20 px-6 md:px-8 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our AI solutions are designed to address specific challenges across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Healthcare", 
                "Finance", 
                "Manufacturing", 
                "Retail", 
                "Agriculture", 
                "Energy",
                "Education",
                "Transportation",
                "Government"
              ].map((industry, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow animate-on-scroll"
                >
                  <h3 className="text-xl font-semibold mb-2">{industry}</h3>
                  <p className="text-gray-600">
                    Specialized AI solutions designed for the unique challenges and opportunities in the {industry.toLowerCase()} sector.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 md:px-8 bg-medgan-blue text-white">
          <div className="container max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-2/3 mb-10 lg:mb-0 animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-xl opacity-90 max-w-2xl">
                  Partner with us to implement cutting-edge AI solutions that drive innovation and business growth.
                </p>
              </div>
              <div className="animate-on-scroll">
                <Link to="/contact">
                  <Button className="bg-white text-medgan-blue hover:bg-gray-100 px-8 py-6 text-lg">
                    Contact Us Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AiSolutions;
