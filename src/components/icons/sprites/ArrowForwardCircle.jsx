import React, { useState } from 'react';

export const ArrowForwardCircle = () => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    if (hover === hover) setHover(!hover);
  };

  if (!hover) {
    return (
      <svg
        onMouseEnter={() => toggleHover()}
        xmlns="http://www.w3.org/2000/svg"
        className="sprite-outline"
        viewBox="0 0 512 512"
      >
        <title>Arrow Forward Circle</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M262.62 336L342 256l-79.38-80M330.97 256H170"
        />
        <path
          d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  }

  if (hover) {
    return (
      <svg
        onMouseLeave={() => toggleHover()}
        xmlns="http://www.w3.org/2000/svg"
        className="sprite-fill"
        viewBox="0 0 512 512"
      >
        <title>Arrow Forward Circle</title>
        <path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-212.65 91.36a16 16 0 01-.09-22.63L303.58 272H170a16 16 0 010-32h133.58l-52.32-52.73A16 16 0 11274 164.73l79.39 80a16 16 0 010 22.54l-79.39 80a16 16 0 01-22.65.09z" />
      </svg>
    );
  }
};
