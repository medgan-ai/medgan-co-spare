import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, Database } from 'lucide-react';

const DatabaseDebugger = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [testing, setTesting] = useState(false);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const testConnection = async () => {
    setTesting(true);
    setLogs([]);
    
    addLog('Starting database connection test...');

    try {
      // Test basic connection
      addLog('Testing basic Supabase connection...');
      const { data: authData, error: authError } = await supabase.auth.getSession();
      
      if (authError) {
        addLog(`Auth error: ${authError.message}`);
      } else {
        addLog('✅ Auth connection successful');
      }

      // Try to list tables by attempting to query some common ones
      const tablesToTest = [
        'newsletter_subscriptions',
        'contact_submissions', 
        'testimonials',
        'website_stats',
        'page_views',
        'blog_posts',
        'job_postings',
        'case_studies',
        'admin_users'
      ];

      addLog('Testing table access...');
      
      for (const table of tablesToTest) {
        try {
          const { data, error } = await supabase
            .from(table)
            .select('count', { count: 'exact', head: true });
          
          if (error) {
            addLog(`❌ Table '${table}': ${error.message}`);
          } else {
            addLog(`✅ Table '${table}': ${data ? 'accessible' : 'exists'} (count: ${data || 'unknown'})`);
          }
        } catch (err: any) {
          addLog(`❌ Table '${table}': ${err.message}`);
        }
      }

      // Test a simple insert to newsletter_subscriptions
      addLog('Testing newsletter subscription insert...');
      try {
        const testEmail = `test_${Date.now()}@example.com`;
        const { data, error } = await supabase
          .from('newsletter_subscriptions')
          .insert({
            email: testEmail,
            name: 'Test User',
            isActive: true,
            source: 'debug-test'
          })
          .select()
          .single();

        if (error) {
          addLog(`❌ Insert test failed: ${error.message}`);
          addLog(`Error code: ${error.code}`);
          addLog(`Error details: ${JSON.stringify(error.details)}`);
        } else {
          addLog(`✅ Insert test successful: ${JSON.stringify(data)}`);
          
          // Clean up test data
          await supabase
            .from('newsletter_subscriptions')
            .delete()
            .eq('id', data.id);
          addLog('✅ Test data cleaned up');
        }
      } catch (err: any) {
        addLog(`❌ Insert test exception: ${err.message}`);
      }

    } catch (error: any) {
      addLog(`❌ Connection test failed: ${error.message}`);
    }

    setTesting(false);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="w-6 h-6" />
          Database Connection Debugger
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={testConnection} 
          disabled={testing}
          className="w-full"
        >
          {testing ? 'Testing...' : 'Run Database Test'}
        </Button>

        {logs.length > 0 && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg max-h-96 overflow-y-auto">
            <h4 className="font-semibold mb-2">Test Results:</h4>
            {logs.map((log, index) => (
              <div key={index} className="text-sm font-mono mb-1">
                {log.includes('✅') ? (
                  <span className="text-green-600">{log}</span>
                ) : log.includes('❌') ? (
                  <span className="text-red-600">{log}</span>
                ) : (
                  <span className="text-gray-600">{log}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DatabaseDebugger;
