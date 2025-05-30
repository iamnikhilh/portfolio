import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card card-hover group"
    >
      <div className="relative overflow-hidden rounded-lg aspect-video mb-5">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i} 
                className="text-xs font-medium py-1 px-2 rounded-full bg-background/80 backdrop-blur-sm text-white"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs font-medium py-1 px-2 rounded-full bg-background/80 backdrop-blur-sm text-white">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-heading font-semibold mb-2 transition-colors group-hover:text-neon-blue">
        {project.title}
      </h3>
      
      <p className="text-gray-400 mb-4 line-clamp-2">
        {project.description}
      </p>
      
      <div className="flex items-center justify-between">
        <Link 
          to={`/projects/${project.id}`}
          className="text-neon-blue hover:text-white transition-colors"
        >
          View details
        </Link>
        
        <div className="flex gap-3">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-purple transition-colors"
              aria-label="GitHub repository"
            >
              <Github size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors"
              aria-label="Live preview"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;