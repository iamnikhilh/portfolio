import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'left',
  className = ''
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '100%',
      transition: { 
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]} ${className}`}>
      {subtitle && (
        <span className="text-neon-blue font-medium mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{title}</h2>
      <motion.div 
        className={`h-1 bg-neon-blue rounded-full ${align === 'center' ? 'mx-auto' : ''} ${align === 'right' ? 'ml-auto' : ''}`}
        style={{ width: align === 'center' ? '120px' : '80px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={lineVariants}
      />
    </div>
  );
};

export default SectionTitle;