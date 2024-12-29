import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, 
  FaServer, FaCode, FaDatabase, FaAws 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiNextdotjs, SiJavascript, 
  SiMongodb, SiPostgresql, SiGit 
} from 'react-icons/si';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'JavaScript', icon: SiJavascript }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Python', icon: FaPython },
      { name: 'Express', icon: FaServer }
    ]
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql }
    ]
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Docker', icon: FaDocker },
      { name: 'AWS', icon: FaAws },
      { name: 'Git', icon: SiGit }
    ]
  }
];

const SkillIcon = ({ icon: Icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center p-4 bg-white dark:bg-dark-700 rounded-lg shadow-md"
  >
    {Icon ? (
      <>
        <Icon className="text-primary-600 dark:text-primary-400 mb-2" size={40} />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
      </>
    ) : (
      <span className="text-sm font-medium text-red-500">
        Icon not found for {name}
      </span>
    )}
  </motion.div>
);

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="py-16 bg-gray-50 dark:bg-dark-900"
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
            Tech Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I leverage to build innovative digital solutions
          </p>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillIcon 
                    key={skillIndex} 
                    icon={skill.icon} 
                    name={skill.name} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;