// import React from 'react';
// import { offers } from '../data/mockData';

// const OffersPage = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Current Offers</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {offers.map((offer) => (
//           <div key={offer.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//             <h2 className="text-xl font-semibold mb-2">{offer.name}</h2>
//             <p className="text-gray-600 mb-2">Service: {offer.service}</p>
//             <p className="text-purple-600 font-semibold">Valid till {offer.validTill}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OffersPage;

import React from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';

const OffersPage = () => {
  const { offers } = useShop();

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Current Offers
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {offers.map((offer) => (
          <motion.div
            key={offer.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{offer.name}</h2>
            <p className="text-gray-600 mb-2">Service: {offer.service}</p>
            <p className="text-purple-600 font-semibold">Valid till {offer.validTill}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OffersPage;

