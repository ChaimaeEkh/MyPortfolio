import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import About from './components/About';
//import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const portfolioData = {
    personalInfo: {
      name: 'Chaimae El Khatib',
      title: 'Full Stack Developer',
      location: 'Tetouan, Morocco',
      email: 'chaimaeelkhatib645@gmail.com',
      description: 'Passionate Full Stack Developer crafting innovative web solutions that blend creativity, performance, and user-centric design.',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/chaimae-el-khatib',
        github: 'https://github.com/chaimaekhatib',
        twitter: 'https://twitter.com/chaimaekhatib'
      }
    },
    skills: {
      frontend: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 90 }
      ],
      backend: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Django', level: 70 }
      ],
      databases: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 70 }
      ],
      devops: [
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Git', level: 90 }
      ]
    },
    services: [
      {
        name: 'Web Development',
        icon: 'FaCode',
        description: 'Creating responsive and performant web applications'
      },
      {
        name: 'UI/UX Design',
        icon: 'FaPalette',
        description: 'Designing intuitive and engaging user interfaces'
      }
    ],
    projects: [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with advanced features',
        technologies: ['React', 'Node.js', 'MongoDB'],
        imageUrl: '/projects/ecommerce.jpg',
        githubLink: '#',
        liveLink: '#',
        category: 'Web App'
      },
      {
        id: 2,
        title: 'Social Media Dashboard',
        description: 'Real-time social media analytics dashboard',
        technologies: ['Next.js', 'Tailwind', 'Firebase'],
        imageUrl: '/projects/dashboard.jpg',
        githubLink: '#',
        liveLink: '#',
        category: 'Dashboard'
      }
    ]
  };

  return (
    <PortfolioProvider value={portfolioData}>
      <div 
        className={`
          min-h-screen bg-white dark:bg-dark-900 
          text-gray-900 dark:text-gray-100 
          transition-colors duration-300
        `}
      >
        <NavBar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
        
        <main>
          <HeroSection />
          <About />
          
          <Services />
          <Projects />
          <Journey />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
