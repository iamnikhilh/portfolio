import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading for smooth page transitions
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
            <div className="w-12 h-12 rounded-full border-4 border-neon-blue border-t-transparent animate-spin"></div>
          </div>
        ) : (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;