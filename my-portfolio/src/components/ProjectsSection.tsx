import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'Haiku-for-You',
    description:
      'At the juncture of tech-enhanced creativity, this mobile app generates an original haiku for a user to edit, save and publish on a public forum.',
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
  return <div></div>;
};

export default ProjectsSection;
