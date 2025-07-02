import React, { useState, useEffect } from "react";

const AIPlayground: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Mahmoud AbuAwd",
      role: "Founder & CEO",
      description: "Visionary leader with 10+ years in AI architecture and enterprise solutions.",
      linkedin: "https://linkedin.com/in/mashmoud-abuawd",
      github: "https://github.com/mashmoud-abuawd",
      image: "/images/logo3.png" // Using public-relative path
    },
    {
      name: "Hamza Nasser",
      role: "Founder & CTO",
      description: "Expert in machine learning systems and scalable cloud infrastructure.",
      linkedin: "https://linkedin.com/in/hamza-nasser",
      github: "https://github.com/hamza-nasser",
      image: "/images/logo3.png"
    },
    {
      name: "Mohammed Zaloom",
      role: "Founder & COO",
      description: "Operations specialist with a focus on AI product deployment and management.",
      linkedin: "https://linkedin.com/in/mohammed-zaloom",
      github: "https://github.com/mohammed-zaloom",
      image: "/images/logo3.png"
    }
  ];

  // Enhanced SVG Icons with animations
  const LinkedInIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="32" 
      height="32" 
      viewBox="0 0 24 24"
      className="text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
    >
      <path 
        fill="currentColor" 
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      />
    </svg>
  );

  const GithubIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="32" 
      height="32" 
      viewBox="0 0 24 24"
      className="text-gray-800 hover:text-black transition-all duration-300 transform hover:scale-110 hover:-rotate-6"
    >
      <path 
        fill="currentColor" 
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  );

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            About Our Company
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              We are pioneers in Agentic AI solutions, transforming how businesses operate in the MENA region. 
              Our team combines deep technical expertise with visionary leadership to build autonomous systems 
              that drive real business impact.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            The brilliant minds shaping the future of AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-32 h-32 flex items-center justify-center overflow-hidden shadow-lg p-2">
                    <img 
                      src={member.image} 
                      alt={`${member.name}'s profile`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'text-white text-4xl font-bold';
                        fallback.textContent = member.name.split(' ').map(n => n[0]).join('');
                        target.parentNode?.appendChild(fallback);
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-semibold text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-center mb-6">{member.description}</p>
                
                <div className="flex justify-center space-x-6">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <LinkedInIcon />
                  </a>
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className={`mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm uppercase tracking-wider">Clients Served</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-sm uppercase tracking-wider">Projects</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-sm uppercase tracking-wider">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPlayground;