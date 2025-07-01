import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsCounter from "@/components/StatsCounter";
import FAQAccordion from "@/components/FAQAccordion";
import ContactSection from "@/components/ContactSection";
import AIPlayground from "@/components/AIPlayground";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import PageViewTracker from "@/components/PageViewTracker";
import { Toaster } from "@/components/ui/toaster";
import { observeScrollAnimation } from "@/utils/animation";

const Index = () => {
  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <PageViewTracker page="home" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsCounter />
        <FeaturesSection />
        <AIPlayground />
        <TestimonialsSection />
        <TeamSection />
        <NewsletterSubscription />
        <FAQAccordion />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  );
};

export default Index;
