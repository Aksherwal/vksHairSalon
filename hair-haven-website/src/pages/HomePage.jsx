import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const HomePage = () => {
  const { isOpen, waitingCustomers, estimatedWaitTime, services, offers, shopNote, reviews } = useShop();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-400 to-pink-500 p-8 rounded-lg mb-8 text-center text-white shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Hair Haven</h1>
        <p className="text-xl mb-4">
          {isOpen ? "We're Open Now!" : "Sorry, we're currently closed."}
        </p>
        <Link
          to="/services"
          className="bg-white text-purple-600 px-6 py-2 rounded-full hover:bg-purple-100 transition duration-300 inline-block"
        >
          View Services
        </Link>
      </motion.div>

      {/* Shop Note */}
      {shopNote && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8 rounded-r-lg shadow"
          role="alert"
        >
          <p className="font-bold">Shop Note:</p>
          <p>{shopNote}</p>
        </motion.div>
      )}

      {/* Waiting List Status */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-lg mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Waiting List Status</h2>
        {isOpen ? (
          <>
            <p className="text-lg">Customers Waiting: {waitingCustomers}</p>
            <p className="text-lg">Estimated Wait Time: {estimatedWaitTime} minutes</p>
          </>
        ) : (
          <p className="text-lg">Shop is currently closed</p>
        )}
      </motion.div>

      {/* Featured Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

         {services.slice(0, 3).map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl relative h-96"
            >
            {/* Full-cover image */}
            <img 
              src={service.image} 
              alt={service.name} 
              className="w-full h-full object-cover"
            />
            
            {/* Blurred overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md p-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold flex-1 min-w-0 truncate">{service.name}</h3>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <p className="text-gray-600">₹{service.price}</p>
              {service.discount && (
                <p className="text-green-600 font-semibold">{service.discount}% off</p>
              )}
            </div>
          </div>
        </div>
          </motion.div>
        ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/services"
            className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition duration-300 inline-block"
          >
            View All Services
          </Link>
        </div>
      </motion.div>

      {/* Today's Offers */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Today's Offers</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg shadow-md flex-shrink-0 w-64 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{offer.name}</h3>
              <p className="text-gray-600 mb-2">Valid till {offer.validTill}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Featured Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.slice(0, 2).map((review) => (
            <motion.div
              key={review.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill={i < review.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="ml-2 text-gray-600">{review.rating}/5</p>
              </div>
              <p className="text-gray-600 mb-2">{review.comment}</p>
              <p className="font-semibold">{review.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/reviews"
            className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition duration-300 inline-block"
          >
            Read More Reviews
          </Link>
        </div>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-2">VK Hair Salon, Tugana, Baghpat</p>
        <p className="mb-2">Phone: 7500667534</p>
        <p className="mb-4">Open Wednesday-Monday, 8 AM - 8 PM (IST)</p>
        {/* Placeholder for Google Maps iframe */}
        <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center">
        <iframe
        title='Map'
        width="100%"
        height="100%"
        src="https://maps.google.com/maps?q=29.264641, 77.196456&output=embed"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;

