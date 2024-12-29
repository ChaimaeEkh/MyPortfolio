import React, { createContext } from 'react';

export const PortfolioContext = createContext({
  personalInfo: {
    fullName: 'Chaimae El Khatib',
    title: 'Full Stack Web Developer',
    location: 'Morocco',
    email: 'chaimae.elkhatib@example.com',
    phone: '+212 6XXXXXXXX',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/chaimae-el-khatib',
      github: 'https://github.com/chaimae-elkhatib',
      twitter: 'https://twitter.com/chaimae_dev'
    }
  },
  skills: {
    frontend: [
      'React.js', 'Next.js', 'TypeScript', 
      'Tailwind CSS', 'Redux', 'Framer Motion'
    ],
    backend: [
      'Node.js', 'Express', 'Django', 
      'Python', 'MongoDB', 'PostgreSQL'
    ],
    tools: [
      'Git', 'Docker', 'AWS', 
      'Figma', 'Postman', 'CI/CD'
    ]
  },
  projects: [
    {
      name: 'AI-Powered Portfolio Platform',
      category: 'Web Development',
      shortDescription: 'Modern portfolio website with AI-driven features and responsive design',
      fullDescription: 'A cutting-edge portfolio platform built with React and Tailwind CSS, featuring advanced animations, dark mode, and responsive layout.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: '/projects/portfolio.png',
      githubLink: 'https://github.com/chaimae-elkhatib/portfolio',
      liveLink: 'https://chaimae-portfolio.vercel.app'
    },
    {
      name: 'E-Commerce Microservices',
      category: 'Full Stack',
      shortDescription: 'Scalable e-commerce platform with microservices architecture',
      fullDescription: 'A comprehensive e-commerce solution built using microservices, featuring user authentication, product management, and payment integration.',
      technologies: ['Node.js', 'React', 'Docker', 'MongoDB'],
      image: '/projects/ecommerce.png',
      githubLink: 'https://github.com/chaimae-elkhatib/ecommerce-microservices',
      liveLink: 'https://chaimae-ecommerce.vercel.app'
    },
    {
      name: 'Machine Learning Recommendation System',
      category: 'AI/ML',
      shortDescription: 'Personalized movie recommendation engine using collaborative filtering',
      fullDescription: 'An advanced recommendation system that uses machine learning algorithms to provide personalized movie suggestions based on user preferences.',
      technologies: ['Python', 'Django', 'TensorFlow', 'Scikit-learn'],
      image: '/projects/recommender.png',
      githubLink: 'https://github.com/chaimae-elkhatib/ml-recommender',
      liveLink: 'https://chaimae-recommender.herokuapp.com'
    }
  ],
  services: [
    {
      name: 'Web Development',
      description: 'Custom web solutions using modern technologies',
      icon: 'FaCode'
    },
    {
      name: 'UI/UX Design',
      description: 'Intuitive and engaging user interfaces',
      icon: 'FaPalette'
    }
  ]
});

export const PortfolioProvider = ({ children }) => {
  return (
    <PortfolioContext.Provider value={PortfolioContext._currentValue}>
      {children}
    </PortfolioContext.Provider>
  );
};
