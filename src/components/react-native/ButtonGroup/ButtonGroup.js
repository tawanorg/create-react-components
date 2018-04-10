import React from 'react';

const ButtonGroup = ({
  children,
}) => {
  return (
    <button>
    {children || 'ButtonGroup Text'}
    </button>
  )
}

export default ButtonGroup;
