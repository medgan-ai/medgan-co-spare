
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { observeScrollAnimation } from "@/utils/animation";

const PrivacyPolicy = () => {
  useEffect(() => {
    const cleanup = observeScrollAnimation();
    return cleanup;
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-8">
          <div className="container max-w-4xl mx-auto">
            <div className="animate-on-scroll">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-gray-600 mb-8">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  At MedGAN, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
                
                <h2>Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us. For example, we collect information when you create an account, subscribe to our newsletter, participate in a survey, or communicate with us via third-party social media sites.
                </p>
                <p>
                  The information we may collect includes:
                </p>
                <ul>
                  <li>Personal identifiers (such as name, email address, phone number)</li>
                  <li>Professional or employment-related information</li>
                  <li>Payment and billing information</li>
                  <li>Demographic information</li>
                  <li>Any other information you choose to provide</li>
                </ul>
                
                <h2>Automatically Collected Information</h2>
                <p>
                  When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the site, we collect information about the individual web pages that you view, what websites or search terms referred you to the site, and information about how you interact with the site.
                </p>
                
                <h2>How We Use Your Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Communicate with you about products, services, offers, and events</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>Personalize and improve the services and provide content or features that match user profiles or interests</li>
                </ul>
                
                <h2>Sharing Your Information</h2>
                <p>
                  We may share the information we collect in various ways, including:
                </p>
                <ul>
                  <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
                  <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process</li>
                  <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of MedGAN or others</li>
                  <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
                  <li>With your consent or at your direction</li>
                </ul>
                
                <h2>Data Security</h2>
                <p>
                  We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls. Any payment transactions will be encrypted using SSL technology.
                </p>
                <p>
                  The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
                </p>
                
                <h2>Your Choices</h2>
                <p>
                  You can opt out of receiving promotional emails from MedGAN by following the instructions in those emails. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.
                </p>
                
                <h2>Changes to Our Privacy Policy</h2>
                <p>
                  We may update our privacy policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page or by email. The date the privacy policy was last revised is identified at the top of the page.
                </p>
                
                <h2>Contact Information</h2>
                <p>
                  If you have any questions or concerns about our privacy policy or practices, please contact us at:
                </p>
                <p>
                  MedGAN<br />
                  Amman, Jordan, Al Yasmin<br />
                  +962785120140<br />
                  info@medgan.ai
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default PrivacyPolicy;
