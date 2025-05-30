import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Experience } from '../../types';

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index, isLast }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-5 md:left-1/2 top-12 bottom-0 w-px bg-gray-700 -ml-px z-0"></div>
      )}
      
      {/* Content */}
      <motion.div 
        className={`relative md:w-1/2 ${isEven ? 'md:pl-12 md:pr-0' : 'md:pr-12 md:pl-0'} pl-12 mb-12 md:mb-0 z-10`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="card card-hover overflow-hidden">
          {/* Company logo */}
          <div className="mb-4 flex items-center">
            <div className="w-12 h-12 rounded-lg bg-background-light border border-gray-700 flex items-center justify-center mr-4">
              {experience.logo ? (
                <img 
                  src={experience.logo} 
                  alt={experience.company} 
                  className="w-8 h-8 object-contain"
                />
              ) : (
                <div className="w-8 h-8 bg-neon-blue/20 rounded-full"></div>
              )}
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg">{experience.position}</h3>
              <p className="text-neon-blue">{experience.company}</p>
            </div>
          </div>

          {/* Duration and location */}
          <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4 gap-4">
            <div className="flex items-center gap-1.5">
              <Calendar size={16} className="text-neon-purple" />
              <span>{experience.startDate} - {experience.endDate || 'Present'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={16} className="text-neon-pink" />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mt-4">
            <ul className="space-y-2">
              {experience.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-neon-blue mr-2">•</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          {experience.technologies && (
            <div className="mt-4 pt-4 border-t border-gray-800">
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-medium py-1 px-2 rounded-full bg-background text-white border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
      
      {/* Timeline marker */}
      <div className="absolute left-0 md:left-1/2 top-0 flex items-center justify-center -ml-4 md:-ml-3 z-10">
        <motion.div 
          className="w-10 h-10 rounded-full border-4 border-neon-blue bg-background flex items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
        >
          <div className="w-4 h-4 rounded-full bg-neon-blue"></div>
        </motion.div>
      </div>
      
      {/* Date for mobile */}
      <div className="md:hidden text-sm font-medium text-gray-400 absolute left-12 top-1">
        {experience.startDate}
      </div>
      
      {/* Empty space for alternating layout */}
      <div className={`hidden md:block md:w-1/2`}></div>
    </div>
  );
};

export default TimelineItem;