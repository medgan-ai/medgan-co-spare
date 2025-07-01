import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { validateEnvironment } from "@/lib/env";

// Validate environment variables before starting the app
try {
  validateEnvironment();
} catch (error) {
  console.error("Failed to start application due to environment configuration issues:", error);
}

createRoot(document.getElementById("root")!).render(<App />);
