'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from 'react-icons/hi2'

const HeroSection = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const [pause, setPause] = useState(false)

  const handleImageClick = () => {
    setIsFlipped(!isFlipped)
    setTimeout(() => {
      setPause(!pause)
    }, 100)
  }

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center mt-10 mb-5 pt-16 pb-4 md:flex-row md:space-x-6 md:text-left md:pt-12 md:pb-20 md:mt-16">
        <div className="md:w-1/2 md:-mr-0.5 md:mt-2 relative">
          <div
            className="relative inline-block transition-transform duration-1000 transform-style-preserve-3d backface-hidden"
            style={{
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
              transition: 'transform 0.5s',
            }}
            onClick={handleImageClick}
          >
            {pause ? (
              <Image
                className="rounded-3xl shadow-2xl md:mx-3 cursor-pointer top-0 left-0"
                src="/profile-dogs.jpeg"
                alt="Portrait of the developer looking happy because he is trying to take a selfie with his two dogs"
                width={300}
                height={300}
                priority={true}
                // style={{ transform: 'scaleX(-1)' }} // Flip the second image bc it is pre-flipped
              />
            ) : (
              <Image
                className="rounded-full shadow-2xl md:mx-3 cursor-pointer  top-0 left-0 z-10"
                src="/pink-door.jpeg"
                alt="Portrait of the developer looking happy because he is standing in front of a pink door"
                height={300}
                width={300}
                priority={true}
              />
            )}
          </div>
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h2 className="font-bold text-2xl mt-6 md:text-5xl md:mt-0">
            Welcome!
          </h2>
          <span className="inline-flex">
            <p className="font-bold text-2xl py-2 mr-2 md:py-6 md:text-5xl">
              This is
            </p>
            <p className="font-bold text-2xl py-2 mr-1 md:py-6 md:text-5xl text-blue-700">
              Cyril
            </p>
            <p className="font-bold text-2xl py-2 md:py-6 md:text-5xl">,</p>
          </span>
          <p className="text-lg mt-4 md:text-2xl">
            a{' '}
            <span className="font-semibold text-blue-700">
              Full Stack Developer{' '}
            </span>
            living in beautiful Minneapolis, MN.
          </p>
          <p className="text-sm mt-4 mb-8 md:text-lg">
            He loves plants and spiders, stories and games, food and friends.
            And his{' '}
            <span
              className="cursor-pointer underline text-blue-700 hover:text-xl"
              onClick={handleImageClick}
            >
              dogs
            </span>
            , especially.
          </p>
          {/* <p className="text-lg mt-2 mb-6 md:text-2xl"> */}
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-blue-700 rounded shadow cursor-pointer hover:bg-blue-800"
            activeClass="active"
            aria-label="Jump to projects section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            See Projects
          </Link>
          {/* </p> */}
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
  )
}

export default HeroSection
