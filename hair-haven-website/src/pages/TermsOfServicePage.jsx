import React from 'react';
import { motion } from 'framer-motion';

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
          Terms of Service
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
          <h2>1. Introduction</h2>
          <p>
            Welcome to Hair Haven. These Terms of Service govern your use of our website and services. 
            By accessing or using our services, you agree to be bound by these Terms.
          </p>

          <h2>2. Services</h2>
          <p>
            Hair Haven provides hair styling, cutting, coloring, and related beauty services. 
            All services are subject to availability and professional discretion of our stylists.
          </p>

          <h2>3. Appointments</h2>
          <p>
            Appointments can be made through our website, by phone, or in person. We request that you 
            arrive 10 minutes before your scheduled appointment time. If you need to cancel or reschedule, 
            please provide at least 24 hours' notice.
          </p>
          <p>
            Late arrivals may result in shortened service time or rescheduling, at our discretion, 
            to accommodate other clients.
          </p>

          <h2>4. Payment</h2>
          <p>
            Payment is due at the time services are rendered. We accept cash and major credit cards. 
            Prices are subject to change without notice.
          </p>

          <h2>5. Gift Certificates</h2>
          <p>
            Gift certificates are available for purchase and are non-refundable. They must be presented 
            at the time of service and cannot be replaced if lost or stolen.
          </p>

          <h2>6. Satisfaction Guarantee</h2>
          <p>
            Your satisfaction is our priority. If you are not completely satisfied with your service, 
            please let us know within 7 days, and we will do our best to address your concerns.
          </p>

          <h2>7. Conduct</h2>
          <p>
            We strive to maintain a relaxing and professional environment. We reserve the right to refuse 
            service to anyone who is disruptive, abusive, or under the influence of alcohol or drugs.
          </p>

          <h2>8. Liability</h2>
          <p>
            Hair Haven is not liable for any allergic reactions or adverse effects resulting from services 
            or products. Please inform your stylist of any allergies or sensitivities before your service.
          </p>

          <h2>9. Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, and images, is the property of 
            Hair Haven and is protected by copyright laws.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately 
            upon posting on our website. Your continued use of our services after any changes indicates 
            your acceptance of the modified Terms.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li>By email: info@hairhaven.com</li>
            <li>By phone: (+91) 7500667534</li>
            <li>By mail: VK Hair Salon, Tugana, Baghpat</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfServicePage;