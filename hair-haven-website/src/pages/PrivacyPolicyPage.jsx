import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
          Privacy Policy
        </h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-xl shadow-card p-8 md:p-12 max-w-4xl mx-auto"
      >
        <div className="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>
            At Hair Haven, we respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you 
            visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect personal information that you provide directly to us, such as your name, 
            contact information, and appointment details when you book our services.
          </p>

          <h3>Information Collected Automatically</h3>
          <p>
            When you visit our website, we may automatically collect certain information about your 
            device, including information about your web browser, IP address, time zone, and some of 
            the cookies that are installed on your device.
          </p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To allow you to participate in interactive features when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our services</li>
            <li>To monitor the usage of our services</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To provide you with news, special offers and general information about other services which we offer</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission 
            over the Internet, or method of electronic storage is 100% secure. While we strive to use 
            commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
          </p>

          <h2>Your Data Protection Rights</h2>
          <p>
            We would like to make sure you are fully aware of all of your data protection rights. 
            Every user is entitled to the following:
          </p>
          <ul>
            <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
            <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
            <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
            <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
            <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>By email: info@hairhaven.com</li>
            <li>By phone: (+91) 7500667534</li>
            <li>By visiting this page on our website: <a href="/contact" className="text-primary-600 hover:text-primary-800">Contact Us</a></li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicyPage;