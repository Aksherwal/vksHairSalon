

// import React, { createContext, useState, useContext } from 'react';
// import { services as initialServices, offers as initialOffers } from '../data/mockData';

// const ShopContext = createContext();

// export const ShopProvider = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [waitingCustomers, setWaitingCustomers] = useState(0);
//   const [estimatedWaitTime, setEstimatedWaitTime] = useState(0);
//   const [services, setServices] = useState(initialServices);
//   const [offers, setOffers] = useState(initialOffers);
//   const [shopNote, setShopNote] = useState('');

//   return (
//     <ShopContext.Provider value={{
//       isOpen,
//       setIsOpen,
//       waitingCustomers,
//       setWaitingCustomers,
//       estimatedWaitTime,
//       setEstimatedWaitTime,
//       services,
//       setServices,
//       offers,
//       setOffers,
//       shopNote,
//       setShopNote,
//     }}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export const useShop = () => {
//   const context = useContext(ShopContext);
//   if (context === undefined) {
//     throw new Error('useShop must be used within a ShopProvider');
//   }
//   return context;
// };

import React, { createContext, useState, useContext } from 'react';
import { services as initialServices, offers as initialOffers, reviews as initialReviews, galleryImages as initialGalleryImages } from '../data/mockData';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [waitingCustomers, setWaitingCustomers] = useState(0);
  const [estimatedWaitTime, setEstimatedWaitTime] = useState(0);
  const [services, setServices] = useState(initialServices);
  const [offers, setOffers] = useState(initialOffers);
  const [shopNote, setShopNote] = useState('');
  const [reviews, setReviews] = useState(initialReviews);
  const [galleryImages, setGalleryImages] = useState(initialGalleryImages);

  return (
    <ShopContext.Provider value={{
      isOpen,
      setIsOpen,
      waitingCustomers,
      setWaitingCustomers,
      estimatedWaitTime,
      setEstimatedWaitTime,
      services,
      setServices,
      offers,
      setOffers,
      shopNote,
      setShopNote,
      reviews,
      setReviews,
      galleryImages,
      setGalleryImages,
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

