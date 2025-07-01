
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const AIPlayground: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState("text-generation");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setResult("");

    try {
      // Simulating API call - in a real app, this would call your Supabase edge function
      setTimeout(() => {
        let demoResult = "";
        
        if (selectedModel === "text-generation") {
          demoResult = `Generated text based on: "${prompt}"\n\nMedGAN's advanced AI models can help medical professionals analyze complex data efficiently. This demo shows how our technology can generate relevant medical content from simple prompts.`;
        } else if (selectedModel === "image-generation") {
          demoResult = "Image generation feature would display a generated medical image here based on your prompt. Contact us to learn more about our full capabilities.";
        } else if (selectedModel === "data-analysis") {
          demoResult = `Analysis of medical data related to: "${prompt}"\n\nOur AI can detect patterns in medical datasets, highlight anomalies, and provide insights that may not be immediately apparent to human analysts.`;
        }
        
        setResult(demoResult);
        setLoading(false);
        
        toast({
          title: "Success",
          description: "AI model processed your prompt",
        });
      }, 2000);
    } catch (error) {
      console.error("Error in AI demo:", error);
      toast({
        title: "Error",
        description: "Failed to process your request",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <section id="ai-playground" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience MedGAN AI</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Try a simplified version of our AI models to see how MedGAN technology works.
            This demo provides a glimpse of our capabilities.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>AI Model Playground</CardTitle>
            <CardDescription>
              Select a model and enter a prompt to see MedGAN's AI in action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="text-generation" onValueChange={setSelectedModel}>
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="text-generation">Text Generation</TabsTrigger>
                <TabsTrigger value="image-generation">Image Generation</TabsTrigger>
                <TabsTrigger value="data-analysis">Data Analysis</TabsTrigger>
              </TabsList>
              
              <TabsContent value="text-generation">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Textarea
                      placeholder="Enter your prompt here..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={loading || !prompt.trim()}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Run Model"
                    )}
                  </Button>
                </form>

                {result && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-md border">
                    <h3 className="font-medium mb-2">Result:</h3>
                    <div className="whitespace-pre-wrap">{result}</div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="image-generation">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Textarea
                      placeholder="Enter your prompt here..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={loading || !prompt.trim()}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Generate Image"
                    )}
                  </Button>
                </form>

                {result && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-md border">
                    <h3 className="font-medium mb-2">Result:</h3>
                    <div className="whitespace-pre-wrap">{result}</div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="data-analysis">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Textarea
                      placeholder="Enter your data query here..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={loading || !prompt.trim()}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      "Analyze Data"
                    )}
                  </Button>
                </form>

                {result && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-md border">
                    <h3 className="font-medium mb-2">Result:</h3>
                    <div className="whitespace-pre-wrap">{result}</div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <p className="text-sm text-gray-500">
              This is a simplified demo. Contact us for full access to our technology.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default AIPlayground;
