import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="container min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-neon-blue text-glow mb-6">404</h1>
          
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-gray-400 text-lg max-w-lg mx-auto mb-12">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              to="/"
              variant="primary"
              icon={<Home size={20} />}
              iconPosition="left"
            >
              Back to Home
            </Button>
            
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              icon={<ArrowLeft size={20} />}
              iconPosition="left"
            >
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default NotFound;