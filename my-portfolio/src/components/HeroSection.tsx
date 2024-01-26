import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home">
      <div>
        <div>
          <Image
            src="/pink-door.jpeg"
            alt="Portrait of the developer looking happy because he is posing infront of a pink door"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
