import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import SlideUp from './SlideUp';

const projects = [
  {
    name: 'Haiku-for-You',
    description:
      'In the quest to relieve burden of creation tech-enhanced creativity, this mobile app generates an original haiku for a user to edit, save and publish on a public forum.',
    image: '/haiku-for-you.png',
    github: 'https://github.com/cyrilmb/Haiku-For-You',
    link: 'coming soon',
  },
  {
    name: 'Baby Know',
    description:
      'Baby Know is a learning management system (LMS) that hosts content for the Baby Know: Bodies, Hearts & Minds program, which provides new parents with a holistic approach to their child’s development. The application is built for three types of users: administrators, students and teachers. The Baby Know program includes information, tools and strategies to create strong parent-child relationships, incorporating developmental milestones and nurturing the emotional well-being of all family members. Parents learn through video lectures, demonstrations, and activities, covering all aspects of development.',
    image: '/baby-know.png',
    github: 'https://github.com/cyrilmb/baby-know',
    link: 'coming soon',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-9 h-1 mx-auto my-4 bg-blue-600 border-0 rounded" />
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, i) => {
          return (
            <div key={i}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt={`Screenshot of the app ${project.name}`}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-12 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
