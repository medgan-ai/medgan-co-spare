
export type Language = "english" | "arabic";

export type Message = {
  id: number;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

export const languageSelectionMessage = {
  id: 0,
  content: "Please select your preferred language:",
  sender: "bot" as const,
  timestamp: new Date(),
};
