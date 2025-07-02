import React, { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

type WebsiteStats = Tables<'website_stats'>;

const fallbackStats = [
  { value: 97, label: "Project Success Rate", suffix: "%" },
  { value: 12, label: "Custom AI Solutions Developed", prefix: "+" },
  { value: 5, label: "Industries Engaged", prefix: "+" },
  { value: 2, label: "Data Points Processed", suffix: "M+" },
];

const CounterAnimation = ({ value, prefix, suffix, duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    
    if (!isVisible) return;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isVisible]);
  
  return (
    <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  const isMobile = useIsMobile();
  const [stats, setStats] = useState<StatProps[]>(fallbackStats);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data, error } = await supabase
          .from('website_stats')
          .select('*')
          .order('createdAt', { ascending: false })
          .limit(1)
          .single();
        
        if (error) {
          console.error("Error fetching stats:", error);
          setStats(fallbackStats);
        } else if (data) {
          const formattedStats = [
            { 
              value: data.project_success_rate || 97, 
              label: "Project Success Rate", 
              suffix: "%" 
            },
            { 
              value: data.custom_ai_solutions || 12, 
              label: "Custom AI Solutions Developed", 
              prefix: "+" 
            },
            { 
              value: data.industries_engaged || 5, 
              label: "Industries Engaged", 
              prefix: "+" 
            },
            { 
              value: data.data_points_processed ? Math.round(data.data_points_processed / 1000000) : 2, 
              label: "Data Points Processed", 
              suffix: "M+" 
            },
          ];
          setStats(formattedStats);
          
          await supabase
            .from('website_stats')
            .update({ views: (data.views || 0) + 1 })
            .eq('id', data.id);
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
        setStats(fallbackStats);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);
  
  return (
    <section className="py-20 bg-gradient-to-r from-medgan-dark-blue to-medgan-purple text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-white/10"></div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-float"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`font-bold mb-3 ${isMobile ? 'text-4xl' : 'text-5xl'}`}>
                <CounterAnimation 
                  value={stat.value} 
                  label={stat.label}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2500}
                />
              </div>
              <p className={`text-white/90 ${isMobile ? 'text-base' : 'text-lg'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;