
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  let variantStyles = '';
  let sizeStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-gray-900';
      break;
    case 'secondary':
      variantStyles = 'bg-gray-700 text-gray-200 hover:bg-gray-600 focus:ring-gray-500 focus:ring-offset-gray-900';
      break;
    case 'outline':
      variantStyles = 'border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white focus:ring-purple-500 focus:ring-offset-gray-900';
      break;
  }

  switch (size) {
    case 'sm':
      sizeStyles = 'px-3 py-1 text-sm';
      break;
    case 'md':
      sizeStyles = 'px-4 py-2 text-base';
      break;
    case 'lg':
      sizeStyles = 'px-6 py-3 text-lg';
      break;
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
