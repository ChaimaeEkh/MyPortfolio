import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, FaEnvelope, FaMapMarkerAlt, 
  FaLinkedin, FaGithub, FaTwitter 
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState({
    message: '',
    type: '',
    isSubmitting: false
  });
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, isSubmitting: true });

    // Fallback if EmailJS is not configured
    if (!process.env.REACT_APP_EMAILJS_SERVICE_ID) {
      setFormStatus({
        message: 'Email service is not configured. Please contact me directly.',
        type: 'error',
        isSubmitting: false
      });
      return;
    }

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      setFormStatus({
        message: 'Your message was sent successfully!',
        type: 'success',
        isSubmitting: false
      });
      formRef.current.reset();
    }, (error) => {
      setFormStatus({
        message: 'Failed to send message. Please try again.',
        type: 'error',
        isSubmitting: false
      });
    });
  };

  return (
    <form 
      ref={formRef}
      onSubmit={sendEmail}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label 
            htmlFor="name" 
            className="block text-gray-700 dark:text-gray-300 mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 
              rounded-lg bg-white dark:bg-dark-700 text-gray-800 dark:text-gray-200
              focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your name"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label 
            htmlFor="email" 
            className="block text-gray-700 dark:text-gray-300 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 
              rounded-lg bg-white dark:bg-dark-700 text-gray-800 dark:text-gray-200
              focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your email"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <label 
          htmlFor="message" 
          className="block text-gray-700 dark:text-gray-300 mb-2"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 
            rounded-lg bg-white dark:bg-dark-700 text-gray-800 dark:text-gray-200
            focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Write your message here..."
        />
      </motion.div>

      {formStatus.message && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            p-4 rounded-lg text-center
            ${formStatus.type === 'success' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
            }
          `}
        >
          {formStatus.message}
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={formStatus.isSubmitting}
        className={`
          w-full flex items-center justify-center px-6 py-3 
          bg-primary-600 text-white rounded-lg 
          hover:bg-primary-700 transition-colors
          ${formStatus.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        {formStatus.isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <FaPaperPlane className="mr-2" /> Send Message
          </>
        )}
      </motion.button>
    </form>
  );
};

const Contact = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/chaimae-el-khatib",
      color: "text-blue-600"
    },
    {
      icon: FaGithub,
      url: "https://github.com/chaimaekhatib",
      color: "text-gray-800 dark:text-white"
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/chaimaekhatib",
      color: "text-blue-400"
    }
  ];

  return (
    <section 
      id="contact" 
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to 
            interesting conversations and opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-50 dark:bg-dark-700 rounded-lg p-8 h-fit"
          >
            <div className="space-y-6">
              <div className="flex items-center">
                <FaEnvelope 
                  className="mr-4 text-primary-600 dark:text-primary-400" 
                  size={30} 
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    chaimae.elkhatib@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <FaMapMarkerAlt 
                  className="mr-4 text-primary-600 dark:text-primary-400" 
                  size={30} 
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Casablanca, Morocco
                  </p>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`
                      ${social.color} hover:opacity-80 
                      transition-transform duration-300
                    `}
                  >
                    <social.icon size={30} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;