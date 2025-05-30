import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import { Project } from '../types';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data from an API
    setLoading(true);
    setTimeout(() => {
      const foundProject = projects.find(p => p.id === id);
      setProject(foundProject || null);
      setLoading(false);
    }, 500);
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 rounded-full border-4 border-neon-blue border-t-transparent animate-spin"></div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="container section text-center">
        <h2 className="text-2xl font-heading font-semibold mb-4">Project Not Found</h2>
        <p className="text-gray-400 mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Button to="/projects" variant="primary">
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="container section">
        {/* Back button */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Projects
          </button>
        </div>
        
        {/* Header */}
        <div className="mb-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-1.5">
              <Calendar size={16} className="text-neon-blue" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Tag size={16} className="text-neon-purple" />
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-white">
                    {tag}{i < project.tags.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {project.githubUrl && (
              <Button 
                href={project.githubUrl}
                variant="outline"
                icon={<Github size={20} />}
                iconPosition="left"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </Button>
            )}
            
            {project.liveUrl && (
              <Button 
                href={project.liveUrl}
                variant="primary"
                icon={<ExternalLink size={20} />}
                iconPosition="left"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            )}
          </motion.div>
        </div>
        
        {/* Main image */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h2 className="text-2xl font-heading font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-neon-blue mr-2 mt-1">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Gallery */}
            {project.detailImages && project.detailImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-heading font-semibold mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.detailImages.map((img, i) => (
                    <div 
                      key={i} 
                      className="rounded-lg overflow-hidden border border-gray-800"
                    >
                      <img 
                        src={img} 
                        alt={`${project.title} screenshot ${i + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h2 className="text-xl font-heading font-semibold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-background rounded-full text-sm border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h2 className="text-xl font-heading font-semibold mb-4">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-neon-purple mr-2 mt-1">•</span>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h2 className="text-xl font-heading font-semibold mb-4">Solutions</h2>
              <ul className="space-y-3">
                {project.solutions.map((solution, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-neon-blue mr-2 mt-1">•</span>
                    <span className="text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Next & Previous */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {getAdjacentProject(project.id, 'prev') && (
              <Link 
                to={`/projects/${getAdjacentProject(project.id, 'prev')?.id}`}
                className="card card-hover flex-1 flex items-center"
              >
                <ArrowLeft size={20} className="mr-4 text-neon-blue" />
                <div>
                  <p className="text-sm text-gray-400">Previous Project</p>
                  <h4 className="font-heading font-medium text-white">
                    {getAdjacentProject(project.id, 'prev')?.title}
                  </h4>
                </div>
              </Link>
            )}
            
            {getAdjacentProject(project.id, 'next') && (
              <Link 
                to={`/projects/${getAdjacentProject(project.id, 'next')?.id}`}
                className="card card-hover flex-1 flex items-center justify-end text-right"
              >
                <div>
                  <p className="text-sm text-gray-400">Next Project</p>
                  <h4 className="font-heading font-medium text-white">
                    {getAdjacentProject(project.id, 'next')?.title}
                  </h4>
                </div>
                <ArrowLeft size={20} className="ml-4 text-neon-blue rotate-180" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

// Helper function to get next/prev project
function getAdjacentProject(currentId: string, direction: 'next' | 'prev'): Project | null {
  const currentIndex = projects.findIndex(p => p.id === currentId);
  if (currentIndex === -1) return null;
  
  if (direction === 'next' && currentIndex < projects.length - 1) {
    return projects[currentIndex + 1];
  } else if (direction === 'prev' && currentIndex > 0) {
    return projects[currentIndex - 1];
  }
  
  return null;
}

export default ProjectDetail;