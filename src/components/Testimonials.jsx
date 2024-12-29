import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaQuoteLeft, FaLinkedin, 
  FaChevronLeft, FaChevronRight 
} from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-dark-700 rounded-lg shadow-lg p-8 relative"
    >
      <div className="absolute top-4 left-4">
        <FaQuoteLeft 
          className="text-primary-600 dark:text-primary-400 opacity-20" 
          size={40} 
        />
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 text-lg italic mb-6 relative z-10">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-600 dark:border-primary-400">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {testimonial.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
        <a 
          href={testimonial.linkedinProfile} 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-auto text-primary-600 dark:text-primary-400 hover:text-primary-700"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "Chaimae is an exceptional developer with an incredible ability to transform complex requirements into elegant, efficient solutions. Her technical expertise and problem-solving skills are truly remarkable.",
      name: "Ahmed Hassan",
      title: "CTO",
      company: "Tech Innovations Inc.",
      avatar: "/testimonials/ahmed.jpg",
      linkedinProfile: "https://www.linkedin.com/in/ahmed-hassan"
    },
    {
      quote: "Working with Chaimae was a game-changer for our project. Her deep understanding of modern web technologies and commitment to quality exceeded our expectations.",
      name: "Fatima Benali",
      title: "Product Manager",
      company: "Digital Solutions Agency",
      avatar: "/testimonials/fatima.jpg",
      linkedinProfile: "https://www.linkedin.com/in/fatima-benali"
    },
    {
      quote: "Chaimae's ability to deliver complex web applications with clean, maintainable code is truly impressive. She's not just a developer, but a true technology partner.",
      name: "Omar Khaled",
      title: "Senior Engineering Manager",
      company: "Global Tech Solutions",
      avatar: "/testimonials/omar.jpg",
      linkedinProfile: "https://www.linkedin.com/in/omar-khaled"
    }
  ];

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-white dark:bg-dark-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary-600 dark:text-primary-400">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Trusted by industry professionals who value innovation, quality, and excellence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Slider */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <TestimonialCard 
              testimonial={testimonials[currentTestimonial]} 
            />
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="bg-primary-50 dark:bg-dark-700 text-primary-600 dark:text-primary-400 p-3 rounded-full"
            >
              <FaChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="bg-primary-50 dark:bg-dark-700 text-primary-600 dark:text-primary-400 p-3 rounded-full"
            >
              <FaChevronRight size={24} />
            </motion.button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`
                  w-3 h-3 rounded-full transition-colors
                  ${currentTestimonial === index 
                    ? 'bg-primary-600' 
                    : 'bg-gray-300 dark:bg-dark-600'
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary-50 dark:bg-dark-700 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
            Professional Endorsements
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            These testimonials reflect my commitment to delivering high-quality, 
            innovative solutions that exceed client expectations. Each project 
            is an opportunity to demonstrate technical excellence and collaborative spirit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;