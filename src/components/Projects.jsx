import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaExternalLinkAlt, FaGithub, 
  FaReact, FaNodeJs, FaPython, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiDjango, 
  SiMongodb, SiPostgresql 
} from 'react-icons/si';
import { PortfolioContext } from '../context/PortfolioContext';

const ProjectCard = ({ project, onOpenModal }) => {
  const getTechIcon = (tech) => {
    const iconMap = {
      'React': FaReact,
      'TypeScript': SiTypescript,
      'Tailwind CSS': SiTailwindcss,
      'Node.js': FaNodeJs,
      'Python': FaPython,
      'Django': SiDjango,
      'MongoDB': SiMongodb,
      'PostgreSQL': SiPostgresql
    };
    return iconMap[tech] || FaCode;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-dark-700 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => onOpenModal(project)}
            className="bg-primary-600 text-white px-4 py-2 rounded-full flex items-center"
          >
            View Details <FaExternalLinkAlt className="ml-2" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          {project.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        <div className="flex items-center space-x-2 mb-4">
          {project.technologies.map((tech, index) => {
            const TechIcon = getTechIcon(tech);
            return (
              <TechIcon 
                key={index} 
                className="text-primary-500 dark:text-primary-400" 
                title={tech}
              />
            );
          })}
        </div>
        <div className="flex space-x-4">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <FaExternalLinkAlt size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white dark:bg-dark-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full"
          >
            ✕
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4 text-primary-600 dark:text-primary-400">
            {project.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {project.fullDescription}
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-primary-50 dark:bg-dark-600 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full flex items-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-4 py-2 rounded-full flex items-center"
            >
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectCategories = [
    'All',
    'Web Development',
    'Full Stack',
    'AI/ML'
  ];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section 
      id="projects" 
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
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative projects demonstrating my technical expertise
          </p>
        </motion.div>

        {/* Project Categories */}
        <div className="flex justify-center mb-12 space-x-4">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project}
              onOpenModal={setSelectedProject}
            />
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Projects;