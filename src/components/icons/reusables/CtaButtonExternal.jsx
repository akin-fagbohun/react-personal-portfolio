import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export const CtaButtonExternal = ({ destination, buttonText }) => {
  const [hover, setHover] = useState(false);

  // const navigate = useNavigate();

  const toggleHover = () => {
    if (hover === hover) setHover(!hover);
  };

  if (!hover) {
    return (
      <a target="_blank" href={destination} rel="noreferrer">
        <button onMouseEnter={() => toggleHover()} className="section-cta">
          {buttonText}
        </button>
      </a>
    );
  }

  if (hover) {
    return (
      <a target="_blank" href={destination} rel="noreferrer">
        <button onMouseLeave={() => toggleHover()} className="section-cta-focus">
          {buttonText}
        </button>
      </a>
    );
  }
};
