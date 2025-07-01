import React from 'react';
import { env, isDevelopment, isDebugMode } from '@/lib/env';

interface EnvironmentStatusProps {
  className?: string;
}

export const EnvironmentStatus: React.FC<EnvironmentStatusProps> = ({ className = '' }) => {
  // Only show in development or debug mode
  if (!isDevelopment() && !isDebugMode()) {
    return null;
  }

  const envStatus = {
    supabase: {
      url: env.supabase.url ? '✅ Connected' : '❌ Missing',
      key: env.supabase.anonKey ? '✅ Configured' : '❌ Missing',
    },
    ai: {
      google: env.ai.googleApiKey ? '✅ Configured' : '❌ Missing',
      openai: env.ai.openaiApiKey ? '✅ Configured' : '⚠️ Optional',
      anthropic: env.ai.anthropicApiKey ? '✅ Configured' : '⚠️ Optional',
    },
    analytics: {
      ga: env.analytics.gaTrackingId ? '✅ Configured' : '⚠️ Optional',
      mixpanel: env.analytics.mixpanelToken ? '✅ Configured' : '⚠️ Optional',
    },
  };

  return (
    <div className={`fixed bottom-4 left-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg text-xs max-w-sm z-50 ${className}`}>
      <div className="font-bold mb-2">Environment Status</div>
      <div className="space-y-2">
        <div>
          <div className="font-semibold text-green-400">Supabase:</div>
          <div>URL: {envStatus.supabase.url}</div>
          <div>Key: {envStatus.supabase.key}</div>
        </div>
        <div>
          <div className="font-semibold text-blue-400">AI Services:</div>
          <div>Google: {envStatus.ai.google}</div>
          <div>OpenAI: {envStatus.ai.openai}</div>
          <div>Anthropic: {envStatus.ai.anthropic}</div>
        </div>
        <div>
          <div className="font-semibold text-purple-400">Analytics:</div>
          <div>GA: {envStatus.analytics.ga}</div>
          <div>Mixpanel: {envStatus.analytics.mixpanel}</div>
        </div>
        <div className="text-gray-400 pt-2 border-t border-gray-700">
          Env: {env.app.environment} | Debug: {isDebugMode() ? 'ON' : 'OFF'}
        </div>
      </div>
    </div>
  );
};

export default EnvironmentStatus;
