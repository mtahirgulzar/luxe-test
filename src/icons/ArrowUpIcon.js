import React from 'react';

export const ArrowUpIcon = ({ width = 16, height = 17, stroke = '#0A0A0A', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 17"
    fill="none"
    {...props}
  >
    <path
      d="M4 10.0952L8 6.09521L12 10.0952"
      stroke={stroke}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

