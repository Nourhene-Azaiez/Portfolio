import React from 'react'

interface ProjectProps {
    id?: string;
  }

const Projects: React.FC<ProjectProps> = ({ id }) => {
  return (
    <div id={id} className='dark:bg-zinc-900 bg-zinc-50 dark:bg-grid-white/[0.02] bg-grid-black/[0.05]' >
        Projects
    </div>
  );
}

export default Projects