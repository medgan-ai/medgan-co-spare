# Environment Variables Configuration

This document describes how environment variables are configured and used in the MedGAN web application.

## Setup Instructions

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Configure your variables:**
   Edit the `.env` file with your actual values:
   ```bash
   VITE_SUPABASE_URL=https://mbmbauqjdgbisaxkfpbp.supabase.co
   VITE_SUPABASE_ANON_KEY=your_actual_supabase_anon_key
   VITE_GOOGLE_API_KEY=your_actual_google_ai_api_key
   ```

## Environment Variables Reference

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL | `https://mbmbauqjdgbisaxkfpbp.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | `eyJhbGciOiJIUzI1NiIs...` |
| `VITE_GOOGLE_API_KEY` | Google AI API key for Gemini | `AIzaSyAIgHMrwy6gtR2...` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_OPENAI_API_KEY` | OpenAI API key | None |
| `VITE_ANTHROPIC_API_KEY` | Anthropic API key | None |
| `VITE_GA_TRACKING_ID` | Google Analytics tracking ID | None |
| `VITE_MIXPANEL_TOKEN` | Mixpanel analytics token | None |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID | None |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID | None |
| `VITE_APP_ENV` | Application environment | `production` |
| `VITE_DEBUG_MODE` | Enable debug features | `false` |

## Usage in Code

### Type-Safe Access
```typescript
import { env } from '@/lib/env';

// Access Supabase configuration
const supabaseUrl = env.supabase.url;
const supabaseKey = env.supabase.anonKey;

// Access AI configuration
const googleApiKey = env.ai.googleApiKey;

// Access optional variables
const gaTrackingId = env.analytics.gaTrackingId; // Returns empty string if not set
```

### Environment Validation
```typescript
import { validateEnvironment } from '@/lib/env';

// Validate all required environment variables are set
try {
  validateEnvironment();
  console.log('✅ Environment validation passed');
} catch (error) {
  console.error('❌ Environment validation failed:', error);
}
```

### Environment Checks
```typescript
import { isDevelopment, isProduction, isDebugMode } from '@/lib/env';

if (isDevelopment()) {
  console.log('Running in development mode');
}

if (isDebugMode()) {
  console.log('Debug mode is enabled');
}
```

## Components Using Environment Variables

### Supabase Client
- **File:** `src/integrations/supabase/client.ts`
- **Variables:** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- **Usage:** Database connections, authentication

### AI Service
- **File:** `src/utils/aiService.ts`
- **Variables:** `VITE_GOOGLE_API_KEY`
- **Usage:** Google Gemini AI chatbot functionality

### Environment Status Component
- **File:** `src/components/EnvironmentStatus.tsx`
- **Variables:** All variables (for debugging)
- **Usage:** Development/debug environment status display

## Security Notes

1. **Never commit your `.env` file** - it contains sensitive API keys
2. **Use `.env.example`** for documentation and sharing the structure
3. **Prefix all variables with `VITE_`** - required for Vite to expose them to the client
4. **Rotate API keys regularly** for security
5. **Use different keys for development and production**

## Troubleshooting

### Common Issues

1. **Variables not loading:**
   - Ensure variables are prefixed with `VITE_`
   - Restart the development server after adding new variables
   - Check the `.env` file is in the project root

2. **Build failures:**
   - Verify all required variables are set
   - Check for typos in variable names
   - Ensure fallback values are provided for critical variables

3. **API connection errors:**
   - Verify API keys are valid and active
   - Check API usage limits and quotas
   - Ensure URLs are correctly formatted

### Environment Status Display

In development mode, an environment status component is displayed in the bottom-left corner showing:
- ✅ Configured variables
- ❌ Missing required variables  
- ⚠️ Optional variables

Enable debug mode by setting `VITE_DEBUG_MODE=true` to see this display in production.

## Migration from Hardcoded Values

The application has been updated to use environment variables instead of hardcoded values:

- ✅ Supabase configuration now uses `env.supabase.*`
- ✅ Google AI API key now uses `env.ai.googleApiKey`
- ✅ Environment validation added to startup process
- ✅ Type-safe environment configuration implemented
- ✅ Development status component added
