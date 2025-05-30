import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  detailImages?: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  responsibilities: string[];
  technologies?: string[];
  logo?: string;
}

export interface SkillCategory {
  name: string;
  icon: ReactNode;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  url?: string;
}