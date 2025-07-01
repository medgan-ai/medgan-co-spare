
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useToast } from "@/hooks/use-toast";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  // Initialize dark mode based on user's preference or system preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      toast({
        title: "Light mode activated",
        description: "Your eyes will thank you during the day!",
        duration: 2000,
      });
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      toast({
        title: "Dark mode activated",
        description: "Easier on the eyes at night!",
        duration: 2000,
      });
    }
    
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Toggle
      pressed={isDarkMode}
      onPressedChange={toggleDarkMode}
      aria-label="Toggle dark mode"
      className="rounded-full p-3 transition-colors hover:bg-accent shadow-md"
    >
      {isDarkMode ? 
        <Sun className="h-5 w-5 text-yellow-400 transition-transform hover:rotate-45 animate-pulse-slow" /> : 
        <Moon className="h-5 w-5 transition-transform hover:-rotate-12" />
      }
    </Toggle>
  );
};

export default DarkModeToggle;
