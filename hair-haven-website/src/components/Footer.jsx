import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                Hair Haven
              </h2>
            </Link>
            <p className="text-neutral-400 mb-6">
              Premium hair salon offering a wide range of services to help you look and feel your best.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={18} />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Special Offers', path: '/offers' },
                { name: 'Customer Reviews', path: '/reviews' },
                { name: 'Photo Gallery', path: '/gallery' },
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.path} 
                    className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-primary-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-neutral-400">
                <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <span>VK Hair Salon, Tugana, Baghpat</span>
              </li>
              <li className="flex items-center space-x-3 text-neutral-400">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+91 7500667534" className="hover:text-white transition-colors duration-300">
                  (+91) 7500667534
                </a>
              </li>
              <li className="flex items-center space-x-3 text-neutral-400">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:vk648471@gmail.com" className="hover:text-white transition-colors duration-300">
                  info@hairhaven.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-neutral-400">
                <Clock size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p>Open WED-MON, 7 AM - 8 PM (IST)</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Stay Updated
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
            </h3>
            <p className="text-neutral-400 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg py-3 px-4 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <motion.button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
            <p className="text-neutral-500 text-xs mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </motion.div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-neutral-800 my-10"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {currentYear} Hair Haven. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex space-x-6 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0 flex items-center"
          >
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-red-500 animate-pulse" />
            <span>in India</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

