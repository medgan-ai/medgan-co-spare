
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { observeScrollAnimation } from "@/utils/animation";

const TermsOfService = () => {
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
                Terms of Service
              </h1>
              <p className="text-gray-600 mb-8">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Welcome to MedGAN. Please read these Terms of Service ("Terms") carefully as they contain important information about your legal rights, remedies, and obligations. By accessing or using the MedGAN website and services, you agree to comply with and be bound by these Terms.
                </p>
                
                <h2>Use of Services</h2>
                <p>
                  MedGAN provides artificial intelligence solutions and related services to help businesses transform data into actionable insights. Our services are available to businesses and individuals who comply with these Terms and all applicable laws.
                </p>
                <p>
                  You may use our services only as permitted by these Terms and any applicable laws. You may not:
                </p>
                <ul>
                  <li>Use our services for any illegal purpose or in violation of any laws</li>
                  <li>Violate or infringe other people's rights</li>
                  <li>Interfere with or disrupt our services or the infrastructure on which they run</li>
                  <li>Attempt to gain unauthorized access to our services or related systems</li>
                  <li>Collect or harvest data from our services without authorization</li>
                  <li>Use our services to distribute malware or other harmful code</li>
                </ul>
                
                <h2>Account Registration</h2>
                <p>
                  To access certain features of our services, you may need to register for an account. When you register, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
                
                <h2>Intellectual Property Rights</h2>
                <p>
                  The content, features, and functionality of our website and services, including but not limited to text, graphics, logos, button icons, images, audio clips, data compilations, and software, are owned by MedGAN, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p>
                  We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our services for their intended purposes, subject to these Terms.
                </p>
                
                <h2>User Content</h2>
                <p>
                  When you submit content to our services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute that content in connection with providing our services to you and others.
                </p>
                <p>
                  You represent and warrant that:
                </p>
                <ul>
                  <li>You own or have the necessary rights to the content you submit</li>
                  <li>Your content does not violate the privacy, publicity, copyright, or other rights of any person</li>
                  <li>Your content does not contain any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable</li>
                </ul>
                
                <h2>Payment Terms</h2>
                <p>
                  For paid services, you agree to pay all fees associated with the services you select. We may modify our fees by posting the changes on our website. Your continued use of the services after the fee change becomes effective constitutes your agreement to pay the modified fees.
                </p>
                
                <h2>Termination</h2>
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the services will immediately cease.
                </p>
                
                <h2>Disclaimer of Warranties</h2>
                <p>
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
                <p>
                  We do not guarantee that our services will be uninterrupted, secure, or error-free, or that defects will be corrected. You use our services at your own risk.
                </p>
                
                <h2>Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, MedGAN and its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul>
                  <li>Your access to or use of or inability to access or use the services</li>
                  <li>Any conduct or content of any third party on the services</li>
                  <li>Any content obtained from the services</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
                
                <h2>Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Jordan, without regard to its conflict of law provisions.
                </p>
                
                <h2>Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
                </p>
                
                <h2>Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;
