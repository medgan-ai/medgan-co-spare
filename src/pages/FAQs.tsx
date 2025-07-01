
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { observeScrollAnimation } from "@/utils/animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQs = () => {
  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);
  
  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What does MedGAN do?",
          answer: "MedGAN develops advanced AI solutions that leverage generative models to solve complex problems across various industries. Our technologies help businesses extract insights from data, automate processes, and make better decisions."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, energy, agriculture, transportation, and government. Our AI solutions are customized to address specific challenges in each industry."
        },
        {
          question: "How can I get started with your services?",
          answer: "Getting started is easy. Simply contact us through our website or call our office to schedule a consultation. Our team will assess your needs, recommend appropriate solutions, and guide you through the implementation process."
        },
        {
          question: "Where is MedGAN located?",
          answer: "Our main office is located in Amman, Jordan, Al Yasmin. We also have remote team members working across different locations to serve our global clients better."
        }
      ]
    },
    {
      category: "Technology",
      questions: [
        {
          question: "What AI technologies do you use?",
          answer: "We employ a variety of cutting-edge AI technologies including machine learning, deep learning, natural language processing, computer vision, and generative models. Our solutions are built using the latest advancements in AI research and development."
        },
        {
          question: "How secure are your AI solutions?",
          answer: "Security is a top priority for us. We implement robust security measures including data encryption, secure access controls, regular security audits, and compliance with industry standards to ensure that your data and AI systems are protected."
        },
        {
          question: "Can your solutions integrate with our existing systems?",
          answer: "Yes, our AI solutions are designed to seamlessly integrate with your existing systems and workflows. We provide APIs and custom integration options to ensure a smooth implementation process."
        },
        {
          question: "Do you offer cloud-based or on-premises solutions?",
          answer: "We offer both cloud-based and on-premises solutions depending on your needs and preferences. Our team will work with you to determine the best deployment option for your specific requirements."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          question: "What types of AI solutions do you offer?",
          answer: "We offer a comprehensive range of AI solutions including data analysis, predictive analytics, natural language processing, computer vision, recommendation systems, automation tools, and custom AI applications tailored to your specific needs."
        },
        {
          question: "Do you provide training for using your AI solutions?",
          answer: "Yes, we provide comprehensive training programs to ensure that your team can effectively use and manage our AI solutions. We also offer ongoing support and educational resources to help you get the most out of your AI systems."
        },
        {
          question: "How long does it take to implement your solutions?",
          answer: "The implementation timeline varies depending on the complexity of the solution and your specific requirements. Simple implementations can be completed in a few weeks, while more complex projects may take several months. We'll provide you with a detailed timeline during the consultation phase."
        },
        {
          question: "Do you offer ongoing support after implementation?",
          answer: "Yes, we provide ongoing support and maintenance services to ensure that your AI solutions continue to perform optimally. We offer different support packages to suit your needs, including regular updates, performance monitoring, and technical assistance."
        }
      ]
    },
    {
      category: "Pricing",
      questions: [
        {
          question: "How is pricing structured for your services?",
          answer: "Our pricing is structured based on the complexity of the solution, the scale of implementation, and the level of customization required. We offer subscription-based models for our standard solutions and custom pricing for bespoke developments."
        },
        {
          question: "Do you offer pricing packages for startups or small businesses?",
          answer: "Yes, we have special pricing packages designed for startups and small businesses to make our AI solutions more accessible. We believe in supporting innovation at all levels and can work within various budget constraints."
        },
        {
          question: "Is there a free trial option available?",
          answer: "For certain standard solutions, we offer limited free trials or demos to help you evaluate the fit for your business. Please contact our sales team to learn more about trial options for specific solutions."
        },
        {
          question: "What is the return on investment for your AI solutions?",
          answer: "The ROI varies depending on the specific solution and your business context. However, our clients typically see significant improvements in efficiency, accuracy, cost reduction, and revenue generation. We can provide case studies and ROI analyses during the consultation process."
        }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-8 bg-gradient-to-b from-medgan-light-blue/30 to-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Find answers to common questions about our AI solutions, services, and technologies.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 md:px-8">
          <div className="container max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <div key={index} className="mb-12 animate-on-scroll">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
                  {category.category} Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${category.category}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
        
        {/* Still Have Questions Section */}
        <section className="py-16 px-6 md:px-8 bg-gray-50">
          <div className="container max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to help. Contact us for personalized assistance with any questions or inquiries you may have.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-medgan-blue hover:bg-medgan-dark-blue text-white px-6 py-5">
                Contact Support
              </Button>
              <Button variant="outline" className="border-medgan-blue text-medgan-blue hover:bg-medgan-light-blue px-6 py-5">
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default FAQs;
