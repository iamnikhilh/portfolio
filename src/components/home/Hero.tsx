import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Github } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(10,10,50,0.8)_0%,transparent_60%)]"></div>
<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_100%,rgba(30,30,30,0.8)_0%,transparent_80%)]"></div>


      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4">
                <span className="block">Hi, I'm</span>
                <span className="text-white text-glow">Nikhil S H</span>
                <span className="block mt-2">👋</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 h-12">
                <TypeAnimation
                  sequence={[
                    'Coder',
                    1500,
                    'Developer',
                    1500,
                    'Problem Solver',
                    1500,
                    'Tech Enthusiast',
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </div>

            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              I build exceptional digital experiences that are fast, accessible, 
              and designed with best practices. Let's create something amazing together.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                to="/projects"
                variant="primary"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                View Projects
              </Button>
              <Button 
                href="resume.pdf"
                variant="outline"
                icon={<Download size={20} />}
                iconPosition="left"
                download
              >
                Download Resume
              </Button>
              <Button 
                href="https://github.com/iamnikhilh"
                variant="secondary"
                icon={<Github size={20} />}
                iconPosition="left"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-blue animate-float">
                <img 
                  src="imgs\3.jpg" 
                  alt="Nikhil" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-neon-purple opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-neon-blue opacity-20 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;