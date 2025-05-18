import React from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const OffersPage = () => {
  const { offers, services } = useShop();

  // Helper function to find service details for an offer
  const getServiceDetails = (serviceName) => {
    return services.find(service => service.name === serviceName) || {};
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
          Special Offers
        </h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Take advantage of our limited-time deals and promotions.
        </p>
      </motion.div>
      
      {offers.length === 0 ? (
        <div className="bg-neutral-50 rounded-xl p-12 text-center">
          <h3 className="text-xl font-semibold text-neutral-700 mb-2">No Current Offers</h3>
          <p className="text-neutral-600 mb-6">Check back soon for new promotions and discounts!</p>
          <Link 
            to="/services" 
            className="inline-block bg-primary-600 text-white py-2 px-6 rounded-lg hover:bg-primary-700 transition-colors"
          >
            View Our Services
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => {
            const serviceDetails = getServiceDetails(offer.service);
            
            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-card overflow-hidden"
              >
                {serviceDetails.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={serviceDetails.image} 
                      alt={offer.name} 
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute top-4 right-4 bg-secondary-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      Limited Time
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2">
                      Offer
                    </span>
                    <span className="text-neutral-500 text-sm">
                      Valid till {offer.validTill}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">{offer.name}</h3>
                  
                  {serviceDetails.price && (
                    <div className="mb-4">
                      <div className="flex items-center">
                        <span className="text-primary-600 font-bold text-xl">
                          ₹{serviceDetails.discount ? 
                            (serviceDetails.price - (serviceDetails.price * serviceDetails.discount / 100)).toFixed(0) : 
                            serviceDetails.price}
                        </span>
                        {serviceDetails.discount && (
                          <span className="text-neutral-400 line-through ml-2">₹{serviceDetails.price}</span>
                        )}
                      </div>
                      <p className="text-neutral-600 text-sm">
                        For {serviceDetails.name}
                      </p>
                    </div>
                  )}
                  
                  <Link 
                    to="/services" 
                    className="block w-full text-center bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Looking for More?</h2>
        <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
          Visit our salon to discover exclusive in-store promotions and package deals!
        </p>
        <Link 
          to="/" 
          className="inline-block bg-white text-primary-600 border border-primary-200 py-2 px-6 rounded-lg hover:bg-primary-50 transition-colors"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
};

export default OffersPage;

