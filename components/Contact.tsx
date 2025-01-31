import React from 'react'
import { ColourfulText } from './components/colourful-text';
import { ContactForm } from './components/contactform';

interface ProjectProps {
    id?: string;
  }

const Contact: React.FC<ProjectProps> = ({ id }) => {
  return (
    <div id={id} className='dark:bg-zinc-900 bg-zinc-50 dark:bg-grid-white/[0.02] bg-grid-black/[0.05] pb-20' >
        <div className="flex flex-col px-0 sm:px-14 lg:px-18 text-center items-center justify-center">
          <p className="font-bold text-2xl mx-8 dark:text-white pt-7 mb-1"><ColourfulText text="Contact" /></p>
          <p className="font-extrabold text-center text-4xl mt-2 mx-8 dark:text-white">Strong connections drive meaningful opportunities</p>
          <p className="font-normal text-sm mx-8 dark:text-white mb-10 mt-7">
            Feel free to reach out for collaborations, opportunities, or discussions on technology and innovation.
          </p>
        </div>
        <ContactForm />
    </div>
  );
}

export default Contact