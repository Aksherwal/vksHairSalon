import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';

const ServicesPage = () => {
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);
  const { services } = useShop();

  const filteredServices = showOnlyAvailable
    ? services.filter(service => service.available)
    : services;

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
          Our Services
        </h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Discover our range of professional hair care services designed to make you look and feel your best.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 flex justify-between items-center"
      >
        <div className="flex items-center">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-primary-600 rounded border-neutral-300 focus:ring-primary-500"
              checked={showOnlyAvailable}
              onChange={() => setShowOnlyAvailable(!showOnlyAvailable)}
            />
            <span className="ml-2 text-neutral-700">Show only available services</span>
          </label>
        </div>
        
        <div className="text-neutral-500 text-sm">
          Showing {filteredServices.length} of {services.length} services
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-card overflow-hidden"
          >
            <div className="relative h-64">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover"
              />
              {!service.available && (
                <div className="absolute top-4 right-4 bg-neutral-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Currently Unavailable
                </div>
              )}
              {service.discount && (
                <div className="absolute top-4 left-4 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {service.discount}% OFF
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">{service.name}</h3>
              <div className="flex justify-between items-center mb-4">
                <div>
                  {service.discount ? (
                    <div className="flex items-center">
                      <span className="text-primary-600 font-bold text-xl">
                        ₹{(service.price - (service.price * service.discount / 100)).toFixed(0)}
                      </span>
                      <span className="text-neutral-400 line-through ml-2">₹{service.price}</span>
                    </div>
                  ) : (
                    <span className="text-primary-600 font-bold text-xl">₹{service.price}</span>
                  )}
                </div>
                
                <div>
                  {service.available ? (
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Available
                    </span>
                  ) : (
                    <span className="inline-block bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded-full">
                      Unavailable
                    </span>
                  )}
                </div>
              </div>
              
              <button 
                className={`w-full py-2 rounded-lg font-medium transition-colors ${
                  service.available 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                }`}
                disabled={!service.available}
              >
                {service.available ? 'Book Now' : 'Currently Unavailable'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;

