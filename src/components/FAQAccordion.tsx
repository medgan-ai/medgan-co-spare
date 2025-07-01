
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

const faqData = [
  {
    question: "What is MedGAN?",
    answer: "MedGAN is an innovative AI startup dedicated to developing cutting-edge AI models and intelligent agents that revolutionize how industries operate and solve complex problems across all sectors, from healthcare to finance and beyond."
  },
  {
    question: "How does MedGAN's technology work?",
    answer: "Our technology leverages advanced generative AI models to transform complex data into actionable insights. We create sophisticated AI models trained on comprehensive datasets specifically tailored for diverse applications across industries."
  },
  {
    question: "What industries can benefit from MedGAN's solutions?",
    answer: "MedGAN's AI solutions are designed to benefit virtually any industry, including healthcare, finance, manufacturing, retail, logistics, education, and more. Our cross-industry approach enables us to apply AI technologies to solve complex challenges in various sectors."
  },
  {
    question: "Is MedGAN's AI technology secure?",
    answer: "Absolutely. Security is a cornerstone of our development process. We develop autonomous AI agents with robust security measures and ethical considerations built in from the ground up, ensuring data protection and compliance with industry regulations."
  },
  {
    question: "How can I schedule a demo with MedGAN?",
    answer: "You can schedule a demo by visiting our contact section and filling out the form. Our team will reach out to you promptly to arrange a personalized demonstration of our AI solutions tailored to your specific industry needs."
  }
];

const FAQAccordion = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="faq" className="section-padding bg-white relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-medgan-light-blue/40 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-medgan-light-blue/30 animate-pulse-slow blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-medgan-light-blue text-sm font-medium text-medgan-blue">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions? We Have Answers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about MedGAN's AI technology and how it can benefit your organization.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-morphism mb-4 rounded-xl overflow-hidden">
                <AccordionTrigger className={`px-6 py-4 text-left ${isMobile ? 'text-sm' : 'text-base'} font-semibold hover:no-underline`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className={`text-gray-600 ${isMobile ? 'text-sm' : 'text-base'}`}>
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
