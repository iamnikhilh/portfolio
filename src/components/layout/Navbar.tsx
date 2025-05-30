import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Code, Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl font-heading font-bold text-white"
            onClick={closeMenu}
          >
            <Code className="text-neon-blue" size={28} />
            <span>Nikhil S H</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
            <NavLink to="/experience" className="nav-link">Experience</NavLink>
            <NavLink to="/skills" className="nav-link">Skills</NavLink>
            <NavLink to="/achievements" className="nav-link">Achievements</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-background-light border-t border-gray-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-3">
          <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
          <NavLink to="/projects" className="nav-link" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/experience" className="nav-link" onClick={closeMenu}>Experience</NavLink>
          <NavLink to="/skills" className="nav-link" onClick={closeMenu}>Skills</NavLink>
          <NavLink to="/achievements" className="nav-link" onClick={closeMenu}>Achievements</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;