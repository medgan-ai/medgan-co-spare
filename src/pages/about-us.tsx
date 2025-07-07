import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Linkedin, Users, Heart, Briefcase } from "lucide-react";
import { observeScrollAnimation } from "@/utils/animation";

const AboutUs = () => {
  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);

  const handleContactClick = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 bg-gradient-to-b from-medgan-light-blue/30 to-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Pioneering the Future of Agentic AI
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                We're a team of world-class AI researchers, engineers, and strategists transforming how businesses operate through autonomous intelligence in the MENA region.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 md:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                To democratize artificial intelligence by making advanced AI solutions accessible to businesses of all sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Empower Businesses",
                  description: "Deliver cutting-edge AI technology that transforms operations and drives growth."
                },
                {
                  title: "Bridge the AI Gap",
                  description: "Make advanced AI accessible across the MENA region regardless of company size."
                },
                {
                  title: "Create Advantages",
                  description: "Develop sustainable competitive advantages through intelligent automation."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 animate-on-scroll"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 px-6 md:px-8 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-8">
                To be the leading AI innovation hub in the MENA region, where autonomous intelligence transforms industries and creates unprecedented opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="bg-medgan-light-blue p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-medgan-blue">2030</p>
                  <p className="text-gray-600">AI Leadership Goal</p>
                </div>
                <div className="bg-medgan-light-blue p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-medgan-blue">1000+</p>
                  <p className="text-gray-600">Businesses Transformed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 md:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and every solution we create.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 animate-on-scroll text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-medgan-light-blue/20 p-3 rounded-full">
                    <Heart className="w-8 h-8 text-medgan-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                <p className="text-gray-600">
                  We push the boundaries of what's possible with AI, constantly exploring cutting-edge technologies.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 animate-on-scroll text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-medgan-light-blue/20 p-3 rounded-full">
                    <Users className="w-8 h-8 text-medgan-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Client-Centric</h3>
                <p className="text-gray-600">
                  Every solution is tailored to our clients' unique challenges for maximum impact.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 animate-on-scroll text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-medgan-light-blue/20 p-3 rounded-full">
                    <Briefcase className="w-8 h-8 text-medgan-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">MENA Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of the regional market and business environment across MENA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 md:px-8 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                World-class AI experts, researchers, and strategists united by a passion for transformative technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Eng. Mohammed Zaloom",
                  title: "Founder",
                  bio: "AI and Robotics graduate passionate about applying emerging technologies to solve real-world problems.",
                  linkedin: "https://www.linkedin.com/in/mozaloom"
                },
                {
                  name: "Eng. Hamza Nasser",
                  title: "Founder",
                  bio: "Expert in machine learning and computer vision, building real-world AI solutions with meaningful impact.",
                  linkedin: "https://www.linkedin.com/in/hamza-waseem-nasser/"
                },
                {
                  name: "Eng. Mahmoud AbuAwd",
                  title: "Founder",
                  bio: "AWS Certified AI Practitioner specializing in computer vision, NLP, and medical imaging solutions.",
                  linkedin: "https://www.linkedin.com/in/mahmoud-abuawd"
                }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 animate-on-scroll"
                >
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-medgan-blue mb-4">{member.title}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-medgan-blue hover:text-medgan-dark-blue transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-8 bg-medgan-blue text-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl opacity-90 mb-8">
                Discover how our Agentic AI solutions can revolutionize your operations and give you a competitive edge.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  onClick={handleContactClick}
                  className="bg-white text-medgan-blue hover:bg-gray-100 px-8 py-6 text-lg"
                >
                  Contact Us
                </Button>
                <Button 
                  onClick={() => window.open('https://www.linkedin.com/company/medgan', '_blank')}
                  variant="outline"
                  className="border-white text-medgan-blue hover:bg-white hover:text-medgan-blue px-8 py-6 text-lg"
                >
                  Follow Us
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

export default AboutUs;