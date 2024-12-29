import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaPalette, FaServer, FaMobileAlt, 
  FaDatabase, FaChartLine 
} from 'react-icons/fa';
import { PortfolioContext } from '../context/PortfolioContext';

const ServiceCard = ({ service }) => {
  const iconMap = {
    'FaCode': FaCode,
    'FaPalette': FaPalette,
    'FaServer': FaServer,
    'FaMobileAlt': FaMobileAlt,
    'FaDatabase': FaDatabase,
    'FaChartLine': FaChartLine
  };

  const ServiceIcon = iconMap[service.icon] || FaCode;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-dark-700 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex items-center mb-4">
        <ServiceIcon 
          className="mr-4 text-primary-600 dark:text-primary-400" 
          size={40} 
        />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {service.name}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {service.description}
      </p>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-primary-600 dark:text-primary-400">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  const { services } = useContext(PortfolioContext);

  const extendedServices = [
    {
      ...services[0],
      features: [
        'Custom Web Application Development',
        'Responsive and Mobile-First Design',
        'Performance Optimization',
        'API Integration',
        'Single Page Applications (SPA)'
      ]
    },
    {
      ...services[1],
      features: [
        'User-Centered Design',
        'Wireframing and Prototyping',
        'Interactive Design Systems',
        'Accessibility Compliance',
        'Design Consulting'
      ]
    },
    {
      name: 'Backend Development',
      icon: 'FaServer',
      description: 'Robust and scalable server-side solutions',
      features: [
        'Microservices Architecture',
        'RESTful API Development',
        'Database Design and Optimization',
        'Authentication and Security',
        'Cloud Deployment'
      ]
    },
    {
      name: 'Performance & Optimization',
      icon: 'FaChartLine',
      description: 'Advanced performance engineering',
      features: [
        'Code Optimization',
        'Load Time Reduction',
        'Scalability Consulting',
        'Performance Audits',
        'Continuous Integration'
      ]
    }
  ];

  return (
    <section 
      id="services" 
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
            My Professional Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Delivering high-quality, innovative solutions tailored to your unique business needs
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {extendedServices.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
            />
          ))}
        </motion.div>

        {/* Service Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary-50 dark:bg-dark-700 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
            My Service Commitment
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I am committed to delivering exceptional quality, innovative solutions, 
            and outstanding customer satisfaction. Each project is approached with 
            dedication, creativity, and a focus on achieving your unique business goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;