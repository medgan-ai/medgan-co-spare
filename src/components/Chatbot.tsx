
import React, { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Home, HelpCircle, Search, ChevronRight } from "lucide-react";
import { Message, Language, languageSelectionMessage } from "@/types/chatbot";
import { generateAIResponse, initialBotMessages } from "@/utils/aiService";
import ChatHeader from "./chatbot/ChatHeader";
import MessageList from "./chatbot/MessageList";
import MessageInput from "./chatbot/MessageInput";
import LanguageSelector from "./chatbot/LanguageSelector";
import HelpSection from "./chatbot/HelpSection";

// Define suggested options
const suggestedOptions = [
  { id: 1, text: "Register as a talent" },
  { id: 2, text: "Apply for a job" },
  { id: 3, text: "Complete your profile" },
  { id: 4, text: "Notchup talent vetting" },
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language | null>(null);
  const [messages, setMessages] = useState<Message[]>([languageSelectionMessage]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("home");

  // Toggle the chat window open or closed
  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Handle language selection
  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    
    const initialMessage: Message = {
      id: Date.now(),
      content: initialBotMessages[selectedLanguage],
      sender: "bot",
      timestamp: new Date(),
    };
    
    setMessages([initialMessage]);
  };

  // Handle sending of user messages and receiving AI responses
  const handleSendMessage = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputValue.trim() || isLoading || !language) return;

      // Capture the current input before clearing it
      const currentInput = inputValue;
      const userMessage: Message = {
        id: Date.now(),
        content: currentInput,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");
      setIsLoading(true);

      try {
        const aiResponseText = await generateAIResponse(currentInput, language);
        const botResponse: Message = {
          id: Date.now(),
          content: aiResponseText,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      } catch (error) {
        console.error("Error in chat:", error);
        // Since we're handling errors in generateAIResponse, this should rarely happen
      } finally {
        setIsLoading(false);
      }
    },
    [inputValue, isLoading, language]
  );

  // Handle option selection
  const handleOptionSelect = (optionText: string) => {
    if (!language) {
      setLanguage("english");
      
      const initialMessage: Message = {
        id: Date.now(),
        content: initialBotMessages["english"],
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages([initialMessage]);
    }
    
    setInputValue(optionText);
    setActiveSection("messages");
    
    // Automatically submit after a short delay
    setTimeout(() => {
      const form = document.querySelector('form[data-chat-form="true"]') as HTMLFormElement;
      if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }, 300);
  };

  // Reset chat when closed
  useEffect(() => {
    if (!isOpen) {
      setLanguage(null);
      setMessages([languageSelectionMessage]);
      setActiveSection("home");
    }
  }, [isOpen]);

  // Handle search function
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Here you would implement the actual search functionality
    setSearchQuery("");
  };

  const renderDirectionClass = () => {
    if (!language) return "";
    return language === "arabic" ? "rtl" : "ltr";
  };

  // Render home content with search and suggested options
  const renderHomeContent = () => (
    <div className="flex flex-col px-4 py-6 space-y-6 h-full overflow-y-auto">
      <div className="space-y-2">
        <h2 className="text-2xl font-medium text-gray-700">Hi there 👋</h2>
        <h1 className="text-3xl font-bold text-gray-900">How can we help?</h1>
      </div>
      
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search for help"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-4 pr-10 py-3 rounded-xl bg-gray-100 border-none"
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
      
      <div className="space-y-1">
        {suggestedOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionSelect(option.text)}
            className="flex justify-between items-center w-full p-4 text-left border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <span>{option.text}</span>
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>
        ))}
      </div>
    </div>
  );

  // Render appropriate content based on active section
  const renderContent = () => {
    if (!language && activeSection === "messages") {
      return <LanguageSelector onLanguageSelect={handleLanguageSelect} message="Please select your preferred language:" />;
    }

    switch (activeSection) {
      case "home":
        return renderHomeContent();
      case "messages":
        return (
          <>
            <MessageList messages={messages} isLoading={isLoading} />
            <MessageInput 
              inputValue={inputValue}
              setInputValue={setInputValue}
              handleSendMessage={handleSendMessage}
              isLoading={isLoading}
              language={language || "english"}
              isOpen={isOpen}
              activeSection={activeSection}
            />
          </>
        );
      case "help":
        return <HelpSection />;
      default:
        return renderHomeContent();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className={`w-80 sm:w-96 h-[600px] bg-white dark:bg-gray-900 rounded-3xl shadow-xl flex flex-col overflow-hidden ${renderDirectionClass()}`}>
          <div className="flex-1 overflow-hidden flex flex-col">
            <ChatHeader 
              toggleChat={toggleChat} 
              language={language} 
              activeSection={activeSection} 
            />
            {renderContent()}
          </div>
          
          {/* Bottom Navigation */}
          <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-white">
            <button 
              onClick={() => setActiveSection("home")}
              className={`flex flex-col items-center space-y-1 ${activeSection === "home" ? "text-primary" : "text-gray-500"}`}
            >
              <Home className="h-6 w-6" />
              <span className="text-xs">FAQs</span>
            </button>
            
            <button 
              onClick={() => {
                setActiveSection("messages");
                if (!language) {
                  setMessages([languageSelectionMessage]);
                }
              }}
              className={`flex flex-col items-center space-y-1 ${activeSection === "messages" ? "text-primary" : "text-gray-500"}`}
            >
              <MessageSquare className="h-6 w-6" />
              <span className="text-xs">Chatbot</span>
            </button>
            
            <button 
              onClick={() => setActiveSection("help")}
              className={`flex flex-col items-center space-y-1 ${activeSection === "help" ? "text-primary" : "text-gray-500"}`}
            >
              <HelpCircle className="h-6 w-6" />
              <span className="text-xs">Help</span>
            </button>
          </div>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default Chatbot;
