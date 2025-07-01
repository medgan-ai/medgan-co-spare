import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Testimonial = Tables<'testimonials'>;

// Fallback testimonials in case database is empty
const fallbackTestimonials = [
  {
    id: 1,
    quote: "MedGAN's AI solutions have completely transformed our healthcare data analysis, helping us identify patterns we never would have seen otherwise.",
    authorName: "Dr. Sarah Johnson",
    authorPosition: "Chief Medical Officer",
    company: "HealthTech Inc.",
    authorImage: "/placeholder.svg",
    isActive: true,
    order: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    quote: "The implementation of MedGAN's AI models has increased our operational efficiency by 35% and reduced costs by 28% in just three months.",
    authorName: "Michael Chen",
    authorPosition: "COO",
    company: "Global Finance Group",
    authorImage: "/placeholder.svg",
    isActive: true,
    order: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    quote: "Working with MedGAN has given us a competitive edge in our industry. Their AI solutions are truly cutting-edge and their team is exceptional.",
    authorName: "Rebecca Williams",
    authorPosition: "Director of Innovation",
    company: "TechForward",
    authorImage: "/placeholder.svg",
    isActive: true,
    order: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 4,
    quote: "The customized AI agents developed by MedGAN have revolutionized our customer service operations, handling 78% of inquiries with remarkable accuracy.",
    authorName: "James Rodriguez",
    authorPosition: "VP of Customer Experience",
    company: "RetailMax",
    authorImage: "/placeholder.svg",
    isActive: true,
    order: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 5,
    quote: "MedGAN's understanding of both AI technology and business needs is unparalleled. They delivered exactly what we needed and more.",
    authorName: "Priya Patel",
    authorPosition: "CTO",
    company: "Innovation Labs",
    authorImage: "/placeholder.svg",
    isActive: true,
    order: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('isActive', true)
          .order('order', { ascending: true });

        if (error) {
          console.error('Error fetching testimonials:', error);
          // Use fallback testimonials if database query fails
          setTestimonials(fallbackTestimonials);
        } else if (data && data.length > 0) {
          setTestimonials(data);
        } else {
          // Use fallback testimonials if no data in database
          setTestimonials(fallbackTestimonials);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setTestimonials(fallbackTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="section-padding bg-gradient-to-br from-medgan-cream to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loading testimonials...</h2>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section id="testimonials" className="section-padding bg-gray-50 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-medgan-light-blue/20 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-medgan-light-blue/20 animate-pulse-slow blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-medgan-light-blue text-sm font-medium text-medgan-blue">
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our AI solutions are making a real impact across industries.
          </p>
        </div>
        
        <div className="animate-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className={`${isMobile ? 'basis-full' : 'basis-1/2 md:basis-1/3'} pl-6`}>
                  <Card className="glass-morphism hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <Quote className="text-medgan-blue w-10 h-10 mb-4 opacity-30" />
                      <p className={`italic mb-6 text-gray-700 ${isMobile ? 'text-sm' : 'text-base'}`}>
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                          <img 
                            src={testimonial.authorImage} 
                            alt={testimonial.authorName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className={`font-semibold text-gray-900 ${isMobile ? 'text-sm' : 'text-base'}`}>
                            {testimonial.authorName}
                          </h4>                          <p className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                            {testimonial.authorPosition}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="ml-10" />
              <CarouselNext className="mr-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
