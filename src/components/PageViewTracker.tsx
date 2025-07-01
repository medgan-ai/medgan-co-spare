import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface PageViewTrackerProps {
  page: string;
}

const PageViewTracker: React.FC<PageViewTrackerProps> = ({ page }) => {
  useEffect(() => {
    const trackPageView = async () => {
      try {
        // Get user agent and other data
        const userAgent = navigator.userAgent;
        const referer = document.referrer;
        
        // In a real application, you'd get the IP address from your server
        // For now, we'll use a placeholder
        const ipAddress = 'unknown';

        const { error } = await supabase
          .from('page_views')
          .insert({
            page,
            userAgent,
            ipAddress,
            referer: referer || null,
          });

        if (error) {
          console.error('Error tracking page view:', error);
        }
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    trackPageView();
  }, [page]);

  return null; // This component doesn't render anything
};

export default PageViewTracker;
