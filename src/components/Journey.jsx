import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, FaBriefcase, FaCertificate, 
  FaCode, FaLaptop, FaTrophy 
} from 'react-icons/fa';

const JourneyTimeline = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationExperiences = [
    {
      title: 'Master in Computer Science',
      institution: 'National School of Applied Sciences',
      location: 'Morocco',
      period: '2020 - 2022',
      description: 'Specialized in Web Technologies and Software Engineering with a focus on Full Stack Development and Machine Learning.',
      icon: FaGraduationCap
    },
    {
      title: 'Bachelor in Computer Engineering',
      institution: 'University of Technology',
      location: 'Morocco',
      period: '2016 - 2020',
      description: 'Comprehensive program covering software development, network engineering, and advanced programming concepts.',
      icon: FaGraduationCap
    }
  ];

  const professionalExperiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Lead developer for multiple web applications, implementing microservices architecture and cutting-edge technologies.',
      icon: FaBriefcase,
      achievements: [
        'Developed scalable web solutions',
        'Implemented CI/CD pipelines',
        'Mentored junior developers'
      ]
    },
    {
      title: 'Web Development Consultant',
      company: 'Digital Solutions Agency',
      location: 'Morocco',
      period: '2020 - 2022',
      description: 'Provided expert consulting for web development projects, focusing on performance and user experience.',
      icon: FaLaptop,
      achievements: [
        'Optimized existing web applications',
        'Implemented responsive design strategies',
        'Conducted technical workshops'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2021',
      icon: FaCertificate
    },
    {
      title: 'Advanced React Developer Certification',
      issuer: 'React Certification Board',
      date: '2022',
      icon: FaCode
    }
  ];

  const renderExperiences = (experiences) => (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white dark:bg-dark-700 rounded-lg shadow-md p-6 flex items-start"
        >
          <div className="mr-6">
            <exp.icon 
              className="text-primary-600 dark:text-primary-400" 
              size={40} 
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {exp.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {exp.institution || exp.company} | {exp.period}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {exp.description}
            </p>
            {exp.achievements && (
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderCertifications = (certifications) => (
    <div className="grid md:grid-cols-2 gap-6">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white dark:bg-dark-700 rounded-lg shadow-md p-6 flex items-center"
        >
          <div className="mr-6">
            <cert.icon 
              className="text-primary-600 dark:text-primary-400" 
              size={40} 
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {cert.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {cert.issuer} | {cert.date}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section 
      id="journey" 
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
            My Professional Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A chronicle of continuous learning, innovation, and professional growth
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 space-x-4">
          {[
            { id: 'education', label: 'Education', icon: FaGraduationCap },
            { id: 'experience', label: 'Experience', icon: FaBriefcase },
            { id: 'certifications', label: 'Certifications', icon: FaCertificate }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center px-4 py-2 rounded-full transition-colors
                ${activeTab === tab.id 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300'
                }
              `}
            >
              <tab.icon className="mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div>
          {activeTab === 'education' && renderExperiences(educationExperiences)}
          {activeTab === 'experience' && renderExperiences(professionalExperiences)}
          {activeTab === 'certifications' && renderCertifications(certifications)}
        </div>

        {/* Achievement Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary-50 dark:bg-dark-700 rounded-lg p-8 text-center"
        >
          <div className="flex justify-center mb-4">
            <FaTrophy className="text-primary-600 dark:text-primary-400" size={48} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
            Continuous Growth
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My journey is defined by an unwavering commitment to learning, 
            innovation, and pushing the boundaries of technology. Each experience 
            has been a stepping stone towards becoming a more skilled and versatile developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyTimeline;