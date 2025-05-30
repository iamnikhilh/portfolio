import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} className="text-neon-blue" />,
      label: 'Email',
      value: 'nikhilhalladamani3@gmail.com',
      href: 'mailto:nikhilhalladamani3@gmail.com'
    },
    {
      icon: <Phone size={20} className="text-neon-purple" />,
      label: 'Phone',
      value: '+91 6360151751',
      href: 'tel:+91 6360151751'
    },
    {
      icon: <MapPin size={20} className="text-neon-pink" />,
      label: 'Location',
      value: 'Bengaluru, Karnataka'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com/iamnikhilh'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/nikhil-halladamani'
    },
    {
      icon: <Twitter size={20} />,
      label: 'Twitter',
      href: 'https://x.com/iamnikhilh1'
    }
  ];

  return (
    <PageTransition>
      <div className="container section">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Contact me"
          align="center"
          className="max-w-xl mx-auto"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card h-full">
              <h3 className="text-2xl font-heading font-semibold mb-6">Let's Connect</h3>
              
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using your preferred method below.
              </p>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="p-3 rounded-lg bg-background mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 mb-1">{item.label}</h4>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-white hover:text-neon-blue transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div>
                <h4 className="text-lg font-heading font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((item, index) => (
                    <motion.a 
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-background border border-gray-800 text-gray-400 hover:text-neon-blue hover:border-neon-blue transition-all"
                      aria-label={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      whileHover={{ 
                        y: -5, 
                        boxShadow: '0 5px 15px rgba(0, 255, 255, 0.2)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;