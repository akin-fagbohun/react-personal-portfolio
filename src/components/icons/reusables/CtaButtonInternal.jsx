import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CtaButtonInternal = ({ destination, buttonText }) => {
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
        {buttonText}
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
        {buttonText}
      </button>
    );
  }
};
