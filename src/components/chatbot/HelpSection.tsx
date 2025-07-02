
import React, { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HelpCollection {
  title: string;
  description: string;
  articleCount: number;
}

const HelpSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const helpCollections: HelpCollection[] = [
    {
      title: "For Employers",
      description: "All the help for you to build a great remote team with MedGAN",
      articleCount: 19
    },
    {
      title: "For Talents",
      description: "All the help for you to get profile activated and search for jobs on MedGAN",
      articleCount: 41
    },
    {
      title: "For Agencies",
      description: "All the help for agencies to partner with MedGAN and find opportunities",
      articleCount: 23
    }
  ];
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the actual search functionality
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col px-4 py-6 space-y-6 h-full overflow-y-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-6">Help</h1>
      </div>
      
      <form onSubmit={handleSearch} className="relative">
        <Input
          type="text"
          placeholder="Search for help"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-4 pr-10 py-3 rounded-xl bg-gray-100 border-none"
        />
        <Button 
          type="submit" 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <Search className="h-5 w-5 text-primary" />
        </Button>
      </form>
      
      <div>
        <h2 className="text-lg font-medium mb-4">{helpCollections.length} collections</h2>
        
        <div className="space-y-4">
          {helpCollections.map((collection, index) => (
            <button
              key={index}
              className="flex justify-between items-start w-full p-4 text-left border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="space-y-1">
                <h3 className="font-semibold">{collection.title}</h3>
                <p className="text-sm text-gray-600">{collection.description}</p>
                <p className="text-xs text-gray-500">{collection.articleCount} articles</p>
              </div>
              <ChevronRight className="h-5 w-5 text-primary mt-1" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
