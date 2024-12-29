
// import React, { useState } from 'react';
// import { useShop } from '../context/ShopContext';

// const AdminDashboard = () => {
//   const { 
//     isOpen, 
//     setIsOpen, 
//     waitingCustomers, 
//     setWaitingCustomers, 
//     estimatedWaitTime, 
//     setEstimatedWaitTime,
//     services,
//     setServices,
//     offers,
//     setOffers,
//     shopNote,
//     setShopNote
//   } = useShop();

//   const [newOffer, setNewOffer] = useState({ name: '', service: '', validTill: '' });
//   const [newService, setNewService] = useState({ name: '', price: '', discount: '', available: true, image: '' });

//   const toggleShopStatus = () => {
//     setIsOpen(!isOpen);
//   };

//   const addCustomer = () => {
//     setWaitingCustomers(waitingCustomers + 1);
//     setEstimatedWaitTime(estimatedWaitTime + 20);
//   };

//   const removeCustomer = () => {
//     if (waitingCustomers > 0) {
//       setWaitingCustomers(waitingCustomers - 1);
//       setEstimatedWaitTime(Math.max(0, estimatedWaitTime - 20));
//     }
//   };

//   const handleAddOffer = (e) => {
//     e.preventDefault();
//     setOffers([...offers, { ...newOffer, id: offers.length + 1 }]);
//     setNewOffer({ name: '', service: '', validTill: '' });
//   };

//   const handleRemoveOffer = (id) => {
//     setOffers(offers.filter(offer => offer.id !== id));
//   };

//   const handleAddService = (e) => {
//     e.preventDefault();
//     setServices([...services, { ...newService, id: services.length + 1 }]);
//     setNewService({ name: '', price: '', discount: '', available: true, image: '' });
//   };

//   const handleRemoveService = (id) => {
//     setServices(services.filter(service => service.id !== id));
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Shop Status</h2>
//           <p className="mb-4">Current Status: {isOpen ? 'Open' : 'Closed'}</p>
//           <button
//             onClick={toggleShopStatus}
//             className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
//           >
//             {isOpen ? 'Close Shop' : 'Open Shop'}
//           </button>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Waiting List</h2>
//           <p className="mb-2">Customers Waiting: {waitingCustomers}</p>
//           <p className="mb-4">Estimated Wait Time: {estimatedWaitTime} minutes</p>
//           <div className="flex space-x-4">
//             <button
//               onClick={addCustomer}
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Add Customer
//             </button>
//             <button
//               onClick={removeCustomer}
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Remove Customer
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Shop Note</h2>
//         <textarea
//           value={shopNote}
//           onChange={(e) => setShopNote(e.target.value)}
//           className="w-full p-2 border rounded"
//           rows="3"
//           placeholder="Enter a note for customers..."
//         ></textarea>
//         <button
//           onClick={() => alert('Note saved')}
//           className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Save Note
//         </button>
//       </div>

//       <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Manage Offers</h2>
//         <form onSubmit={handleAddOffer} className="mb-4">
//           <input
//             type="text"
//             placeholder="Offer Name"
//             value={newOffer.name}
//             onChange={(e) => setNewOffer({...newOffer, name: e.target.value})}
//             className="mr-2 p-2 border rounded"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Service"
//             value={newOffer.service}
//             onChange={(e) => setNewOffer({...newOffer, service: e.target.value})}
//             className="mr-2 p-2 border rounded"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Valid Till"
//             value={newOffer.validTill}
//             onChange={(e) => setNewOffer({...newOffer, validTill: e.target.value})}
//             className="mr-2 p-2 border rounded"
//             required
//           />
//           <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//             Add Offer
//           </button>
//         </form>
//         <ul>
//           {offers.map((offer) => (
//             <li key={offer.id} className="flex justify-between items-center mb-2">
//               <span>{offer.name} - {offer.service} (Valid till: {offer.validTill})</span>
//               <button
//                 onClick={() => handleRemoveOffer(offer.id)}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Manage Services</h2>
//         <form onSubmit={handleAddService} className="mb-4">
//           <input
//             type="text"
//             placeholder="Service Name"
//             value={newService.name}
//             onChange={(e) => setNewService({...newService, name: e.target.value})}
//             className="mr-2 p-2 border rounded"
//             required
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             value={newService.price}
//             onChange={(e) => setNewService({...newService, price: e.target.value})}
//             className="mr-2 p-2 border rounded"
//             required
//           />
//           <input
//             type="number"
//             placeholder="Discount (%)"
//             value={newService.discount}
//             onChange={(e) => setNewService({...newService, discount: e.target.value})}
//             className="mr-2 p-2 border rounded"
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             value={newService.image}
//             onChange={(e) => setNewService({...newService, image: e.target.value})}
//             className="mr-2 p-2 border rounded"
//             required
//           />
//           <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//             Add Service
//           </button>
//         </form>
//         <ul>
//           {services.map((service) => (
//             <li key={service.id} className="flex justify-between items-center mb-2">
//               <span>{service.name} - ${service.price} {service.discount && `(${service.discount}% off)`}</span>
//               <button
//                 onClick={() => handleRemoveService(service.id)}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';

const AdminDashboard = () => {
  const { 
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
    setGalleryImages
  } = useShop();

  const [newOffer, setNewOffer] = useState({ name: '', service: '', validTill: '' });
  const [newService, setNewService] = useState({ name: '', price: '', discount: '', available: true, image: '' });
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [newImage, setNewImage] = useState({ url: '', description: '' });

  const toggleShopStatus = () => {
    setIsOpen(!isOpen);
  };

  const addCustomer = () => {
    setWaitingCustomers(waitingCustomers + 1);
    setEstimatedWaitTime(estimatedWaitTime + 20);
  };

  const removeCustomer = () => {
    if (waitingCustomers > 0) {
      setWaitingCustomers(waitingCustomers - 1);
      setEstimatedWaitTime(Math.max(0, estimatedWaitTime - 20));
    }
  };

  const handleAddOffer = (e) => {
    e.preventDefault();
    setOffers([...offers, { ...newOffer, id: offers.length + 1 }]);
    setNewOffer({ name: '', service: '', validTill: '' });
  };

  const handleRemoveOffer = (id) => {
    setOffers(offers.filter(offer => offer.id !== id));
  };

  const handleAddService = (e) => {
    e.preventDefault();
    setServices([...services, { ...newService, id: services.length + 1 }]);
    setNewService({ name: '', price: '', discount: '', available: true, image: '' });
  };

  const handleRemoveService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
    setNewReview({ name: '', rating: 5, comment: '' });
  };

  const handleRemoveReview = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    setGalleryImages([...galleryImages, { ...newImage, id: galleryImages.length + 1 }]);
    setNewImage({ url: '', description: '' });
  };

  const handleRemoveImage = (id) => {
    setGalleryImages(galleryImages.filter(image => image.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Admin Dashboard
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4">Shop Status</h2>
          <p className="mb-4">Current Status: {isOpen ? 'Open' : 'Closed'}</p>
          <button
            onClick={toggleShopStatus}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded hover:from-purple-600 hover:to-pink-600 transition duration-300"
          >
            {isOpen ? 'Close Shop' : 'Open Shop'}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4">Waiting List</h2>
          <p className="mb-2">Customers Waiting: {waitingCustomers}</p>
          <p className="mb-4">Estimated Wait Time: {estimatedWaitTime} minutes</p>
          <div className="flex space-x-4">
            <button
              onClick={addCustomer}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Add Customer
            </button>
            <button
              onClick={removeCustomer}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Remove Customer
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Shop Note</h2>
        <textarea
          value={shopNote}
          onChange={(e) => setShopNote(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="3"
          placeholder="Enter a note for customers..."
        ></textarea>
        <button
          onClick={() => alert('Note saved')}
          className="mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded hover:from-purple-600 hover:to-pink-600 transition duration-300"
        >
          Save Note
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Manage Offers</h2>
        <form onSubmit={handleAddOffer} className="mb-4">
          <input
            type="text"
            placeholder="Offer Name"
            value={newOffer.name}
            onChange={(e) => setNewOffer({...newOffer, name: e.target.value})}
            className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            placeholder="Service"
            value={newOffer.service}
            onChange={(e) => setNewOffer({...newOffer, service: e.target.value})}
            className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            placeholder="Valid Till"
            value={newOffer.validTill}
            onChange={(e) => setNewOffer({...newOffer, validTill: e.target.value})}
            className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded hover:from-purple-600 hover:to-pink-600 transition duration-300">
            Add Offer
          </button>
        </form>
        <ul>
          {offers.map((offer) => (
            <li key={offer.id} className="flex justify-between items-center mb-2">
              <span>{offer.name} - {offer.service} (Valid till: {offer.validTill})</span>
              <button
                onClick={() => handleRemoveOffer(offer.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded transition duration-300"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-8 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Manage Services</h2>
        <form onSubmit={handleAddService} className="mb-4">
          <input
            type="text"
            placeholder="Service Name"
            value={newService.name}
            onChange={(e) => setNewService({...newService, name: e.target.value})}
            className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={newService.price}
            onChange={(e) => setNewService({...newService, price: e.target.value})}
            className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="number"
            placeholder="Discount (%)"
            value={newService.discount}
            onChange={(e) => setNewService({...newService, discount: e.target.value})}
            className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newService.image}
            onChange={(e) => setNewService({...newService, image: e.target.value})}
            className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded hover:from-purple-600 hover:to-pink-600 transition duration-300">
            Add Service
          </button>
        </form>
        <ul>
          {services.map((service) => (
            <li key={service.id} className="flex justify-between items-center mb-2">
              <span>{service.name} - ${service.price} {service.discount && `(${service.discount}% off)`}</span>
              <button
                onClick={() => handleRemoveService(service.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded transition duration-300"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mt-8 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Manage Reviews</h2>
        <form onSubmit={handleAddReview} className="mb-4">
          <input
            type="text"
            placeholder="Customer Name"
            value={newReview.name}
            onChange={(e) => setNewReview({...newReview, name: e.target.value})}
            className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="number"
            placeholder="Rating (1-5)"
            value={newReview.rating}
            onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}
            min="1"
            max="5"
            className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            placeholder="Comment"
            value={newReview.comment}
            onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
            className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded hover:from-purple-600 hover:to-pink-600 transition duration-300">
            Add Review
          </button>
        </form>
        <ul>
          {reviews.map((review) => (
            <li key={review.id} className="flex justify-between items-center mb-2">
              <span>{review.name} - {review.rating}/5 stars: {review.comment}</span>
              <button
                onClick={() => handleRemoveReview(review.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded transition duration-300"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="mt-8 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Manage Gallery</h2>
        <form onSubmit={handleAddImage} className="mb-4">
          <input
            type="text"
            placeholder="Image URL"
            value={newImage.url}
            onChange={(e) => setNewImage({...newImage, url: e.target.value})}
            className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            placeholder="Image Description"
            value={newImage.description}
            onChange={(e) => setNewImage({...newImage, description: e.target.value})}
            className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded hover:from-purple-600 hover:to-pink-600 transition duration-300">
            Add Image
          </button>
        </form>
        <ul>
          {galleryImages.map((image) => (
            <li key={image.id} className="flex justify-between items-center mb-2">
              <span>{image.description}</span>
              <button
                onClick={() => handleRemoveImage(image.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded transition duration-300"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;

