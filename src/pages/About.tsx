import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { Award, Download } from 'lucide-react';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="container section ">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Image Column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-neon-blue">
                  <img 
                    src="imgs/3.jpg" 
                    alt="Nikhil Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-neon-purple opacity-20 animate-pulse"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-neon-blue opacity-20 animate-pulse"></div>
              </div>
              
              <div className="mt-8">
                <Button 
                  href="resume.pdf"
                  variant="primary"
                  icon={<Download size={20} />}
                  iconPosition="left"
                  className="w-full"
                  download
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading font-semibold mb-4">Who I Am</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm Nikhil, a 3rd-year computer science student focused on building efficient software.
                </p>
                <p>
                  I enjoy working with Java and Spring Boot on the backend, and JavaScript with React on the frontend.
                </p>
                <p>
                  I write clean code and aim to create smooth, user-friendly experiences.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-heading font-semibold mb-4">Education</h3>
              
              {/* Bachelor */}
              <div className="card border-gray-800 mb-6">
                <div className="flex items-center mb-2">
                  <Award className="text-neon-purple mr-2" size={20} />
                  <h4 className="font-heading font-medium">Bachelor of Science in Computer Science</h4>
                </div>
                <p className="text-neon-blue mb-1">Rajarajeswari College of Engineering</p>
                <p className="text-sm text-gray-400">2022 - 2026</p>
                <p className="text-gray-300 mt-1">Grade: 8.8 (Current)</p>
                <p className="mt-3 text-gray-300">
                  Graduating. Specialized in Human-Computer Interaction and Web Technologies. 
                  Completed a senior project on accessible web design that received department recognition.
                </p>
              </div>

              {/* Pre University */}
              <div className="card border-gray-800 mb-6">
                <div className="flex items-center mb-2">
                  <Award className="text-neon-purple mr-2" size={20} />
                  <h4 className="font-heading font-medium">Pre University (Science)</h4>
                </div>
                <p className="text-neon-blue mb-1">KLE's P C Jabin College of Science</p>
                <p className="text-sm text-gray-400">2020 - 2022</p>
                <p className="text-gray-300 mt-1">Score: 88%</p>
                <p className="mt-3 text-gray-300">
                  Focused on Physics, Chemistry, and Mathematics with a strong academic record.
                </p>
              </div>

              {/* Schooling */}
              <div className="card border-gray-800">
                <div className="flex items-center mb-2">
                  <Award className="text-neon-purple mr-2" size={20} />
                  <h4 className="font-heading font-medium">Schooling</h4>
                </div>
                <p className="text-neon-blue mb-1">R N S Vidyaniketan</p>
                <p className="text-sm text-gray-400">2011 - 2020</p>
                <p className="text-gray-300 mt-1">Score: 87.2%</p>
                <p className="mt-3 text-gray-300">
                  Completed high school with distinctions in Science and Mathematics.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-heading font-semibold mb-4">My Approach</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I focus on understanding problems clearly and building practical solutions.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Plan before coding</li>
                  <li>Write clean, readable code</li>
                  <li>Test often and improve continuously</li>
                  <li>Keep up with new technologies</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
