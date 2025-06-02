import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Code, 
  ArrowUp 
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background-light border-t border-gray-800">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and about section */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-heading font-bold text-white mb-4">
              <Code className="text-neon-blue" size={28} />
              <span>Nikhil</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Building beautiful, functional, and user-friendly applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/iamnikhilh" className="text-gray-400 hover:text-neon-blue transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nikhil-halladamani-183a372b3/" className="text-gray-400 hover:text-neon-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              {/* <a href="" className="text-gray-400 hover:text-neon-purple transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a> */}
              <a href="mailto:nikhilhalladamani3@gmail.com" className="text-gray-400 hover:text-neon-pink transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-heading font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-neon-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-neon-blue transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-neon-blue transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-neon-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-heading font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="mailto:nikhilhalladamani3@gmail.com" className="hover:text-neon-blue transition-colors">
                  nikhilhalladamani3@gmail.com
                </a>
              </li>
               <li className="text-gray-400">+91 6360151751</li>
              <li className="text-gray-400">Bengaluru, Karnataka</li>
              <li className="text-gray-400">Available for work</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Nikhil. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="p-2 rounded-full bg-background border border-gray-800 text-gray-400 hover:text-neon-blue hover:border-neon-blue transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;