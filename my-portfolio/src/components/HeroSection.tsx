'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi2';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center mt-10 mb-5 pt-16 pb-4 md:flex-row md:space-x-6 md:text-left md:pt-12 md:pb-20 md:mt-16">
        <div className="md:w-1/2 md:-mr-0.5 md:mt-2 ">
          <Image
            className="rounded-full shadow-2xl md:mx-3 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
            src="/pink-door.jpeg"
            alt="Portrait of the developer looking happy because he is standing in front of a pink door"
            width={300}
            height={300}
            priority={true}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h2 className="font-bold text-2xl mt-6 md:text-5xl md:mt-0">
            Welcome!
          </h2>
          <span className="inline-flex">
            <p className="font-bold text-2xl py-2 mr-2 md:py-6 md:text-5xl">
              This is
            </p>
            <p className="font-bold text-4xl text-blue-700 md:text-7xl md:py-1">
              Cyril
            </p>
            <p className="font-bold text-2xl py-2 mr-2 md:py-6 md:text-5xl">
              ,
            </p>
          </span>
          <p className="text-lg mt-4 md:text-2xl">
            a{' '}
            <span className="font-semibold text-blue-700">
              Full Stack Developer{' '}
            </span>
            living in beautiful Minneapolis, MN.
          </p>
          <p className="text-sm mt-4 mb-8 md:text-lg md:ml-6">
            He loves plants and spiders, stories and games, food and friends.
            And his dogs, especially.
          </p>
          <p className="text-lg mt-2 mb-6 md:text-2xl">
            Jump to see:
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-blue-700 rounded shadow cursor-pointer ml-2 hover:bg-blue-800"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center text-lg pb-10">
        <p>Learn more about me:</p>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
