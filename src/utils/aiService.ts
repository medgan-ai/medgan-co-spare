
import { GoogleGenerativeAI } from "@google/generative-ai";

// It's recommended to store API keys in environment variables.
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY || "AIzaSyAIgHMrwy6gtR243nE2C0KWy8NWuOLCFe8";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export type Language = "english" | "arabic";

export const fallbackResponses: Record<string, Record<Language, string>> = {
  default: {
    english: "I'm sorry, I couldn't process your request at the moment. Please try again later or contact our support team directly.",
    arabic: "آسف، لم أتمكن من معالجة طلبك في الوقت الحالي. يرجى المحاولة مرة أخرى لاحقًا أو الاتصال بفريق الدعم لدينا مباشرة.",
  },
};

export const initialBotMessages: Record<Language, string> = {
  english: "Hello! I'm MedGAN's AI assistant. How can I help you today?",
  arabic: "مرحبًا! أنا مساعد MedGAN الذكي. كيف يمكنني مساعدتك اليوم؟",
};

// Helper function to remove markdown formatting
const removeMarkdownFormatting = (text: string): string => {
  // Remove asterisks for bold and italic formatting
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold (**text**)
    .replace(/\*(.*?)\*/g, '$1')     // Remove italic (*text*)
    .replace(/__(.*?)__/g, '$1')     // Remove underscore bold (__text__)
    .replace(/_(.*?)_/g, '$1')       // Remove underscore italic (_text_)
    .replace(/```(.*?)```/gs, '$1')  // Remove code blocks
    .replace(/`(.*?)`/g, '$1');      // Remove inline code
};

export const generateAIResponse = async (userQuery: string, language: Language): Promise<string> => {
  const contextPrompt = language === "english" 
    ? `
As an AI assistant for MedGAN, a pioneering company specializing in AI-driven solutions, I help transform complex data into actionable insights using advanced generative AI models. MedGAN empowers organizations across industries by leveraging state-of-the-art artificial intelligence to drive innovation and efficiency.

At MedGAN, our team of AI engineers and machine learning specialists collaborates to develop cutting-edge solutions that address complex challenges across various sectors. We believe AI-powered innovations can revolutionize business operations, enhance decision-making, and unlock new opportunities.

By combining advanced AI technology with deep domain expertise, we are shaping a future where intelligent systems augment human capabilities and accelerate progress across industries.

Pioneering AI Solutions Across All Fields  
MedGAN is an innovative AI startup dedicated to building transformative AI models and intelligent agents that redefine how industries operate and solve real-world problems.

Contact Information:  
📍 Location: Amman, Jordan – Al Yasmin  
📞 Phone: +962 785 120 140  
✉️ Email: info@medgan.ai  

Hours of Operation:  
- Monday - Friday: 9 AM - 6 PM  
- Saturday - Sunday: Closed  

Important Note: Please provide a clean, readable response without using any markdown formatting like asterisks, underscores, or code blocks.

Now, please respond to the following user query in English:  
"${userQuery}"
`
    : `
بصفتي مساعدًا ذكيًا لشركة MedGAN، وهي شركة رائدة متخصصة في الحلول المدعومة بالذكاء الاصطناعي، أساعد في تحويل البيانات المعقدة إلى رؤى قابلة للتنفيذ باستخدام نماذج الذكاء الاصطناعي التوليدية المتقدمة. تمكّن MedGAN المؤسسات عبر الصناعات المختلفة من خلال الاستفادة من الذكاء الاصطناعي المتطور لدفع الابتكار والكفاءة.

في MedGAN، يتعاون فريقنا من مهندسي الذكاء الاصطناعي والمتخصصين في التعلم الآلي لتطوير حلول متطورة تعالج التحديات المعقدة عبر مختلف القطاعات. نحن نؤمن أن الابتكارات المدعومة بالذكاء الاصطناعي يمكن أن تحدث ثورة في العمليات التجارية وتعزز عملية صنع القرار وتفتح فرصًا جديدة.

من خلال الجمع بين تكنولوجيا الذكاء الاصطناعي المتقدمة والخبرة العميقة في المجال، نحن نشكل مستقبلًا حيث تعزز الأنظمة الذكية القدرات البشرية وتسرع التقدم عبر الصناعات.

حلول الذكاء الاصطناعي الرائدة في جميع المجالات
MedGAN هي شركة ناشئة مبتكرة في مجال الذكاء الاصطناعي مكرسة لبناء نماذج ووكلاء ذكاء اصطناعي تحويلية تعيد تعريف كيفية عمل الصناعات وحل المشكلات الواقعية.

معلومات الاتصال:
📍 الموقع: عمان، الأردن - الياسمين
📞 الهاتف: +962 785 120 140
✉️ البريد الإلكتروني: info@medgan.ai

ساعات العمل:
- الاثنين - الجمعة: 9 صباحًا - 6 مساءً
- السبت - الأحد: مغلق

ملاحظة مهمة: يرجى تقديم إجابة واضحة وسهلة القراءة بدون استخدام أي تنسيق مثل النجوم أو الشرطات السفلية أو كتل الشيفرة.

الآن، يرجى الرد على استفسار المستخدم التالي باللغة العربية:
"${userQuery}"
`;

  try {
    const result = await model.generateContent(contextPrompt);
    const rawResponse = result.response.text();
    
    // Process the response to remove markdown formatting
    return removeMarkdownFormatting(rawResponse);
  } catch (error) {
    console.error("Error generating AI response:", error);
    return fallbackResponses.default[language];
  }
};
