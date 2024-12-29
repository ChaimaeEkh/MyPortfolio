import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, FaGithub, FaTwitter, 
  FaCode, FaEnvelope 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/chaimae-el-khatib",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: FaGithub,
      url: "https://github.com/chaimaekhatib",
      color: "text-gray-800 dark:text-white hover:opacity-80"
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/chaimaekhatib",
      color: "text-blue-400 hover:text-blue-500"
    }
  ];

  const footerNavigation = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" }
      ]
    },
    {
      title: "Professional",
      links: [
        { name: "Services", href: "#services" },
        { name: "Journey", href: "#journey" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" }
      ]
    }
  ];

  return (
    <footer 
      className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <FaCode 
                className="mr-3 text-primary-600 dark:text-primary-400" 
                size={40} 
              />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Chaimae El Khatib
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Passionate Full Stack Developer crafting innovative web solutions 
              that blend creativity, performance, and user-centric design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`
                    ${social.color} 
                    transition-transform duration-300
                  `}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          {footerNavigation.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="
                        text-gray-600 dark:text-gray-400 
                        hover:text-primary-600 dark:hover:text-primary-400 
                        transition-colors
                      "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope 
                  className="mr-3 text-primary-600 dark:text-primary-400" 
                  size={20} 
                />
                <a 
                  href="mailto:chaimae.elkhatib@example.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
                >
                  chaimae.elkhatib@example.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            {currentYear} Chaimae El Khatib. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Designed and Developed with using React and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;