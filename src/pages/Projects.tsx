import React, { useState } from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();
  
  const filteredProjects = filter
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  return (
    <PageTransition>
      <div className="container section">
        <SectionTitle 
          title="My Projects" 
          subtitle="Recent work"
          align="center"
          className="max-w-xl mx-auto"
        />
        
        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              filter === null 
                ? 'bg-neon-blue text-background font-medium' 
                : 'bg-background-light text-gray-400 hover:text-white'
            }`}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === tag 
                  ? 'bg-neon-blue text-background font-medium' 
                  : 'bg-background-light text-gray-400 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No projects found with the selected filter.</p>
            <button
              onClick={() => setFilter(null)}
              className="mt-4 text-neon-blue hover:underline"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Projects;