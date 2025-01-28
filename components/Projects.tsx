import React from 'react'
import { ColourfulText } from './ui/colourful-text';
import { ExpandableCardDemo } from './ui/ExpandableCardDemo';

interface ProjectProps {
    id?: string;
  }

const cards = [
  {
    description: "Keywords",
    title: "Interactive Portfolio",
    src: "/me.png",
    ctaLink: "https://github.com/your-username/portfolio",
    content: (
      <>
        <p>
          <strong>Overview<br/></strong>
          This project is a dynamic and responsive portfolio designed to showcase
          my technical expertise and creativity. It features smooth animations,
          user-friendly navigation, and optimized performance across devices.
        </p>
  
        <p><strong className="mt-4">Features</strong></p>
        <ul className="list-disc list-inside">
          <li>Interactive and animated transitions using Framer Motion</li>
          <li>Fully responsive design for all screen sizes</li>
          <li>Built with React and TypeScript for scalability and maintainability</li>
          <li>Fast-loading images with lazy loading and optimized assets</li>
          <li>Dark mode support for better user experience</li>
        </ul>
      </>
    ),
  },
  {
    description: "Keywords",
    title: "Interactive",
    src: "/me.png",
    ctaLink: "https://github.com/your-username/portfolio",
    content: (
      <>
        <p>
          <strong>Overview<br/></strong>
          This project is a dynamic and responsive portfolio designed to showcase
          my technical expertise and creativity. It features smooth animations,
          user-friendly navigation, and optimized performance across devices.
        </p>
  
        <p><strong className="mt-4">Features</strong></p>
        <ul className="list-disc list-inside">
          <li>Interactive and animated transitions using Framer Motion</li>
          <li>Fully responsive design for all screen sizes</li>
          <li>Built with React and TypeScript for scalability and maintainability</li>
          <li>Fast-loading images with lazy loading and optimized assets</li>
          <li>Dark mode support for better user experience</li>
        </ul>
      </>
    ),
  },
  {
    description: "Keywords",
    title: " Portfolio",
    src: "/me.png",
    ctaLink: "https://github.com/your-username/portfolio",
    content: (
      <>
        <p>
          <strong>Overview<br/></strong>
          This project is a dynamic and responsive portfolio designed to showcase
          my technical expertise and creativity. It features smooth animations,
          user-friendly navigation, and optimized performance across devices.
        </p>
  
        <p><strong className="mt-4">Features</strong></p>
        <ul className="list-disc list-inside">
          <li>Interactive and animated transitions using Framer Motion</li>
          <li>Fully responsive design for all screen sizes</li>
          <li>Built with React and TypeScript for scalability and maintainability</li>
          <li>Fast-loading images with lazy loading and optimized assets</li>
          <li>Dark mode support for better user experience</li>
        </ul>
        <ul className="list-disc list-inside">
          <li>Interactive and animated transitions using Framer Motion</li>
          <li>Fully responsive design for all screen sizes</li>
          <li>Built with React and TypeScript for scalability and maintainability</li>
          <li>Fast-loading images with lazy loading and optimized assets</li>
          <li>Dark mode support for better user experience</li>
        </ul>
      </>
    ),
  },
  
];

const Projects: React.FC<ProjectProps> = ({ id }) => {
  return (
    <div id={id} className='dark:bg-zinc-900 bg-zinc-50 dark:bg-grid-white/[0.02] bg-grid-black/[0.05] pb-14' >
      <div className="flex flex-col px-0 sm:px-14 lg:px-18 text-center items-center justify-center">
        <p className="font-bold text-2xl mx-8 dark:text-white pt-7 mb-1"><ColourfulText text="Personal Projects" /></p>
        <p className="font-extrabold text-center text-4xl mt-2 mx-8 dark:text-white">Turning ideas into reality, one project at a time.</p>
        <p className="font-normal text-sm mx-8 dark:text-white mb-10 mt-7">
          Discover the projects I've created and worked on independently, showcasing my passion for innovation, problem-solving, and continuous learning.
        </p>
      </div>
      <ExpandableCardDemo cards={cards} />
    </div>
  );
}

export default Projects