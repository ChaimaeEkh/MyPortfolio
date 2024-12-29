import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaGraduationCap, FaAward } from 'react-icons/fa';
import { PortfolioContext } from '../context/PortfolioContext';

const About = () => {
  const { personalInfo } = useContext(PortfolioContext);

  const aboutSections = [
    {
      icon: FaCode,
      title: 'Professional Passion',
      description: 'As a dedicated Full Stack Web Developer, I transform complex challenges into elegant, efficient digital solutions.'
    },
    {
      icon: FaLaptopCode,
      title: 'Technical Expertise',
      description: 'Proficient in modern web technologies, with a focus on creating responsive, performant, and user-centric applications.'
    },
    {
      icon: FaGraduationCap,
      title: 'Continuous Learning',
      description: 'Committed to staying at the forefront of technological innovation, constantly expanding my skill set and knowledge.'
    },
    {
      icon: FaAward,
      title: 'Problem Solving',
      description: 'Analytical thinker with a strategic approach to developing innovative solutions that drive business success.'
    }
  ];

  return (
    <section 
      id="about" 
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hi, I'm {personalInfo.fullName}, a passionate web developer based in {personalInfo.location} 
            with a strong commitment to creating innovative and impactful digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/about-image.jpg" 
                alt={personalInfo.fullName}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* About Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {aboutSections.map(({ icon: Icon, title, description }, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-dark-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Icon 
                    className="mr-4 text-primary-600 dark:text-primary-400" 
                    size={40} 
                  />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Personal Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-8 text-center"
        >
          {[
            { label: 'Years of Experience', value: '3+' },
            { label: 'Completed Projects', value: '20+' },
            { label: 'Technologies Mastered', value: '15+' },
            { label: 'Client Satisfaction', value: '100%' }
          ].map(({ label, value }, index) => (
            <div 
              key={index}
              className="bg-primary-50 dark:bg-dark-700 p-6 rounded-lg"
            >
              <h4 className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {value}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;