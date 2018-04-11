import React from 'react';

const Button = ({
  children,
}) => {
  return (
    <button>
      {children || 'Button Text'}
    </button>
  )
}

export default Button;
