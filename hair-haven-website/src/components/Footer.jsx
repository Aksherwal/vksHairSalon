// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-purple-800 text-white p-4 mt-8">
//       <div className="container mx-auto text-center">
//         <p>&copy; 2024 Hair Haven. All rights reserved.</p>
//         <div className="mt-2">
//           <a href="#" className="mx-2 hover:text-purple-200">Facebook</a>
//           <a href="#" className="mx-2 hover:text-purple-200">Instagram</a>
//           <a href="#" className="mx-2 hover:text-purple-200">Twitter</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-pink-700 text-white p-8 mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Hair Haven</h3>
            <p>Your one-stop destination for all things hair.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-pink-300 transition duration-300">Home</a></li>
              <li><a href="/services" className="hover:text-pink-300 transition duration-300">Services</a></li>
              <li><a href="/offers" className="hover:text-pink-300 transition duration-300">Offers</a></li>
              <li><a href="/reviews" className="hover:text-pink-300 transition duration-300">Reviews</a></li>
              <li><a href="/gallery" className="hover:text-pink-300 transition duration-300">Gallery</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-pink-300 transition duration-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl hover:text-pink-300 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl hover:text-pink-300 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Hair Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

