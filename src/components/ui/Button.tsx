import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  download?: boolean;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon,
  iconPosition = 'left',
  download,
  target,
  rel,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-neon-blue text-background hover:bg-opacity-80 hover:shadow-lg hover:shadow-neon-blue/20',
    secondary: 'bg-neon-purple text-white hover:bg-opacity-80 hover:shadow-lg hover:shadow-neon-purple/20',
    accent: 'bg-neon-pink text-white hover:bg-opacity-80 hover:shadow-lg hover:shadow-neon-pink/20',
    outline: 'bg-transparent border-2 border-neon-blue text-white hover:bg-neon-blue/10',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2 gap-1.5',
    md: 'px-6 py-3 gap-2',
    lg: 'text-lg px-8 py-4 gap-2.5',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </>
  );

  const buttonMotion = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        download={download}
        target={target}
        rel={rel}
        {...buttonMotion}
      >
        {content}
      </motion.a>
    );
  }

  if (to) {
    return (
      <motion.div {...buttonMotion}>
        <Link to={to} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...buttonMotion}
    >
      {content}
    </motion.button>
  );
};

export default Button;