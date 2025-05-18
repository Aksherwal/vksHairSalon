import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
          Cookie Policy
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
          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
            They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>

          <h2>How We Use Cookies</h2>
          <p>
            Hair Haven uses cookies for several purposes, including:
          </p>
          <ul>
            <li><strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be turned off.</li>
            <li><strong>Performance cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
            <li><strong>Functionality cookies:</strong> These allow the website to provide enhanced functionality and personalization.</li>
            <li><strong>Targeting cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests.</li>
          </ul>

          <h2>Types of Cookies We Use</h2>
          
          <h3>Session Cookies</h3>
          <p>
            These are temporary cookies that are erased when you close your browser. They do not collect information 
            from your computer. They typically store information in the form of a session identification that does 
            not personally identify you.
          </p>

          <h3>Persistent Cookies</h3>
          <p>
            These remain on your hard drive until you erase them or they expire. These cookies may be used to remember 
            your preferences for our website or to enable us to analyze user behavior.
          </p>

          <h2>Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third parties on our behalf. These may include:
          </p>
          <ul>
            <li>Analytics cookies (such as Google Analytics) to help us understand how visitors use our site</li>
            <li>Social media cookies that allow you to share content from our site on platforms like Facebook and Twitter</li>
            <li>Advertising cookies that help us deliver relevant advertisements</li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can usually find these settings 
            in the "Options" or "Preferences" menu of your browser. You can also use the "Help" option in your browser 
            for more details.
          </p>
          <p>
            If you choose to disable cookies, some features of our website may not function properly.
          </p>

          <h2>Changes to Our Cookie Policy</h2>
          <p>
            We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated 
            revision date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us:
          </p>
          <ul>
            <li>By email: info@hairhaven.com</li>
            <li>By phone: (+91) 7500667534</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default CookiePolicyPage;