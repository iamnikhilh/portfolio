import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Button from '../ui/Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'submitting' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      status: 'submitting',
      message: 'Sending your message...'
    });

    try {
      const response = await fetch('https://formspree.io/f/mwpbeobj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({
          status: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setFormStatus({
          status: 'error',
          message: result?.error || 'Something went wrong. Please try again later.'
        });
      }
    } catch (error) {
      setFormStatus({
        status: 'error',
        message: 'Error sending message. Please try again.'
      });
    }

    setTimeout(() => {
      setFormStatus({
        status: 'idle',
        message: ''
      });
    }, 5000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="card card-hover"
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-background-light border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue transition-all duration-300"
          placeholder="Your name"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-background-light border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue transition-all duration-300"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-gray-300 mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full bg-background-light border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue transition-all duration-300"
        >
          <option value="" disabled>Select a subject</option>
          <option value="Job Opportunity">Job Opportunity</option>
          <option value="Project Inquiry">Project Inquiry</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-background-light border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue transition-all duration-300 resize-none"
          placeholder="Your message here..."
        ></textarea>
      </div>

      {formStatus.status !== 'idle' && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            formStatus.status === 'success'
              ? 'bg-green-500/10 text-green-400'
              : formStatus.status === 'error'
              ? 'bg-red-500/10 text-red-400'
              : 'bg-blue-500/10 text-blue-400'
          }`}
        >
          {formStatus.message}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        icon={<Send size={18} />}
        disabled={formStatus.status === 'submitting'}
        className="w-full"
      >
        {formStatus.status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </motion.form>
  );
};

export default ContactForm;
