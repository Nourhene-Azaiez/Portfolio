import React from 'react'
import { Timeline } from './ui/timeline';
import { ColourfulText } from './ui/colourful-text';

interface ExperienceProps {
    id?: string;
  }

  const data = [
    {
      title: "September 2024-January 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium mb-4">
            Tutored Project - EY Tunisia
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Developed an AI-Powered Custom Code Conversion Tool
          </p>
          <div className="mb-8">
            <div className="grid grid-cols-[auto_1fr] gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div>✅</div>
              <div>Designed and implemented a tool to convert code between programming languages, addressing accessibility and flexibility limitations in existing solutions.</div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div>✅</div>
              <div>Utilized StarCoder2-3B for code conversion and Llama3.2-3B-Instruct for generating code description.</div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div>✅</div>
              <div>Developed a chunking mechanism to divide large codebases into manageable fragments for efficient processing.</div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div>✅</div>
              <div>Integrated HuggingFace Transformers, LangChain, and PyTorch to optimize model usage and GPU acceleration, reducing processing time by 46%.</div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div>✅</div>
              <div>Built a user-friendly interface with Streamlit for seamless input, conversion, and visualization of results.</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "July-August 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium mb-4">
            Internship - Sofrecom Tunisia
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Developed a BI solution for Log management and alerting
          </p>
          <div className="mb-8">
            <div className="grid grid-cols-[auto_1fr] gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div>✅</div>
              <div>Developed an integrated log management solution for interconnected services.</div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div>✅</div>
              <div>Utilized Fluentd for log collection, Elasticsearch for storage, and Kibana for visualization.</div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div>✅</div>
              <div>Enabled efficient monitoring, performance analysis, and real-time insights via dynamic dashboards resulting in a decrease of log analysis time by half and increase of productivity by over 25%.</div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div>✅</div>
              <div>Improved the team’s system visibility, issue diagnosis, and optimization of service interactions.</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "July-August 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium mb-4">
            Internship - Mediatron Laboratory - Sup'Com
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Decentralized Medical Record System: Enhancing Healthcare Data Integration and Patient Privacy
          </p>
          <div className="mb-8">
            <div className="grid grid-cols-[auto_1fr] gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div>✅</div>
              <div>Developed a decentralized solution to address the fragmentation of medical records and health-related data.</div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div>✅</div>
              <div>Combined Self-Sovereign Identities (SSI), Decentralized Identifiers (DID), blockchain, and IPFS to create a secure, patient-controlled data storage system.</div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div>✅</div>
              <div>Conducted extensive research and analysis of existing solutions to understand the problem.</div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div>✅</div>
              <div>Evaluated the system's potential to enhance healthcare data integration, diagnosis accuracy, and overall outcomes.</div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <div id={id} className='dark:bg-zinc-900 bg-zinc-50 dark:bg-grid-white/[0.02] bg-grid-black/[0.05] justify-center items-center' >
        <div className="flex flex-col px-0 sm:px-14 lg:px-18 text-center items-center justify-center">
          <p className="font-bold text-2xl mx-8 dark:text-white pt-7 mb-1"><ColourfulText text="Professional Experience" /></p>
          <p className="font-extrabold text-center text-4xl mt-2 mx-8 dark:text-white">Professional environments foster growth and learning</p>
          <p className="font-normal text-sm mx-8 dark:text-white -mb-10 mt-7">
          Explore my journey through diverse professional environments, where I’ve honed my skills, embraced challenges, and continuously learned to drive impactful results.
          </p>
        </div>
        <Timeline data={data} />
    </div>
  );
}

export default Experience