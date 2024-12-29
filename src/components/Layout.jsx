import React, { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from './Loader';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-dark-900 transition-colors duration-300">
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loader />}>
          <motion.main 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8"
          >
            {children}
          </motion.main>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
