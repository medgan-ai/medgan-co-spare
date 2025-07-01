import { supabase } from '@/integrations/supabase/client';
import type { Tables, TablesInsert } from '@/integrations/supabase/types';

// Newsletter Subscriptions
export const subscribeToNewsletter = async (email: string, name: string, source: string = 'website') => {
  const { data, error } = await supabase
    .from('newsletter_subscriptions')
    .insert({
      email,
      name,
      isActive: true,
      source,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getNewsletterSubscriptions = async () => {
  const { data, error } = await supabase
    .from('newsletter_subscriptions')
    .select('*')
    .eq('isActive', true)
    .order('createdAt', { ascending: false });

  if (error) throw error;
  return data;
};

// Contact Submissions
export const submitContactForm = async (formData: TablesInsert<'contact_submissions'>) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert(formData)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getContactSubmissions = async () => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('createdAt', { ascending: false });

  if (error) throw error;
  return data;
};

// Testimonials
export const getActiveTestimonials = async () => {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('isActive', true)
    .order('order', { ascending: true });

  if (error) throw error;
  return data;
};

export const addTestimonial = async (testimonial: TablesInsert<'testimonials'>) => {
  const { data, error } = await supabase
    .from('testimonials')
    .insert(testimonial)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Website Stats
export const getLatestWebsiteStats = async () => {
  const { data, error } = await supabase
    .from('website_stats')
    .select('*')
    .order('createdAt', { ascending: false })
    .limit(1)
    .single();

  if (error) throw error;
  return data;
};

export const updateWebsiteStats = async (id: number, updates: Partial<Tables<'website_stats'>>) => {
  const { data, error } = await supabase
    .from('website_stats')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Page Views
export const trackPageView = async (page: string, userAgent: string, ipAddress: string, referer?: string) => {
  const { data, error } = await supabase
    .from('page_views')
    .insert({
      page,
      userAgent,
      ipAddress,
      referer,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getPageViewStats = async (page?: string) => {
  let query = supabase
    .from('page_views')
    .select('*');

  if (page) {
    query = query.eq('page', page);
  }

  const { data, error } = await query.order('createdAt', { ascending: false });

  if (error) throw error;
  return data;
};

// Blog Posts
export const getPublishedBlogPosts = async () => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .not('publishedAt', 'is', null)
    .order('publishedAt', { ascending: false });

  if (error) throw error;
  return data;
};

export const getBlogPostById = async (id: number) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};

// Job Postings
export const getActiveJobPostings = async () => {
  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .eq('isActive', true)
    .order('createdAt', { ascending: false });

  if (error) throw error;
  return data;
};

export const submitJobApplication = async (application: TablesInsert<'job_applications'>) => {
  const { data, error } = await supabase
    .from('job_applications')
    .insert(application)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Case Studies
export const getPublishedCaseStudies = async () => {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('isPublished', true)
    .order('order', { ascending: true });

  if (error) throw error;
  return data;
};
