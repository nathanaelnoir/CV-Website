import React from 'react';
import { Link } from 'gatsby';

const Button = ({
  children,
  href,
  ...props
}) => {

  if (href) {
  return (
    <a
      className='button--link external-link'
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </ a>
   );
  }

  return (
    <button
      aria-expanded={ props ['aria-expanded'] || null }
      className='button'
      {...props}
    >
      {children}
    </ button >
  );
};

export default Button;
