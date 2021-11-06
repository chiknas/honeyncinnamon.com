import React from 'react';

export const Logo: React.FunctionComponent = () => {
  const size = '30';
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text x="0" y={size} fontFamily="fantasy" fontSize={size} fill="black">
        AP
      </text>
    </svg>
  );
};
