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

// Fallback stats in case database is empty
const fallbackStats = [
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 150, label: "AI Models Deployed", prefix: "+" },
  { value: 35, label: "Industries Served", prefix: "+" },
  { value: 10000, label: "Data Points Analyzed", suffix: "K+" },
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
          // Convert database data to display format
          const formattedStats = [
            { value: data.clientSatisfaction, label: "Client Satisfaction", suffix: "%" },
            { value: data.projectsDelivered, label: "Projects Delivered", prefix: "+" },
            { value: data.enterpriseClients, label: "Enterprise Clients", prefix: "+" },
            { value: data.countersViewed, label: "Data Points Analyzed", suffix: "K+" },
          ];
          setStats(formattedStats);
          
          // Update the counters viewed count
          await supabase
            .from('website_stats')
            .update({ countersViewed: data.countersViewed + 1 })
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
    <section className="section-padding bg-medgan-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] opacity-5"></div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 animate-on-scroll">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`font-bold mb-2 ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'}`}>
                <CounterAnimation 
                  value={stat.value} 
                  label={stat.label}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className={`text-white/80 ${isMobile ? 'text-sm' : 'text-base'}`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
