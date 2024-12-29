// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="bg-purple-700 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold">Hair Haven</Link>
//         <nav>
//           <ul className="flex space-x-4">
//             <li><Link to="/" className="hover:text-purple-200">Home</Link></li>
//             <li><Link to="/services" className="hover:text-purple-200">Services</Link></li>
//             <li><Link to="/offers" className="hover:text-purple-200">Offers</Link></li>
//             <li><Link to="/admin-login" className="bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded">Admin Login</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Offers', path: '/offers' },
    { title: 'Reviews', path: '/reviews' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Admin Login', path: '/admin-login' },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200"
            >
              Hair Haven
            </motion.div>
          </Link>
          <nav className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <motion.div key={item.title} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  to={item.path}
                  className="hover:text-pink-200 transition duration-300 ease-in-out"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="block hover:bg-purple-700 rounded px-2 py-1"
                onClick={toggleMenu}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;

