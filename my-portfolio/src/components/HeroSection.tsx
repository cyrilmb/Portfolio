'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi2';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-4">
        <div>
          <Image
            className="rounded-full shadow-2xl"
            src="/pink-door.jpeg"
            alt="Portrait of the developer looking happy because he is posing infront of a pink door"
            width={300}
            height={300}
          />
        </div>
        <div>
          <h2 className="font-bold text-2xl mt-6">Welcome!</h2>
          <h1 className="font-bold text-4xl mb-2">My name is Cyril</h1>
          <p className="text-lg mt-4">
            I&#39;m a{' '}
            <span className="font-semibold text-blue-700">
              Full Stack Developer{' '}
            </span>
            living in beautiful Minneapolis, MN.
          </p>
          <p className="text-lg mb-6">
            I love plants and spiders, stories and games, food and friends.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-blue-700 rounded shadow hover:bg-blue-800"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
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
          <HiArrowDown size={35} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
