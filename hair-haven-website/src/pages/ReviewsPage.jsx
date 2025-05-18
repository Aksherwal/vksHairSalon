import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const ReviewsPage = () => {
  const { reviews, setReviews } = useShop();
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newReview.name.trim() || !newReview.comment.trim()) {
      setFormError('Please fill in all fields');
      return;
    }
    
    setReviews([...reviews, { 
      ...newReview, 
      id: reviews.length + 1,
      date: new Date().toLocaleDateString()
    }]);
    
    setNewReview({ name: '', rating: 5, comment: '' });
    setFormError('');
  };

  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
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
          Customer Reviews
        </h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          See what our customers have to say about their experience at Hair Haven.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6 text-neutral-800">Recent Reviews</h2>
          
          {reviews.length === 0 ? (
            <div className="bg-neutral-50 rounded-xl p-8 text-center">
              <p className="text-neutral-600">No reviews yet. Be the first to leave a review!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-soft p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800">{review.name}</h3>
                      <p className="text-neutral-500 text-sm">{review.date || 'Recent'}</p>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18}
                          fill={i < review.rating ? "currentColor" : "none"}
                          strokeWidth={i < review.rating ? 0 : 2}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-neutral-600">{review.comment}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-soft p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 text-neutral-800">Leave a Review</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Rating
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleRatingChange(rating)}
                      className="focus:outline-none"
                    >
                      <Star 
                        size={24}
                        className="text-yellow-400"
                        fill={rating <= newReview.rating ? "currentColor" : "none"}
                        strokeWidth={rating <= newReview.rating ? 0 : 2}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="comment" className="block text-sm font-medium text-neutral-700 mb-1">
                  Your Review
                </label>
                <textarea
                  id="comment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  rows="4"
                  placeholder="Share your experience with us"
                ></textarea>
              </div>
              
              {formError && (
                <div className="mb-4 text-red-500 text-sm">{formError}</div>
              )}
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Submit Review
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;

