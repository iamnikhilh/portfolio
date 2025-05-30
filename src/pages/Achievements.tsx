import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import { Award, ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <PageTransition>
      <div className="container section">
        <SectionTitle 
          title="Achievements" 
          subtitle="Milestones & recognition"
          align="center"
          className="max-w-xl mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover group"
            >
              <div className="relative h-48 mb-5 rounded-lg overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4 p-2 rounded-full bg-neon-purple/80 text-white">
                  <Award size={18} />
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-1 transition-colors group-hover:text-neon-blue">
                    {achievement.title}
                  </h3>
                  <p className="text-neon-purple text-sm mb-3">{achievement.issuer}</p>
                  <p className="text-gray-400 text-sm mb-3">{achievement.date}</p>
                </div>
                
                {achievement.url && (
                  <a 
                    href={achievement.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background border border-gray-800 text-gray-400 hover:text-neon-blue hover:border-neon-blue transition-all"
                    aria-label="View certificate"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <p className="text-gray-300 mt-3 text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Achievements;