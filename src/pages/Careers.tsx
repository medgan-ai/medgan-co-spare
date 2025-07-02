import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { observeScrollAnimation } from "@/utils/animation";
import { Briefcase, Users, Heart } from "lucide-react";

const Careers = () => {
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
                Join Our Team
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Be part of a team that's revolutionizing industries with cutting-edge AI solutions. We're looking for talented individuals who are passionate about pushing the boundaries of what's possible.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 px-6 md:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join MedGAN?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer more than just a job. We provide an opportunity to work on challenging problems with impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cutting-Edge Technology",
                  description: "Work with the latest AI technologies and contribute to pushing the boundaries of what's possible."
                },
                {
                  title: "Collaborative Environment",
                  description: "Join a team that values collaboration, knowledge sharing, and mutual growth."
                },
                {
                  title: "Professional Growth",
                  description: "Continuous learning opportunities and career advancement paths tailored to your goals."
                },
                {
                  title: "Work-Life Balance",
                  description: "Flexible work arrangements that respect your life outside of work."
                },
                {
                  title: "Competitive Compensation",
                  description: "Attractive salary packages, health benefits, and equity options."
                },
                {
                  title: "Global Impact",
                  description: "Contribute to solutions that are making a difference across various industries worldwide."
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 animate-on-scroll"
                >
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* No Current Openings Section */}
        <section className="py-20 px-6 md:px-8 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <div className="flex justify-center mb-6">
                <div className="bg-medgan-light-blue/20 p-4 rounded-full">
                  <Briefcase className="w-12 h-12 text-medgan-blue" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">No Current Openings</h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't have any job openings at the moment, but we're always growing and looking for exceptional talent to join our team. We encourage you to check back regularly or submit your resume for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-medgan-blue hover:bg-medgan-dark-blue text-white px-8 py-6">
                  Submit Your Resume
                </Button>
                <Button variant="outline" className="border-medgan-blue text-medgan-blue hover:bg-medgan-blue hover:text-white px-8 py-6">
                  Get Notified of Openings
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Culture Section */}
        <section className="py-20 px-6 md:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                At MedGAN, we foster a culture of innovation, collaboration, and continuous learning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 animate-on-scroll text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-medgan-light-blue/20 p-3 rounded-full">
                    <Heart className="w-8 h-8 text-medgan-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We encourage creative thinking and taking calculated risks to push the boundaries of what's possible with AI.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 animate-on-scroll text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-medgan-light-blue/20 p-3 rounded-full">
                    <Users className="w-8 h-8 text-medgan-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We believe that the best solutions come from diverse teams working together toward a common goal.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 animate-on-scroll text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-medgan-light-blue/20 p-3 rounded-full">
                    <Briefcase className="w-8 h-8 text-medgan-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Learning</h3>
                <p className="text-gray-600">
                  We're committed to continuous learning and professional development for every team member.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stay Connected Section */}
        <section className="py-20 px-6 md:px-8 bg-medgan-blue text-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
              <p className="text-xl opacity-90 mb-8">
                Want to be the first to know when new positions become available? Join our talent network and we'll notify you when opportunities that match your skills open up.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-medgan-blue hover:bg-gray-100 px-8 py-6 text-lg">
                  Join Our Talent Network
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-medgan-blue px-8 py-6 text-lg">
                  Follow Us on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Careers;