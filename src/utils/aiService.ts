import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "@/lib/env";

// Use environment configuration for API key
const genAI = new GoogleGenerativeAI(env.ai.googleApiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export type Language = "english" | "arabic";

export const fallbackResponses: Record<string, Record<Language, string>> = {
  default: {
    english:
      "I'm sorry, I couldn't process your request at the moment. Please try again later or contact our support team directly.",
    arabic:
      "آسف، لم أتمكن من معالجة طلبك في الوقت الحالي. يرجى المحاولة مرة أخرى لاحقًا أو الاتصال بفريق الدعم لدينا مباشرة.",
  },
};

export const initialBotMessages: Record<Language, string> = {
  english: "Hello! I'm MedGAN's AI assistant. How can I help you today?",
  arabic: "مرحبًا! أنا مساعد MedGAN الذكي. كيف يمكنني مساعدتك اليوم؟",
};

// Helper function to remove markdown formatting
const removeMarkdownFormatting = (text: string): string => {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold (**text**)
    .replace(/\*(.*?)\*/g, "$1") // Remove italic (*text*)
    .replace(/__(.*?)__/g, "$1") // Remove underscore bold (__text__)
    .replace(/_(.*?)_/g, "$1") // Remove underscore italic (_text_)
    .replace(/```(.*?)```/gs, "$1") // Remove code blocks
    .replace(/`(.*?)`/g, "$1"); // Remove inline code
};

export const generateAIResponse = async (
  userQuery: string,
  language: Language
): Promise<string> => {
  const contextPrompt =
    language === "english"
      ? `
You are MedGAN's AI Assistant, representing a pioneering AI solutions company based in Jordan and serving the MENA region.

MedGAN specializes in developing agentic AI systems, autonomous agents, and intelligent enterprise solutions that help organizations accelerate digital transformation, reduce costs, and gain a competitive edge.

Your role is to:
- Provide clear, professional, and friendly responses.
- Explain MedGAN’s services, capabilities, and mission when relevant.
- Highlight MedGAN’s expertise in agentic AI systems, custom AI solutions, and AI transformation services.
- Share company contact and business information when asked.
- Avoid technical jargon unless the user requests deep technical details.
- Always ensure responses are clean and readable without markdown formatting.

Company Information:
- Website: medgan.co
- Location: Amman, Jordan – Al Yasmin
- Phone: +962 785 120 140
- Email: contact@medgan.co
- Hours: Monday–Friday 9 AM–6 PM, Closed Sat–Sun
- Industry: IT Services & Consulting
- Founded: 2025
- Specialties: Artificial Intelligence, AI Agents, Chatbots, Automation, Deep Learning, Machine Learning, AI Research, LLMs

Now respond to the following user query in English:
"${userQuery}"
`
      : `
أنت المساعد الذكي لشركة MedGAN، وهي شركة رائدة في الحلول المدعومة بالذكاء الاصطناعي مقرها الأردن وتخدم منطقة الشرق الأوسط وشمال إفريقيا.

تتخصص MedGAN في تطوير أنظمة الذكاء الاصطناعي الوكيلية والوكلاء المستقلين والحلول المؤسسية الذكية التي تساعد المؤسسات على تسريع التحول الرقمي، وتقليل التكاليف، واكتساب ميزة تنافسية.

دورك هو:
- تقديم ردود واضحة واحترافية وودية.
- شرح خدمات MedGAN وقدراتها ورسالتها عند الحاجة.
- إبراز خبرة MedGAN في أنظمة الذكاء الاصطناعي الوكيلية، والحلول المخصصة، وخدمات التحول بالذكاء الاصطناعي.
- مشاركة معلومات الاتصال الخاصة بالشركة عند الطلب.
- تجنب المصطلحات التقنية المعقدة إلا إذا طلب المستخدم تفاصيل تقنية متقدمة.
- ضمان أن تكون الردود دائمًا واضحة وسهلة القراءة بدون أي تنسيقات مثل النجوم أو الأكواد.

معلومات الشركة:
- الموقع: medgan.co
- المقر: عمان، الأردن  
- الهاتف: +962 785 120 140
- البريد الإلكتروني: contact@medgan.co
- ساعات العمل: الاثنين – الجمعة: 9 صباحًا – 6 مساءً | السبت – الأحد: مغلق
- الصناعة: خدمات واستشارات تقنية المعلومات
- تأسست: 2025
- التخصصات: الذكاء الاصطناعي، الوكلاء الذكيون، الشات بوت، الأتمتة، التعلم العميق، التعلم الآلي، أبحاث الذكاء الاصطناعي، النماذج اللغوية

الآن يرجى الرد على استفسار المستخدم التالي باللغة العربية:
"${userQuery}"
`;

  try {
    const result = await model.generateContent(contextPrompt);
    const rawResponse = result.response.text();

    // Clean markdown formatting if any
    return removeMarkdownFormatting(rawResponse);
  } catch (error) {
    console.error("Error generating AI response:", error);
    return fallbackResponses.default[language];
  }
};
