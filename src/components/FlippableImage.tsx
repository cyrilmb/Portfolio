import React, { useState } from 'react';

interface FlippableImageProps {
  frontImageSrc: string;
  backImageSrc: string;
}

const FlippableImage: React.FC<FlippableImageProps> = ({
  frontImageSrc,
  backImageSrc,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-40 h-40" onClick={handleClick}>
      <div
        className={`absolute w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <img
          src={frontImageSrc}
          alt="Front Image"
          className="w-full h-full rounded-lg shadow-lg object-cover cursor-pointer transform rotate-y-0"
        />
      </div>
      <div
        className={`absolute w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? '' : 'rotate-y-180'
        }`}
      >
        <img
          src={backImageSrc}
          alt="Back Image"
          className="w-full h-full rounded-lg shadow-lg object-cover cursor-pointer transform rotate-y-180"
        />
      </div>
    </div>
  );
};

export default FlippableImage;
