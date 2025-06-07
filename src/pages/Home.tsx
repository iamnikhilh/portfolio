import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import Hero from '../components/home/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  // Featured projects (show only 3 most recent)
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="section bg-background-light">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <SectionTitle 
              title="Featured Projects" 
              subtitle="My recent work"
              className="md:mb-0"
            />
            <Link 
              to="/projects" 
              className="inline-flex items-center text-neon-blue hover:text-white group"
            >
              View All Projects
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Me Section */}
      {/* <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                title="About Me" 
                subtitle="Get to know me"
              />
              
              <p className="text-gray-300 mb-6">
                I'm a passionate software developer with a focus on creating clean, efficient, and user-friendly applications. 
                With expertise in full-stack development, I enjoy bringing ideas to life through code.
              </p>
              
              <p className="text-gray-300 mb-8">
                My journey in tech began during my undergraduate studies at Stanford University, 
                and I've since worked with various technologies and frameworks to build innovative solutions 
                for clients ranging from startups to established companies.
              </p>
              
              <Button 
                to="/about"
                variant="outline"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                More About Me
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/7173046/pexels-photo-7173046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="About Me" 
                  className="w-full max-w-md rounded-xl border-2 border-neon-purple shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-neon-blue opacity-20 animate-pulse"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-neon-purple opacity-20 animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      <section className="section ">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Have a project in mind?
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. I'm currently available for freelance work and exciting collaborative opportunities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                to="/contact"
                variant="primary"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                size="lg"
              >
                Get in Touch
              </Button>
              
              <Button 
                href="https://drive.google.com/file/d/10bc8aBC2vx9xLJNZY7MYQ38h0FiUokcj/view?usp=drive_link"
                variant="outline"
                size="lg"
                download
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;