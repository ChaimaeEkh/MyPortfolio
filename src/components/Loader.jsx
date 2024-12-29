import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark-900 z-50">
      <motion.div
        className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default Loader;