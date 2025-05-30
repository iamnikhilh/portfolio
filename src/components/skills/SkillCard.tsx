import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../../types';

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card card-hover"
    >
      <div className="flex items-center mb-6">
        <span className={`p-3 rounded-lg mr-4 ${getBgColorClass(category.name)}`}>
          {category.icon}
        </span>
        <h3 className="text-xl font-heading font-semibold">{category.name}</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {category.skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`p-3 text-center rounded-lg border border-gray-800 hover:border-${getColorClass(category.name)} hover:bg-${getColorClass(category.name)}/5 transition-all duration-300`}
          >
            <div className="text-sm font-medium">{skill}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Helper functions to get dynamic color classes based on category
function getBgColorClass(category: string): string {
  const colorMap: Record<string, string> = {
    'Frontend': 'bg-neon-blue/10',
    'Backend': 'bg-neon-purple/10',
    'Database': 'bg-neon-pink/10',
    'DevOps': 'bg-green-500/10',
    'Tools': 'bg-yellow-500/10',
    'Other': 'bg-gray-500/10'
  };
  
  return colorMap[category] || 'bg-neon-blue/10';
}

function getColorClass(category: string): string {
  const colorMap: Record<string, string> = {
    'Frontend': 'neon-blue',
    'Backend': 'neon-purple',
    'Database': 'neon-pink',
    'DevOps': 'green-500',
    'Tools': 'yellow-500',
    'Other': 'gray-500'
  };
  
  return colorMap[category] || 'neon-blue';
}

export default SkillCard;