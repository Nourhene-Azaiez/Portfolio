import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { CardSpotlight } from './ui/card-spotlight';


interface AboutProps {
  id?: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <div id={id} className='dark:bg-zinc-900 bg-zinc-50 dark:bg-grid-white/[0.02] bg-grid-black/[0.05]' >
      <div className="flex flex-col px-14 lg:px-18 text-center items-center justify-center">
        <p className="font-extrabold text-4xl mt-4 dark:text-white">About me</p>
        <p className="font-semibold text-sm text-justify last:text-center mx-8 dark:text-white pt-7 mb-3">
          I’m a motivated and driven engineering student passionate about data engineering, real-time data processing, and Generative AI while leveraging Devops tools 🎓. My journey combines strong theoretical knowledge with hands-on experience 💻, enabling me to design scalable data pipelines and optimize cloud architectures for high-demand environments 🌐. With a passion for cloud deployment, system optimization, and building resilient infrastructures, I focus on leveraging cutting-edge technologies like Kafka, Spark, and AWS to create impactful solutions 🔐. I thrive on solving complex technical challenges, from real-time data processing to log management, ensuring systems are efficient, scalable, and secure. Driven by the mission to enhance system performance and deliver innovative solutions, I aim to push the boundaries of technology in today’s fast-paced digital landscape 🚀.
        </p>
      </div>
      <BentoGrid className="mt-10 grid-cols-1 md:grid-cols-3 gap-4">
        {/* First row */}
        <BentoGridItem className="col-span-1 md:col-span-1 p-0 ">
          <CardSpotlight className="h-full">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              Authentication steps
            </p>
            <div className="text-neutral-200 mt-4 relative z-20">
              Follow these steps to secure your account
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              Ensuring your account is properly secured helps protect your personal
              information and data.
            </p>
          </CardSpotlight>
        </BentoGridItem>
        <BentoGridItem
          title="Tech Stack"
          description="Kafka, Spark, AWS, Docker, Kubernetes"
          icon={<i className="fab fa-cloud"></i>}
          className="col-span-1 md:col-span-2"
        />

        {/* Second row (inverse layout) */}
        <BentoGridItem
          title="Studies"
          description="Optimized cloud architecture for scalable solutions, Developed real-time data pipelines"
          icon={<i className="fas fa-trophy"></i>}
          className="col-span-1 md:col-span-2"
        />
        <BentoGridItem
          title="Certifications"
          description="AWS Certified Solutions Architect, Google Cloud Professional Data Engineer"
          icon={<i className="fas fa-certificate"></i>}
          className="col-span-1 md:col-span-1"
        />
      </BentoGrid>
    </div>
  );
}

export default About;
