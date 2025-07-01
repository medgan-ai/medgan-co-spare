/**
 * Environment Variables Configuration
 * This file provides type-safe access to environment variables
 * and validation for required environment variables.
 */

interface EnvironmentVariables {
  // Required variables
  VITE_SUPABASE_URL: string;
  VITE_SUPABASE_ANON_KEY: string;
  VITE_GOOGLE_API_KEY: string;
  
  // Optional variables
  VITE_OPENAI_API_KEY?: string;
  VITE_ANTHROPIC_API_KEY?: string;
  VITE_GA_TRACKING_ID?: string;
  VITE_MIXPANEL_TOKEN?: string;
  VITE_EMAILJS_SERVICE_ID?: string;
  VITE_EMAILJS_TEMPLATE_ID?: string;
  VITE_APP_ENV?: string;
  VITE_DEBUG_MODE?: string;
}

/**
 * Get environment variable with optional fallback
 */
function getEnvVar(key: keyof EnvironmentVariables, fallback?: string): string {
  const value = import.meta.env[key] as string;
  if (!value && !fallback) {
    console.warn(`Environment variable ${key} is not set`);
  }
  return value || fallback || '';
}

/**
 * Get required environment variable (throws error if not found)
 */
function getRequiredEnvVar(key: keyof EnvironmentVariables): string {
  const value = import.meta.env[key] as string;
  if (!value) {
    throw new Error(`Required environment variable ${key} is not set`);
  }
  return value;
}

/**
 * Environment configuration object
 */
export const env = {
  // Supabase Configuration
  supabase: {
    url: getEnvVar('VITE_SUPABASE_URL', 'https://mbmbauqjdgbisaxkfpbp.supabase.co'),
    anonKey: getEnvVar('VITE_SUPABASE_ANON_KEY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ibWJhdXFqZGdiaXNheGtmcGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyODMxMDYsImV4cCI6MjA1Nzg1OTEwNn0.VYhZeZ1ez9QEnJKBRD0tyenuLC8YChSzem8CoUQ6_QI'),
  },
  
  // AI Configuration
  ai: {
    googleApiKey: getEnvVar('VITE_GOOGLE_API_KEY', 'AIzaSyAIgHMrwy6gtR243nE2C0KWy8NWuOLCFe8'),
    openaiApiKey: getEnvVar('VITE_OPENAI_API_KEY'),
    anthropicApiKey: getEnvVar('VITE_ANTHROPIC_API_KEY'),
  },
  
  // Analytics Configuration
  analytics: {
    gaTrackingId: getEnvVar('VITE_GA_TRACKING_ID'),
    mixpanelToken: getEnvVar('VITE_MIXPANEL_TOKEN'),
  },
  
  // Email Configuration
  email: {
    emailjsServiceId: getEnvVar('VITE_EMAILJS_SERVICE_ID'),
    emailjsTemplateId: getEnvVar('VITE_EMAILJS_TEMPLATE_ID'),
  },
  
  // App Configuration
  app: {
    environment: getEnvVar('VITE_APP_ENV', 'production'),
    debugMode: getEnvVar('VITE_DEBUG_MODE', 'false') === 'true',
  }
} as const;

/**
 * Validate that all required environment variables are set
 */
export function validateEnvironment(): void {
  try {
    getRequiredEnvVar('VITE_SUPABASE_URL');
    getRequiredEnvVar('VITE_SUPABASE_ANON_KEY');
    getRequiredEnvVar('VITE_GOOGLE_API_KEY');
    
    if (env.app.debugMode) {
      console.log('✅ All required environment variables are set');
      console.log('Environment:', env.app.environment);
    }
  } catch (error) {
    console.error('❌ Environment validation failed:', error);
    throw error;
  }
}

/**
 * Check if we're in development mode
 */
export const isDevelopment = () => env.app.environment === 'development';

/**
 * Check if we're in production mode
 */
export const isProduction = () => env.app.environment === 'production';

/**
 * Check if debug mode is enabled
 */
export const isDebugMode = () => env.app.debugMode;
