
import React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language } from "@/types/chatbot";

interface MessageInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  language: Language;
  isOpen: boolean;
  activeSection: string;
}

const MessageInput: React.FC<MessageInputProps> = ({
  inputValue,
  setInputValue,
  handleSendMessage,
  isLoading,
  language,
  isOpen,
  activeSection,
}) => {
  // Don't render input if we're not in the messages section
  if (activeSection !== "messages") {
    return null;
  }
  
  const placeholder = language === "arabic" 
    ? "اكتب رسالتك هنا..." 
    : "Type your message here...";
  
  const direction = language === "arabic" ? "rtl" : "ltr";

  return (
    <form 
      onSubmit={handleSendMessage} 
      className="p-3 border-t border-gray-100 bg-white"
      dir={direction}
      data-chat-form="true"
    >
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1 p-3 border rounded-full dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50"
          disabled={isLoading || !isOpen}
        />
        <Button 
          type="submit" 
          size="icon"
          className="rounded-full h-10 w-10 bg-primary"
          disabled={!inputValue.trim() || isLoading || !isOpen}
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default MessageInput;
