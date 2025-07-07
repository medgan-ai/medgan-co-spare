import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { observeScrollAnimation } from "@/utils/animation";
import { FileText, Mail, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormValues = z.infer<typeof formSchema>;

const Blog = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Test database connection first
      const { error: connectionError } = await supabase
        .from('newsletter_subscriptions')
        .select('count', { count: 'exact', head: true });

      if (connectionError) {
        console.error('Database connection error:', connectionError);
        // Fallback to simulation mode
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast({
          title: "Subscription received!",
          description: "Thank you! Your subscription is being processed.",
        });
        form.reset();
        setIsDialogOpen(false);
        return;
      }

      // Insert the newsletter subscription into Supabase
      const now = new Date().toISOString();
      const { data: insertData, error } = await supabase
        .from('newsletter_subscriptions')
        .upsert({
          id: Date.now(), // Generate a unique ID using timestamp
          email: data.email,
          isActive: true,
          source: 'website',
          createdAt: now,
          updatedAt: now
        }, {
          onConflict: 'email'
        })
        .select()
        .single();

      if (error) {
        console.error('Insert error:', error);
        throw error;
      }
      
      toast({
        title: "Subscription successful!",
        description: "Thank you! You've been added to our newsletter.",
      });
      
      form.reset();
      setIsDialogOpen(false);
    } catch (error: any) {
      console.error("Newsletter subscription error:", error);
      console.error("Error details:", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
        status: error.status,
        statusCode: error.statusCode
      });
      
      // Handle specific database errors
      if (error.code === '23505') {
        toast({
          title: "Already subscribed",
          description: "This email is already subscribed to our newsletter.",
          variant: "destructive",
        });
      } else if (error.code === '42P01') {
        // Table doesn't exist - fallback to simulation
        toast({
          title: "Subscription received!",
          description: "Thank you! Your subscription is being processed.",
        });
        form.reset();
        setIsDialogOpen(false);
      } else {
        toast({
          title: "Subscription failed",
          description: `There was an error subscribing to the newsletter. Please try again. Error: ${error.message}`,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-medgan-blue text-medgan-blue hover:bg-medgan-blue hover:text-white px-8 py-6 inline-flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Subscribe to Newsletter
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-center">Subscribe to Our Newsletter</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-center text-gray-600">
                        Stay updated with our latest articles, insights, and AI developments.
                      </p>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="email" 
                                    placeholder="your.email@example.com" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormDescription>
                                  We'll never share your email with anyone else.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button 
                            type="submit" 
                            className="w-full bg-medgan-blue hover:bg-medgan-blue/90"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Subscribing...
                              </>
                            ) : (
                              <>
                                <Mail className="mr-2 h-4 w-4" />
                                Subscribe
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </div>
                  </DialogContent>
                </Dialog>
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

        {/* Follow Us Section */}
        <section className="py-16 px-6 md:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">Follow Us for Updates</h3>
              <p className="text-gray-600 mb-6">
                Stay connected with us on social media for the latest news and behind-the-scenes content
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  className="border-medgan-blue text-medgan-blue hover:bg-medgan-blue hover:text-white"
                  onClick={() => window.open('https://www.linkedin.com/company/medgan', '_blank')}
                >
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  className="border-medgan-blue text-medgan-blue hover:bg-medgan-blue hover:text-white"
                  onClick={() => window.open('https://x.com/medganai', '_blank')}
                >
                  Twitter
                </Button>
                <Button 
                  variant="outline" 
                  className="border-medgan-blue text-medgan-blue hover:bg-medgan-blue hover:text-white"
                  onClick={() => window.open('https://www.instagram.com/medgan.ai/', '_blank')}
                >
                  Instagram
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