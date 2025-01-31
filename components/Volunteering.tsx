import React from 'react'
import { FocusCards } from './ui/focus-cards';
import { ColourfulText } from './ui/colourful-text';

interface ProjectProps {
    id?: string;
  }


const cards = [
  {
    title: "North African Representative - IndabaX",
    description:"Representing the North African region at IndabaX, aimed at strengthening machine learning and artificial intelligence communities across Africa. The role involves fostering collaboration and knowledge-sharing in the region.",
    src: "/inprog.svg",
  },
  {
    title: "Primary Organizer - IndabaX Tunisia 2023-2024",
    description:"Leading the organization of IndabaX Tunisia, a local chapter of the Deep Learning Indaba. Responsibilities include coordinating teams, meeting collaborators, and facilitating events to enhance the AI and machine learning community in Tunisia.",
    src: "/indabax.JPG",
  },
  {
    title: "Chairwomen - IEEE Sup'Com Student Branch",
    description:"Serving as the Chairwoman of the IEEE Sup'Com Student Branch, guiding the branch in organizing technical events, fostering innovation, and promoting professional development among students in ICT and engineering.",
    src: "/ieee.JPG",
  },
  {
    title: "Booths Manager - Metaverse Tunisian Summit 2.0",
    description:"Managing booths and exhibitors at the Metaverse Tunisian Summit 2.0, a key event focused on exploring the latest advancements in virtual reality, augmented reality, and the metaverse industry.",
    src: "/mts.JPG",
  },
  {
    title: "Sponsorship Manager Code In The Dark - Sup'Com Junior Entreprise",
    description:"Overseeing sponsorship activities for Code In The Dark, organized by Sup'Com Junior Enterprise. Responsibilities include securing partnerships and ensuring the event's success.",
    src: "/citd.jpg",
  },
  {
    title: "Star Program - TSYPX 2022",
    description:"Participating in the TSYPX 2022 Star Program, which empowers children, promotes education in rural areas, and raises awareness about environmental sustainability and space exploration. The program aims to create opportunities for children to engage in STEM projects, promote environmental consciousness, and encourage the exploration of space, all while fostering a sense of responsibility for the planet's future.",
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