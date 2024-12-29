// import React, { useState } from 'react';
// import { services } from '../data/mockData';

// const ServicesPage = () => {
//   const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

//   const filteredServices = showOnlyAvailable
//     ? services.filter(service => service.available)
//     : services;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      
//       <div className="mb-4">
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             className="form-checkbox h-5 w-5 text-purple-600"
//             checked={showOnlyAvailable}
//             onChange={() => setShowOnlyAvailable(!showOnlyAvailable)}
//           />
//           <span className="ml-2 text-gray-700">Show only available services</span>
//         </label>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredServices.map((service) => (
//           <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//             <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded-md mb-4" />
//             <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
//             <p className="text-gray-600 mb-2">${service.price}</p>
//             {service.discount && (
//               <p className="text-green-600 font-semibold mb-2">{service.discount}% off</p>
//             )}
//             <p className={`font-semibold ${service.available ? 'text-green-600' : 'text-red-600'}`}>
//               {service.available ? 'Available' : 'Not Available'}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

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
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Our Services
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4"
      >
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-purple-600"
            checked={showOnlyAvailable}
            onChange={() => setShowOnlyAvailable(!showOnlyAvailable)}
          />
          <span className="ml-2 text-gray-700">Show only available services</span>
        </label>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredServices.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-2">${service.price}</p>
            {service.discount && (
              <p className="text-green-600 font-semibold mb-2">{service.discount}% off</p>
            )}
            <p className={`font-semibold ${service.available ? 'text-green-600' : 'text-red-600'}`}>
              {service.available ? 'Available' : 'Not Available'}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesPage;

