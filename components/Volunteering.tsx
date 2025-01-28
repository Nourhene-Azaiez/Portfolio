import React from 'react'
import { FocusCards } from './ui/focus-cards';
import { ColourfulText } from './ui/colourful-text';

interface ProjectProps {
    id?: string;
  }


const cards = [
  {
    title: "North African Representative - IndabaX",
    src: "/inprog.svg",
  },
  {
    title: "Primary Organizer - IndabaX Tunisia 2023-2024",
    src: "/indabax.JPG",
  },
  {
    title: "Chairwomen - IEEE Sup'Com Student Branch",
    src: "/ieee.JPG",
  },
  {
    title: "Booths Manager - Metaverse Tunisian Summit 2.0",
    src: "/mts.JPG",
  },
  {
    title: "Sponsorship Manager Code In The Dark - Sup'Com Junior Entreprise",
    src: "/citd.jpg",
  },
  {
    title: "Star Program - TSYPX 2022",
    src: "/star.jpeg",
  },
];

const Volunteering: React.FC<ProjectProps> = ({ id }) => {
  return (
    <div id={id} className='dark:bg-zinc-900 bg-zinc-50 dark:bg-grid-white/[0.02] bg-grid-black/[0.05] flex flex-col items-center px-8 pb-10' >
        <div className="flex flex-col px-0 sm:px-14 lg:px-18 text-center items-center justify-center">
          <p className="font-bold text-2xl mx-8 dark:text-white pt-7 mb-1"><ColourfulText text="Volunteering" /></p>
          <p className="font-extrabold text-center text-4xl mt-2 mx-8 dark:text-white">Building communities, one connection at a time</p>
          <p className="font-normal text-sm mx-8 dark:text-white mb-10 mt-7">
          Explore how I use my skills and time to support impactful causes and meaningful projects.
          </p>
        </div>
        <FocusCards cards={cards} />
    </div>
  );
}

export default Volunteering