import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import SkillCard from '../components/skills/SkillCard';
import { skillCategories } from '../data/skills';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <PageTransition>
      <div className="container section">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="What I bring to the table"
          align="center"
          className="max-w-xl mx-auto"
        />
        
        <div className="flex justify-center items-center mb-12">
          <motion.div 
            className="flex items-center justify-center p-4 bg-background-light rounded-xl border border-gray-800 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="p-3 rounded-full bg-neon-blue/10 text-neon-blue mr-3">
              <Rocket size={24} />
            </span>
            <p className="text-gray-300">
              My technical toolkit is constantly evolving as I learn and adapt to new technologies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.name} 
              category={category} 
              index={index}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;