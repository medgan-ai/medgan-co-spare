
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { observeScrollAnimation } from "@/utils/animation";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Industry: Trends and Predictions",
    excerpt: "Explore the emerging trends in artificial intelligence and how they are shaping the future of various industries.",
    date: "May 15, 2023",
    readTime: "5 min read",
    author: "Dr. Sarah Johnson",
    category: "AI Trends",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWklMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww"
  },
  {
    id: 2,
    title: "How Generative AI is Revolutionizing Content Creation",
    excerpt: "Discover how generative AI is transforming the way businesses create and optimize content across various platforms.",
    date: "June 22, 2023",
    readTime: "7 min read",
    author: "Michael Chen",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1677442135136-760c813a7942?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFpJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    title: "The Ethics of AI: Navigating the Challenges and Opportunities",
    excerpt: "A deep dive into the ethical considerations of artificial intelligence and how businesses can navigate this complex landscape.",
    date: "July 8, 2023",
    readTime: "10 min read",
    author: "Dr. Alex Martinez",
    category: "AI Ethics",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    title: "Machine Learning in Healthcare: Improving Patient Outcomes",
    excerpt: "How machine learning technologies are being applied in healthcare to improve diagnostics, treatment plans, and patient outcomes.",
    date: "August 17, 2023",
    readTime: "8 min read",
    author: "Dr. Emily Wilson",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFpJTIwaW4lMjBoZWFsdGhjYXJlfGVufDB8fDB8fHww"
  },
  {
    id: 5,
    title: "The Role of AI in Sustainable Development and Climate Action",
    excerpt: "Exploring how artificial intelligence is contributing to environmental sustainability and climate change mitigation efforts.",
    date: "September 5, 2023",
    readTime: "6 min read",
    author: "James Turner",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1592185285969-070fdad2b5e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xpbWF0ZSUyMHRlY2h8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 6,
    title: "Natural Language Processing: Advancements and Applications",
    excerpt: "A look at the latest advancements in natural language processing and how businesses are leveraging them for competitive advantage.",
    date: "October 12, 2023",
    readTime: "9 min read",
    author: "Lisa Chang",
    category: "NLP",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyYWwlMjBsYW5ndWFnZSUyMHByb2Nlc3Npbmd8ZW58MHx8MHx8fDA%3D"
  }
];

const categories = [
  "All Categories",
  "AI Trends",
  "Generative AI",
  "AI Ethics",
  "Healthcare",
  "Sustainability",
  "NLP",
  "Machine Learning",
  "Computer Vision"
];

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
              <div className="flex justify-center gap-4">
                <Button className="bg-medgan-blue hover:bg-medgan-dark-blue text-white">
                  Latest Articles
                </Button>
                <Button variant="outline" className="border-medgan-blue text-medgan-blue hover:bg-medgan-light-blue">
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-16 px-6 md:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Main Content */}
              <div className="md:w-3/4">
                <div className="flex justify-between items-center mb-8 animate-on-scroll">
                  <h2 className="text-2xl font-bold">Latest Articles</h2>
                  <div className="hidden md:block">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">Sort by:</span>
                      <select className="bg-white border border-gray-300 rounded-md px-3 py-1 text-gray-600">
                        <option>Most Recent</option>
                        <option>Most Popular</option>
                        <option>A-Z</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-medgan-light-blue text-medgan-blue mb-3">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-semibold mb-2 hover:text-medgan-blue transition-colors">
                          <a href="#">{post.title}</a>
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <CalendarDays className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 flex justify-center animate-on-scroll">
                  <Button variant="outline" className="border-medgan-blue text-medgan-blue hover:bg-medgan-light-blue inline-flex items-center">
                    Load More Articles
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="md:w-1/4 animate-on-scroll">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a 
                          href="#" 
                          className={`block px-3 py-2 rounded-md transition-colors ${
                            index === 0 
                              ? 'bg-medgan-blue text-white' 
                              : 'hover:bg-medgan-light-blue text-gray-700'
                          }`}
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex items-start space-x-3">
                        <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium hover:text-medgan-blue transition-colors line-clamp-2">
                            <a href="#">{post.title}</a>
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-medgan-light-blue/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">Get the latest updates, news, and insights on AI delivered to your inbox.</p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medgan-blue"
                    />
                    <Button className="w-full bg-medgan-blue hover:bg-medgan-dark-blue text-white">
                      Subscribe
                    </Button>
                  </form>
                </div>
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
