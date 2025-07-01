
import React from "react";
import { Button } from "@/components/ui/button";
import { Language } from "@/types/chatbot";

interface LanguageSelectorProps {
  onLanguageSelect: (language: Language) => void;
  message: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onLanguageSelect,
  message,
}) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center p-4 space-y-6">
      <p className="text-center text-gray-700 dark:text-gray-300">{message}</p>
      <div className="flex gap-4">
        <Button
          variant="outline"
          className="px-6 py-2 border-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onLanguageSelect("english")}
        >
          English
        </Button>
        <Button
          variant="outline"
          className="px-6 py-2 border-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onLanguageSelect("arabic")}
        >
          العربية
        </Button>
      </div>
    </div>
  );
};

export default LanguageSelector;
