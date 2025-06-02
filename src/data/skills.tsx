import { SkillCategory } from '../types';
import { 
  Monitor, 
  ServerIcon, 
  Database, 
  Cloud, 
  Hammer, 
  Brain 
} from 'lucide-react';
import React from 'react';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: <Brain size={24} className="text-gray-400" />,
    skills: [
      'Java',
      'Python',
      'C',
      'JavaScript'
    ]
  },
  {
    name: 'Frontend',
    icon: <Monitor size={24} className="text-neon-blue" />,
    skills: [
      'React.js',
      'Next.js',
      'HTML',
      'CSS',
      'JavaScript'
    ]
  },
  {
    name: 'Backend',
    icon: <ServerIcon size={24} className="text-neon-purple" />,
    skills: [
      'Spring Boot',
      'Flask',
      'Node.js',
      'Express.js'
    ]
  },
  {
    name: 'Database',
    icon: <Database size={24} className="text-neon-pink" />,
    skills: [
      'MongoDB',
      'MySQL',
      'SQLite'
    ]
  },
  {
    name: 'DevOps',
    icon: <Cloud size={24} className="text-green-500" />,
    skills: [
      'Git',
      'GitHub Actions',
      'Docker',
      'AWS',
      'Vercel',
      'Netlify',
      'CI/CD',
      'Linux'
    ]
  },
  {
    name: 'Tools',
    icon: <Hammer size={24} className="text-yellow-500" />,
    skills: [
      'VS Code',
      'Figma',
      'Postman',
      'Eclipse',
      'PyCharm',
      'Vite',
      'npm/yarn'
    ]
  },
  {
    name: 'Other',
    icon: <Brain size={24} className="text-gray-400" />,
    skills: [
      'OpenCV',
      'Tensor Flow',
      'Responsive Design',
      'Web Accessibility'
    ]
  }
];
