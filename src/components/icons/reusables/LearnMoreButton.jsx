import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LearnMoreButton = ({ destination }) => {
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();

  const toggleHover = () => {
    if (hover === hover) setHover(!hover);
  };

  if (!hover) {
    return (
      <button
        onClick={() => navigate(destination, { replace: true })}
        onMouseEnter={() => toggleHover()}
        className="section-cta"
      >
        Learn more
      </button>
    );
  }

  if (hover) {
    return (
      <button
        onClick={() => navigate(destination, { replace: true })}
        onMouseLeave={() => toggleHover()}
        className="section-cta-focus"
      >
        Learn more
      </button>
    );
  }
};
