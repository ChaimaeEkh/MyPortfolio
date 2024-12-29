import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { PortfolioContext } from '../context/PortfolioContext';

const HeroSection = () => {
  const { personalInfo } = useContext(PortfolioContext);

  const socialLinks = [
    { icon: FaLinkedin, url: personalInfo.socialLinks.linkedin },
    { icon: FaGithub, url: personalInfo.socialLinks.github },
    { icon: FaTwitter, url: personalInfo.socialLinks.twitter }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-dark-900"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary-600 dark:text-primary-400">
            Hi, I'm {personalInfo.fullName}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Passionate web developer crafting innovative digital solutions with cutting-edge technologies.
          </p>
          
          <div className="flex space-x-4 justify-center md:justify-start">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
              >
                <Icon size={32} />
              </motion.a>
            ))}
          </div>

          <div className="mt-8 flex space-x-4 justify-center md:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-full hover:bg-primary-50 transition-colors"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary-600 dark:border-primary-400">
            <img 
              src="/profile.jpg" 
              alt={personalInfo.fullName}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;