
import React from 'react';

// Common props for both button and link variants
interface BaseButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string; // className is a common prop
}

// Props for when the component renders as a button
interface ButtonAsButtonProps extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  asLink?: false;
  href?: never; // Ensure href is not passed when not a link
  target?: never; // Ensure target is not passed when not a link
}

// Props for when the component renders as a link
interface ButtonAsLinkProps extends BaseButtonProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asLink: true; // Must be true for a link
  href: string; // href is required for a link
  target?: string;
}

// The final ButtonProps type is a discriminated union
type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  asLink,
  href,
  target,
  className = '',
  ...restProps
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-[#E95420] text-white hover:bg-orange-700 focus:ring-orange-500', // Ubuntu Orange
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (asLink) {
    // When asLink is true, TypeScript knows it's ButtonAsLinkProps, so href is guaranteed.
    return (
      <a href={href} target={target} className={allStyles} {...(restProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  // When asLink is false or undefined, TypeScript knows it's ButtonAsButtonProps.
  return (
    <button className={allStyles} {...(restProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;