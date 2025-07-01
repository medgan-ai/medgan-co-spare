import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Database, Users, MessageSquare, TrendingUp } from 'lucide-react';

const DatabaseStatus = () => {
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');
  const [stats, setStats] = useState({
    newsletters: 0,
    contacts: 0,
    testimonials: 0,
    pageViews: 0,
  });

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Test basic connection
        const { data, error } = await supabase.from('newsletter_subscriptions').select('count', { count: 'exact', head: true });
        
        if (error) {
          setConnectionStatus('error');
          return;
        }

        setConnectionStatus('connected');

        // Get stats from various tables
        const [newsletters, contacts, testimonials, pageViews] = await Promise.all([
          supabase.from('newsletter_subscriptions').select('count', { count: 'exact', head: true }),
          supabase.from('contact_submissions').select('count', { count: 'exact', head: true }),
          supabase.from('testimonials').select('count', { count: 'exact', head: true }),
          supabase.from('page_views').select('count', { count: 'exact', head: true }),
        ]);

        setStats({
          newsletters: newsletters.count || 0,
          contacts: contacts.count || 0,
          testimonials: testimonials.count || 0,
          pageViews: pageViews.count || 0,
        });

      } catch (error) {
        console.error('Database connection error:', error);
        setConnectionStatus('error');
      }
    };

    testConnection();
  }, []);

  const getStatusIcon = () => {
    switch (connectionStatus) {
      case 'connected':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Database className="w-5 h-5 text-yellow-500 animate-pulse" />;
    }
  };

  const getStatusText = () => {
    switch (connectionStatus) {
      case 'connected':
        return 'Connected';
      case 'error':
        return 'Connection Error';
      default:
        return 'Connecting...';
    }
  };

  const getStatusColor = () => {
    switch (connectionStatus) {
      case 'connected':
        return 'bg-green-100 text-green-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="w-6 h-6" />
          Database Connection Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Supabase Connection:</span>
          <Badge className={getStatusColor()}>
            {getStatusIcon()}
            <span className="ml-1">{getStatusText()}</span>
          </Badge>
        </div>

        {connectionStatus === 'connected' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-3 rounded-lg bg-purple-50">
              <Users className="w-6 h-6 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-purple-600">{stats.newsletters}</div>
              <div className="text-xs text-purple-600">Newsletter Subs</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-blue-50">
              <MessageSquare className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-blue-600">{stats.contacts}</div>
              <div className="text-xs text-blue-600">Contact Forms</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-green-50">
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-green-600">{stats.testimonials}</div>
              <div className="text-xs text-green-600">Testimonials</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-orange-50">
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-orange-600">{stats.pageViews}</div>
              <div className="text-xs text-orange-600">Page Views</div>
            </div>
          </div>
        )}

        {connectionStatus === 'error' && (
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-600">
              Unable to connect to the database. Please check your configuration.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DatabaseStatus;
