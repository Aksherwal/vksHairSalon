// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import ServicesPage from './pages/ServicesPage';
// import OffersPage from './pages/OffersPage';
// import AdminLoginPage from './pages/AdminLoginPage';
// import AdminDashboard from './pages/AdminDashboard';
// import { ShopProvider } from './context/ShopContext';

// const App = () => {
//   return (
//     <ShopProvider>
//       <Router>
//         <div className="flex flex-col min-h-screen">
//           <Header />
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/services" element={<ServicesPage />} />
//               <Route path="/offers" element={<OffersPage />} />
//               <Route path="/admin-login" element={<AdminLoginPage />} />
//               <Route path="/admin-dashboard" element={<AdminDashboard />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </ShopProvider>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import OffersPage from './pages/OffersPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import ReviewsPage from './pages/ReviewsPage';
import PhotoGallery from './components/PhotoGallery';
import { ShopProvider } from './context/ShopContext';

const App = () => {
  return (
    <ShopProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
          <Header />
          <AnimatePresence mode="wait">
            <motion.main
              className="flex-grow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/gallery" element={<PhotoGallery />} />
                <Route path="/admin-login" element={<AdminLoginPage />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
              </Routes>
            </motion.main>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ShopProvider>
  );
};

export default App;

