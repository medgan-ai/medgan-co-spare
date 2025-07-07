// src/pages/Contact.tsx
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { observeScrollAnimation } from "@/utils/animation";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, X, Globe } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  service: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  privacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const { toast } = useToast();

  // Add scroll animation effect like FAQ page
  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      service: "",
      budget: "",
      timeline: "",
      privacy: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Test database connection
      const { error: connectionError } = await supabase
        .from('contact_submissions')
        .select('count', { count: 'exact', head: true });

      if (connectionError) throw connectionError;

      const now = new Date().toISOString();
      const insertData = {
        id: `contact_${Date.now()}`,
        name: data.name,
        email: data.email,
        company: data.company || '',
        phone: data.phone || '',
        message: data.message,
        service: data.service || '',
        budget: data.budget || '',
        timeline: data.timeline || '',
        createdAt: now,
        updatedAt: now,
      };
      
      const { error } = await supabase
        .from("contact_submissions")
        .insert([insertData]);

      if (error) throw error;

      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: `There was a problem sending your message. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallNow = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section - matching FAQ page structure */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-8 bg-gradient-to-b from-medgan-light-blue/30 to-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Have questions or want to learn more about our AI solutions? Reach out to our team for personalized assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="py-16 px-6 md:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8 h-fit animate-on-scroll">
                <h2 className="text-2xl font-bold text-medgan-dark-blue mb-6">
                  Our Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-medgan-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Location</h3>
                      <p className="text-gray-600">Amman Jordan Al Yasmin</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-medgan-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="text-gray-600">+962785120140</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-medgan-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <a 
                        href="mailto:contact@medgan.co" 
                        className="text-gray-600 hover:text-medgan-blue transition-colors"
                      >
                        contact@medgan.co
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-medgan-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, url: "https://linkedin.com/company/medgan" },
                      { icon: Instagram, url: "https://instagram.com/medgan.ai" },
                      { icon: X, url: "https://x.com/medganai" },
                      { icon: Globe, url: "http://www.medgan.co" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-medgan-blue/10 flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-colors"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 animate-on-scroll">
                <h2 className="text-2xl font-bold text-medgan-dark-blue mb-6">
                  Send Us a Message
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              rows={5}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Interested In</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., AI Solutions" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget</FormLabel>
                            <FormControl>
                              <Input placeholder="Your budget range" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Timeline</FormLabel>
                          <FormControl>
                            <Input placeholder="Project timeline" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="privacy"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                          <FormControl>
                            <input
                              type="checkbox"
                              className="mt-1 h-4 w-4 text-medgan-blue focus:ring-medgan-blue border-gray-300 rounded"
                              checked={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the{' '}
                              <a href="/privacy-policy" className="text-medgan-blue hover:underline">
                                Privacy Policy
                              </a>
                            </FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full py-6 bg-medgan-blue hover:bg-medgan-dark-blue"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>

        {/* Additional CTA Section - similar to FAQ's "Still Have Questions" */}
        <section className="py-16 px-6 md:px-8 bg-gray-50">
          <div className="container max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is ready to help you transform your business with AI. Call us directly to discuss your project needs.
            </p>
            
            {/* Phone Number Display */}
            {showPhoneNumber && (
              <div className="mb-6 p-4 bg-white rounded-lg shadow-lg border border-medgan-blue/20 animate-fade-in">
                <h3 className="text-lg font-semibold text-medgan-blue mb-2">Call us now:</h3>
                <a 
                  href="tel:+962785120140" 
                  className="text-2xl font-bold text-medgan-dark-blue hover:text-medgan-blue transition-colors"
                >
                  +962 785 120 140
                </a>
                <p className="text-sm text-gray-600 mt-2">Click to call directly</p>
              </div>
            )}
            
            <div className="flex justify-center">
              <Button 
                onClick={handleCallNow}
                className="bg-medgan-blue hover:bg-medgan-dark-blue text-white px-6 py-5"
              >
                Call Now
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

export default ContactPage;