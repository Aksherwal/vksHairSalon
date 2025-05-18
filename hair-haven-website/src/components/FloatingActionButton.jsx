import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Phone, Calendar, Clock } from 'lucide-react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const actions = [
    { icon: <Phone size={20} />, label: 'Call Us', action: () => window.location.href = 'tel:+91 9557521160' },
    { icon: <Calendar size={20} />, label: 'Book Now', action: () => alert('Booking functionality would go here') },
    { icon: <Clock size={20} />, label: 'Opening Hours', action: () => alert('Open Wednesday-Monday, 8 AM - 8 PM (IST)') },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 mb-2"
          >
            <div className="flex flex-col items-end space-y-2">
              {actions.map((action, index) => (
                <motion.button
                  key={index}
                  className="flex items-center space-x-2 bg-white text-neutral-800 px-4 py-2 rounded-full shadow-lg"
                  onClick={action.action}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="whitespace-nowrap font-medium">{action.label}</span>
                  <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full">
                    {action.icon}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
          isOpen 
            ? 'bg-neutral-800 text-white' 
            : 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white'
        }`}
        onClick={toggleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="animate-pulse"
            >
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;