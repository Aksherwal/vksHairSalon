import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import OffersPage from './pages/OffersPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import ReviewsPage from './pages/ReviewsPage';
import PhotoGallery from './components/PhotoGallery';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import { ShopProvider } from './context/ShopContext';

const App = () => {
  return (
    <ShopProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
          <Header />
          <AnimatePresence mode="wait">
            <motion.main
              className="flex-grow pt-16" // Added padding-top to account for fixed header
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
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="/cookies" element={<CookiePolicyPage />} />
              </Routes>
            </motion.main>
          </AnimatePresence>
          <Footer />
          <FloatingActionButton />
        </div>
      </Router>
    </ShopProvider>
  );
};

export default App;

