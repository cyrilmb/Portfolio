import React from 'react';
import SlideLeft from './SlideLeft';

const skills = [
  { skill: 'HTML5' },
  { skill: 'CSS' },
  { skill: 'Javascript' },
  { skill: 'React.js' },
  { skill: 'Redux-Saga' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'GitHub' },
  { skill: 'Node.js' },
  { skill: 'Express' },
  { skill: 'Axios' },
  { skill: 'Ajax' },
  { skill: 'RESTful APIs' },
  { skill: 'PostgreSQL' },
  { skill: 'Postico 2' },
  { skill: 'Postman' },
  { skill: 'Material UI' },
  { skill: 'HTML5 Canvas' },
  { skill: 'Figma' },
  { skill: 'jQuery' },
  { skill: 'GoLang' },
  { skill: 'AWS' },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Nice to meet you!
          <hr className="w-9 h-1 mx-auto my-4 bg-blue-600 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-x-10 md:space-y-0">
          <div className="md:w-1/2">
            <h1 className="test-center text-2xl font-bold mb-6 md:text-left">
              A little about me:
            </h1>
            <p>
              {' '}
              My name is Cyril Malle-Barlow, I'm a{' '}
              <span className="font-bold">{'persistently curious'}</span>,
              <span className="font-bold">{' creatively minded'}</span>, and
              <span className="font-bold">{' team-oriented'}</span> full stack
              software developer.
            </p>
            <br />
            <p>With my backgrounds in healthcare and bartending</p>
            <br />
            <p>Concern for service into tech curiosities</p>
            <br />
            <p>hobbies</p>
          </div>
          <div className="md:w-1/2">
            <h1 className="test-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-start">
              {skills.map((item, i) => {
                return (
                  <SlideLeft>
                    <p
                      key={i}
                      className="bg-blue-400 px-4 py-2 mr-2 mt-2 rounded text-grey-500 font-semibold"
                    >
                      {item.skill}
                    </p>
                  </SlideLeft>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
