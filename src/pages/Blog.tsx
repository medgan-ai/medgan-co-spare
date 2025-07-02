import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { observeScrollAnimation } from "@/utils/animation";
import { FileText, Bell, Mail } from "lucide-react";

const Blog = () => {
  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-8 bg-gradient-to-b from-medgan-light-blue/30 to-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Blog
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Insights, perspectives, and updates on artificial intelligence, industry trends, and technological innovations
              </p>
            </div>
          </div>
        </section>

        {/* No Articles Section */}
        <section className="py-20 px-6 md:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <div className="flex justify-center mb-6">
                <div className="bg-medgan-light-blue/20 p-4 rounded-full">
                  <FileText className="w-12 h-12 text-medgan-blue" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">No Articles Available</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're currently working on creating valuable content for our blog. Our team is preparing insightful articles about AI, technology trends, and industry insights. Check back soon for our latest posts!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-medgan-blue hover:bg-medgan-dark-blue text-white px-8 py-6 inline-flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Get Notified of New Posts
                </Button>
                <Button variant="outline" className="border-medgan-blue text-medgan-blue hover:bg-medgan-blue hover:text-white px-8 py-6 inline-flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 px-6 md:px-8 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                When we launch our blog, you can expect high-quality content covering these topics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Industry Trends",
                  description: "Stay updated with the latest developments and trends in artificial intelligence across various industries.",
                  icon: "🚀"
                },
                {
                  title: "Technical Insights",
                  description: "Deep dives into AI technologies, methodologies, and best practices from our expert team.",
                  icon: "⚙️"
                },
                {
                  title: "Case Studies",
                  description: "Real-world examples of how AI solutions are transforming businesses and solving complex problems.",
                  icon: "📊"
                },
                {
                  title: "Research Updates",
                  description: "Latest findings from AI research and how they're being applied in practical applications.",
                  icon: "🔬"
                },
                {
                  title: "Industry Applications",
                  description: "Explore how different industries are leveraging AI for innovation and competitive advantage.",
                  icon: "🏭"
                },
                {
                  title: "Future Perspectives",
                  description: "Thought leadership on the future of AI and its impact on society and business.",
                  icon: "🔮"
                }
              ].map((topic, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 animate-on-scroll text-center"
                >
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
                  <p className="text-gray-600">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-20 px-6 md:px-8 bg-medgan-blue text-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay in the Loop</h2>
              <p className="text-xl opacity-90 mb-8">
                Be the first to know when we publish new articles. Join our newsletter to receive updates on AI insights, industry trends, and company news.
              </p>
              <div className="max-w-md mx-auto">
                <form className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <Button className="bg-white text-medgan-blue hover:bg-gray-100 px-8 py-3 whitespace-nowrap">
                    Subscribe Now
                  </Button>
                </form>
                <p className="text-sm opacity-75 mt-3">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Follow Us Section */}
        <section className="py-16 px-6 md:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">Follow Us for Updates</h3>
              <p className="text-gray-600 mb-6">
                Stay connected with us on social media for the latest news and behind-the-scenes content
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" className="border-medgan-blue text-medgan-blue hover:bg-medgan-blue hover:text-white">
                  LinkedIn
                </Button>
                <Button variant="outline" className="border-medgan-blue text-medgan-blue hover:bg-medgan-blue hover:text-white">
                  Twitter
                </Button>
                <Button variant="outline" className="border-medgan-blue text-medgan-blue hover:bg-medgan-blue hover:text-white">
                  Medium
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

export default Blog;