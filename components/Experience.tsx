import React from 'react'

interface ExperienceProps {
    id?: string;
  }

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <div id={id} className='dark:bg-zinc-900 bg-zinc-50 dark:bg-grid-white/[0.02] bg-grid-black/[0.05]' >
        Experience
    </div>
  );
}

export default Experience