
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language } from "@/types/chatbot";

interface ChatHeaderProps {
  toggleChat: () => void;
  language: Language | null;
  activeSection: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ toggleChat, language, activeSection }) => {
  let title = "Chat with us";
  
  if (activeSection === "help") {
    title = "Help";
  } else if (activeSection === "home") {
    title = "How can we help?";
  } else if (language === "arabic") {
    title = "مساعد MedGAN";
  }
  
  const direction = language === "arabic" ? "rtl" : "ltr";

  return (
    <div 
      className={`bg-white text-gray-900 p-4 border-b border-gray-100 flex items-center ${direction === "rtl" ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className="flex-1">
        <h3 className="font-medium text-lg">{title}</h3>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full hover:bg-gray-100"
        onClick={toggleChat}
        aria-label="Close chat"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ChatHeader;
