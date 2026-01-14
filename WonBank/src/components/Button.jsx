import React from 'react'

export default function Button({
    variant = 'solid',
    size = 'md',
    fullWidth = false,
    className = '',
    children,
    ...props
  }) {
    const cls = [
      'btn',
      `btn--${variant}`,
      `btn--${size}`,
      fullWidth ? 'btn--full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');
  
    return (
      <button className={cls} {...props}>
        {children}
      </button>
    );
  }
