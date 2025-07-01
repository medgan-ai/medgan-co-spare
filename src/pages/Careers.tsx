
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { observeScrollAnimation } from "@/utils/animation";
import { MapPin, Clock, Briefcase } from "lucide-react";

type JobPosition = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  description: string;
  requirements: string[];
  category: "engineering" | "research" | "business" | "design";
};

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "Senior Machine Learning Engineer",
    department: "Engineering",
    location: "Amman, Jordan (Hybrid)",
    type: "Full-time",
    description: "We are looking for a Senior Machine Learning Engineer to join our team and help us build the next generation of AI-powered solutions. You will work on designing, implementing, and deploying machine learning models that solve real-world problems.",
    requirements: [
      "7+ years of experience in machine learning or related field",
      "Proficiency in Python and ML frameworks (TensorFlow, PyTorch)",
      "Experience with deploying ML models in production",
      "Strong understanding of deep learning architectures",
      "PhD or MS in Computer Science, Machine Learning, or related field"
    ],
    category: "engineering"
  },
  {
    id: 2,
    title: "Data Scientist",
    department: "Research",
    location: "Remote",
    type: "Full-time",
    description: "Join our data science team to extract insights from complex datasets and develop models that power our AI solutions. You will work closely with our engineering team to implement and optimize algorithms.",
    requirements: [
      "3+ years of experience in data science or related field",
      "Strong background in statistics and mathematics",
      "Experience with data visualization tools",
      "Proficiency in Python and SQL",
      "MS or BS in Data Science, Statistics, or related field"
    ],
    category: "research"
  },
  {
    id: 3,
    title: "AI Product Manager",
    department: "Product",
    location: "Amman, Jordan",
    type: "Full-time",
    description: "We're seeking an experienced AI Product Manager to help us define and build products that leverage our AI capabilities. You will work closely with our engineering, design, and business teams to create products that delight our customers.",
    requirements: [
      "5+ years of experience in product management",
      "Experience with AI or ML products",
      "Strong communication and leadership skills",
      "Ability to translate business requirements into technical specifications",
      "BS or BA in Computer Science, Business, or related field"
    ],
    category: "business"
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Join our design team to create intuitive and engaging user experiences for our AI platforms. You will collaborate with product managers and engineers to design interfaces that make complex AI capabilities accessible to users.",
    requirements: [
      "3+ years of experience in UI/UX design",
      "Portfolio showcasing your design work",
      "Experience with design tools (Figma, Sketch)",
      "Understanding of user-centered design principles",
      "BS or BA in Design, HCI, or related field"
    ],
    category: "design"
  },
  {
    id: 5,
    title: "AI Research Scientist",
    department: "Research",
    location: "Amman, Jordan (Hybrid)",
    type: "Full-time",
    description: "We are looking for an AI Research Scientist to join our team and help us push the boundaries of artificial intelligence. You will conduct research in areas such as generative AI, natural language processing, and computer vision.",
    requirements: [
      "PhD in Computer Science, AI, or related field",
      "Publication record in top AI conferences (NeurIPS, ICML, CVPR, etc.)",
      "Experience with implementing research papers",
      "Strong mathematical background",
      "Excellent communication skills"
    ],
    category: "research"
  },
  {
    id: 6,
    title: "Business Development Manager",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    description: "Join our sales team to help us grow our business and bring our AI solutions to new markets. You will be responsible for identifying and pursuing new business opportunities, building relationships with potential clients, and closing deals.",
    requirements: [
      "5+ years of experience in sales or business development",
      "Experience selling enterprise software or AI solutions",
      "Strong networking and relationship-building skills",
      "Excellent communication and presentation skills",
      "BS or BA in Business, Marketing, or related field"
    ],
    category: "business"
  },
  {
    id: 7,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We are seeking a DevOps Engineer to help us build and maintain our infrastructure. You will be responsible for automating our deployment processes, monitoring our systems, and ensuring the reliability and scalability of our platforms.",
    requirements: [
      "3+ years of experience in DevOps or SRE roles",
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Knowledge of containerization and orchestration (Docker, Kubernetes)",
      "Proficiency in infrastructure as code (Terraform, CloudFormation)",
      "Experience with CI/CD pipelines"
    ],
    category: "engineering"
  },
  {
    id: 8,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Amman, Jordan",
    type: "Full-time",
    description: "Join our engineering team to build intuitive and responsive user interfaces for our AI platforms. You will work closely with our designers and backend engineers to create seamless user experiences.",
    requirements: [
      "3+ years of experience in frontend development",
      "Proficiency in React, TypeScript, and modern JavaScript",
      "Experience with responsive design and CSS frameworks",
      "Knowledge of state management libraries (Redux, Zustand)",
      "BS or BA in Computer Science or related field"
    ],
    category: "engineering"
  }
];

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredJobs, setFilteredJobs] = useState<JobPosition[]>(jobPositions);
  
  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);
  
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredJobs(jobPositions);
    } else {
      setFilteredJobs(jobPositions.filter(job => job.category === selectedCategory));
    }
  }, [selectedCategory]);
  
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
              <Button className="bg-medgan-blue hover:bg-medgan-dark-blue text-white px-8 py-6">
                View Open Positions
              </Button>
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
        
        {/* Open Positions Section */}
        <section className="py-20 px-6 md:px-8 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our current job opportunities and find the perfect fit for your skills and passion
              </p>
            </div>
            
            <Tabs defaultValue="all" className="mb-8 animate-on-scroll">
              <TabsList className="grid grid-cols-5 max-w-xl mx-auto">
                <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>All</TabsTrigger>
                <TabsTrigger value="engineering" onClick={() => setSelectedCategory("engineering")}>Engineering</TabsTrigger>
                <TabsTrigger value="research" onClick={() => setSelectedCategory("research")}>Research</TabsTrigger>
                <TabsTrigger value="business" onClick={() => setSelectedCategory("business")}>Business</TabsTrigger>
                <TabsTrigger value="design" onClick={() => setSelectedCategory("design")}>Design</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.department}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{job.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-medgan-blue hover:bg-medgan-dark-blue">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
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
              <div className="bg-white rounded-xl shadow-md p-6 animate-on-scroll">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We encourage creative thinking and taking calculated risks to push the boundaries of what's possible with AI.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 animate-on-scroll">
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We believe that the best solutions come from diverse teams working together toward a common goal.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 animate-on-scroll">
                <h3 className="text-xl font-semibold mb-3">Learning</h3>
                <p className="text-gray-600">
                  We're committed to continuous learning and professional development for every team member.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 md:px-8 bg-medgan-blue text-white">
          <div className="container max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-2/3 mb-10 lg:mb-0 animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See a Perfect Match?</h2>
                <p className="text-xl opacity-90 max-w-2xl">
                  We're always looking for talented individuals to join our team. Send us your resume, and we'll keep it on file for future opportunities.
                </p>
              </div>
              <div className="animate-on-scroll">
                <Button className="bg-white text-medgan-blue hover:bg-gray-100 px-8 py-6 text-lg">
                  Send Us Your Resume
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
