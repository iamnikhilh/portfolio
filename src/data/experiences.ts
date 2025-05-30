import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'ecell-head',
    company: 'Rajarajeswari College of Engineering',
    position: 'Technical and Development Head, E-Cell',
    location: 'Bangalore, India',
    startDate: 'Sept 2024',
    endDate: 'Present',
    responsibilities: [
      'Leading the technical team in organizing and managing college-wide entrepreneurship and innovation events',
      'Developed and maintained the official E-Cell website and event portals',
      'Collaborated with cross-functional student teams to execute successful tech-driven campaigns',
      'Mentored juniors on technical tools and development workflows',
      'Implemented automation for event registration and feedback systems'
    ],
    technologies: [
      'React', 'TypeScript', 'Node.js', 'Firebase', 'Git', 'Tailwind CSS'
    ],
    logo: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 'deloitte-cyber-intern',
    company: 'Deloitte',
    position: 'Cybersecurity Virtual Intern (Job Simulation)',
    location: 'Remote',
    startDate: 'May 2025',
    responsibilities: [
      'Completed a cybersecurity job simulation as part of Deloitte’s virtual internship program',
      'Analyzed security threats and proposed mitigation strategies based on real-world scenarios',
      'Assisted in identifying and reporting vulnerabilities in enterprise systems',
      'Prepared executive-level summaries and risk assessments',
      'Learned professional practices around incident response and threat intelligence'
    ],
    technologies: [
      'Cybersecurity Fundamentals', 'Risk Analysis', 'Incident Response', 'Threat Intelligence'
    ],
    logo: 'https://logos-world.net/wp-content/uploads/2021/08/Deloitte-Logo.png'

  }
];

