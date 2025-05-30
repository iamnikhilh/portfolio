import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import TimelineItem from '../components/experience/TimelineItem';
import { experiences } from '../data/experiences';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <PageTransition>
      <div className="container section">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey"
          align="center"
          className="max-w-xl mx-auto"
        />

        <div className="flex items-center justify-center mb-10">
          <span className="p-4 rounded-full bg-neon-purple/10 text-neon-purple mr-3">
            <Briefcase size={24} />
          </span>
          <h3 className="text-xl font-heading font-medium">
            {experiences.length}+ years of professional experience
          </h3>
        </div>

        <div className="relative pb-12">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Experience;