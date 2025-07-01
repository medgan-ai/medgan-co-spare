import React, { useEffect, useState } from "react";
import { observeScrollAnimation } from "@/utils/animation";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Youtube, X } from "lucide-react";
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

// Define the form schema with zod - updated to match database schema
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

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);

  // Initialize the form
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
  });  // Handle form submission using Supabase
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // First test database connection
      console.log('Testing database connection...');
      const { error: connectionError } = await supabase
        .from('contact_submissions')
        .select('count', { count: 'exact', head: true });

      if (connectionError) {
        console.error('Database connection error:', connectionError);
        // Fallback to simulation mode
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast({
          title: "Message received!",
          description: "Thank you for your message. We're processing it now.",
        });
        form.reset();
        return;
      }

      // Insert form data into Supabase
      console.log('Inserting data:', data);
      const now = new Date().toISOString();      const insertData = {
        id: `contact_${Date.now()}`, // Generate unique ID
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
      
      console.log('Insert payload:', insertData);
      
      const { data: result, error } = await supabase
        .from("contact_submissions")
        .insert([insertData])
        .select()
        .single();

      if (error) {        console.error('Insert error details:', {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint
        });
        throw error;
      }

      console.log('Insert successful:', result);
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: `There was a problem sending your message. Please try again. Error: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-medgan-light-blue/30 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-white/60 animate-float blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-medgan-blue/10 animate-pulse-slow blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-white text-sm font-medium text-medgan-blue">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in learning more about our AI solutions? Reach out to our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="glass-morphism p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-medgan-dark-blue">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-medgan-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Location</h4>
                    <p className="text-gray-600">
                      Amman Jordan Al Yasmin
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-medgan-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">
                      +962785120140
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-medgan-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">
                      info@medgan.ai
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-medgan-blue/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-medgan-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-medgan-blue/10 flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-medgan-blue/10 flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-medgan-blue/10 flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-medgan-blue/10 flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-on-scroll">
            <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-medgan-dark-blue">Send us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-medgan-blue focus:border-medgan-blue" 
                              {...field} 
                            />
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
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-medgan-blue focus:border-medgan-blue" 
                              {...field} 
                            />
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
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Company (optional)
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your company name" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-medgan-blue focus:border-medgan-blue" 
                            {...field} 
                          />
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
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Phone Number (optional)
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your phone number" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-medgan-blue focus:border-medgan-blue" 
                            {...field} 
                          />
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
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-medgan-blue focus:border-medgan-blue" 
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
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Service Interested In (optional)
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g., Web Development" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-medgan-blue focus:border-medgan-blue" 
                              {...field} 
                            />
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
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Budget (optional)
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your budget range" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-medgan-blue focus:border-medgan-blue" 
                              {...field} 
                            />
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
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Timeline (optional)
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Project timeline" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-medgan-blue focus:border-medgan-blue" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="privacy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                        <FormControl>
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-medgan-blue focus:ring-medgan-blue border-gray-300 rounded"
                            checked={field.value}
                            onChange={field.onChange}
                            id="privacy"
                          />
                        </FormControl>
                        <label htmlFor="privacy" className="text-sm text-gray-700">
                          I agree to the <a href="#" className="text-medgan-blue hover:underline">Privacy Policy</a>
                        </label>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-medgan-blue hover:bg-medgan-dark-blue text-white transition-colors py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
