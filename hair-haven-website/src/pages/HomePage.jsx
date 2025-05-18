import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Clock, Users, MessageSquare, Sparkles, MapPin, Phone } from 'lucide-react';

const HomePage = () => {
  const { isOpen, waitingCustomers, estimatedWaitTime, shopNote, services, offers } = useShop();
  const featuredServices = services.slice(0, 3);
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const statusRef = useRef(null);
  const servicesRef = useRef(null);
  const offersRef = useRef(null);
  const ctaRef = useRef(null);
  
  // InView animations
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const statusInView = useInView(statusRef, { once: true, amount: 0.5 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const offersInView = useInView(offersRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });
  
  // Parallax effect for hero section
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="relative overflow-hidden rounded-2xl mb-16"
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-500 opacity-90 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: heroInView ? 0.9 : 0 }}
          transition={{ duration: 1.2 }}
        />
        
        {/* Parallax background */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80')] bg-cover bg-center mix-blend-overlay z-0"
        />

        {/* Add a darker overlay to increase text contrast */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        
        <div className="relative z-10 px-6 py-20 md:py-32 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 drop-shadow-lg">
              Welcome to Hair Haven
            </h1>
            
            {/* Add text shadow and stronger contrast */}
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Where beauty meets expertise. {isOpen ? "We're Open Now!" : "Sorry, we're currently closed."}
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="group bg-white text-primary-600 px-8 py-4 rounded-full font-medium hover:bg-opacity-95 transition duration-300 inline-flex items-center gap-2 shadow-lg"
              >
                Explore Our Services
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Floating elements animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8 rounded-full bg-white/20"
                initial={{ 
                  x: Math.random() * 100 - 50 + "%", 
                  y: Math.random() * 100 + "%",
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: Math.random() * 3 + 2,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Status card */}
      {isOpen && (
        <motion.div 
          ref={statusRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: statusInView ? 1 : 0, y: statusInView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-card p-8 mb-16 max-w-md mx-auto relative overflow-hidden"
        >
          <motion.div 
            className="absolute -right-10 -top-10 w-40 h-40 bg-primary-100 rounded-full opacity-50"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-neutral-800">Current Status</h3>
              <motion.span 
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium flex items-center gap-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
                Open Now
              </motion.span>
            </div>
            
            <div className="space-y-4 text-neutral-600">
              <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                <span className="flex items-center gap-2"><Users size={18} /> Waiting Customers:</span>
                <span className="font-medium text-lg">{waitingCustomers}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                <span className="flex items-center gap-2"><Clock size={18} /> Estimated Wait:</span>
                <span className="font-medium text-lg">{estimatedWaitTime} minutes</span>
              </div>
              
              {shopNote && (
                <motion.div 
                  className="p-3 bg-primary-50 border-l-4 border-primary-400 rounded-r-lg mt-4"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-start gap-2">
                    <MessageSquare size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-neutral-700">{shopNote}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Featured Services */}
      <section ref={servicesRef} className="mb-20">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-display font-bold text-neutral-800 mb-3">Our Services</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">Experience the best hair care services tailored to your unique style and needs.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: servicesInView ? 1 : 0, 
                y: servicesInView ? 0 : 50 
              }}
              transition={{ duration: 0.5, delay: servicesInView ? index * 0.2 : 0 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-card overflow-hidden group"
            >
              <div className="h-56 overflow-hidden relative">
                <motion.img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div 
                  className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <Link 
                    to="/services" 
                    className="bg-white/90 backdrop-blur-sm text-primary-600 py-2 px-4 rounded-lg font-medium hover:bg-white transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">{service.name}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-primary-600 font-bold text-lg">
                      ₹{service.discount > 0 
                        ? (service.price - (service.price * service.discount / 100)).toFixed(0) 
                        : service.price}
                    </span>
                    {service.discount > 0 && (
                      <span className="text-neutral-400 line-through text-sm ml-2">₹{service.price}</span>
                    )}
                  </div>
                  <div className="text-neutral-500 text-sm flex items-center">
                    <Clock size={14} className="mr-1" /> {service.duration} min
                  </div>
                </div>
                <p className="mt-3 text-neutral-600 text-sm line-clamp-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: servicesInView ? 1 : 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors group"
          >
            View All Services 
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="group-hover:translate-x-1 transition-transform"
            >
              <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </section>

      {/* Special Offers */}
      {offers.length > 0 && (
        <section ref={offersRef} className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: offersInView ? 1 : 0, y: offersInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-neutral-800 mb-3">Special Offers</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">Take advantage of our limited-time deals and promotions.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.slice(0, 2).map((offer, index) => {
              // Find the associated service to get its price
              const service = services.find(s => s.name === offer.service);
              const servicePrice = service ? service.price : 0;
              const discountAmount = offer.discount || 0;
              const discountedPrice = servicePrice - (servicePrice * discountAmount / 100);
              
              return (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ 
                    opacity: offersInView ? 1 : 0, 
                    x: offersInView ? 0 : (index % 2 === 0 ? -50 : 50) 
                  }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl overflow-hidden shadow-card relative"
                >
                  <div className="absolute top-4 right-4">
                    <motion.div
                      initial={{ rotate: -15, scale: 0.9 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                      className="bg-primary-600 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <Sparkles size={14} /> {discountAmount}% OFF
                    </motion.div>
                  </div>
                  
                  <div className="p-8 flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full md:w-1/3 aspect-square rounded-lg overflow-hidden">
                      <motion.img 
                        src={service?.image || ''} 
                        alt={offer.name} 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    
                    <div className="w-full md:w-2/3">
                      <h3 className="text-xl font-semibold text-neutral-800 mb-2">{offer.name}</h3>
                      <p className="text-neutral-600 mb-4">{service?.description || 'Limited time offer'}</p>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-primary-600 font-bold text-2xl">
                          ₹{discountedPrice.toFixed(0)}
                        </span>
                        <span className="text-neutral-400 line-through text-lg">₹{servicePrice}</span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-medium py-2 px-6 rounded-full hover:shadow-lg transition-shadow"
                        >
                          Book Now
                        </motion.button>
                        
                        <p className="text-neutral-500 text-sm">
                          Valid until {offer.validTill}
                          {/* If using actual dates:
                          Valid until {offer.validUntil ? new Date(offer.validUntil).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'closing time'}
                          */}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: offersInView ? 1 : 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              to="/offers" 
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors group"
            >
              View All Offers 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="group-hover:translate-x-1 transition-transform"
              >
                <ArrowRight size={18} />
              </motion.span>
            </Link>
          </motion.div>
        </section>
      )}

      {/* Call to Action */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 40 }}
        transition={{ duration: 0.8 }}
        className="text-center relative overflow-hidden rounded-2xl mb-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-500 z-0" />
        
        {/* Animated background patterns */}
        <div className="absolute inset-0 z-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 60 + 20,
                height: Math.random() * 60 + 20,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 px-6 py-16 md:py-20 text-white">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: ctaInView ? 0 : 20, opacity: ctaInView ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            Ready for a New Look?
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: ctaInView ? 0 : 20, opacity: ctaInView ? 1 : 0 }}
            transition={{ delay: 0.4 }}
          >
            Visit us today or call to book your appointment. Walk-ins are always welcome!
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: ctaInView ? 0 : 20, opacity: ctaInView ? 1 : 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a 
              href="tel:+1234567890" 
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition duration-300 inline-block shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.a>
            
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Online
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <section className="mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display font-bold text-neutral-800 mb-3">Find Us</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">Visit our salon or get in touch with us today.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-xl shadow-card overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-neutral-800 mb-2 relative inline-block">
                  Contact Us
                  <span className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
                </h3>
              </div>
              
              <div className="space-y-4 text-neutral-600">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <span>VK Hair Salon, Tugana, Baghpat</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-primary-500 flex-shrink-0" />
                  <a href="tel:7500667534" className="hover:text-primary-600 transition-colors">
                    7500667534
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-primary-500 flex-shrink-0" />
                  <span>Open Wednesday-Monday, 8 AM - 8 PM (IST)</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-medium py-3 px-6 rounded-full hover:shadow-lg transition-shadow inline-flex items-center gap-2"
                >
                  Get Directions
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
            
            <div className="h-80 md:h-auto overflow-hidden relative">
              <iframe
                title="Map"
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?q=29.264641, 77.196456&output=embed"
                style={{ border: 0 }}
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
              
              {/* Optional overlay gradient for better integration */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary-500/10 to-transparent opacity-60"></div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;

