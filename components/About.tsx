import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { CardSpotlight } from './ui/card-spotlight';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { ColourfulText } from './ui/colourful-text';


interface AboutProps {
  id?: string;
}

const line1 = [
  
  {
    logo: "/mysql.png", // Replace with an actual logo URL
    name: "MySql Database",
  },
  {
    logo: "/elastic.png", // Replace with an actual logo URL
    name: "Elastic Products",
  },
  {
    logo: "/Grafana.png", // Replace with an actual logo URL
    name: "Grafana",
  },
  {
    logo: "/docker.webp", // Replace with an actual logo URL
    name: "Docker",
  },
  {
    logo: "/github.png", // Replace with an actual logo URL
    name: "Github",
  },
];

const line2 = [
  {
    logo: "/kafka.png", // Replace with an actual logo URL
    name: "Apache Kafka",
  },
  {
    logo: "/spark.png", // Replace with an actual logo URL
    name: "Apache Spark",
  },
  {
    logo: "/airflow.png", // Replace with an actual logo URL
    name: "Apache Airflow",
  },
  {
    logo: "/fluentd.png", // Replace with an actual logo URL
    name: "FluentD",
  },
];

const line3 = [
  {
    logo: "/aws1.jpg", // Replace with an actual logo URL
    name: "Amazon Kinesis Data Stream",
  },
  {
    logo: "/aws2.png", // Replace with an actual logo URL
    name: "AWS Lambda",
  },
  {
    logo: "/aws3.png", // Replace with an actual logo URL
    name: "Amazon Glue",
  },
  {
    logo: "/aws4.png", // Replace with an actual logo URL
    name: "Amazon EC2",
  },
  {
    logo: "/aws5.png", // Replace with an actual logo URL
    name: "Amazon S3",
  },
];


const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <div id={id} className='dark:bg-zinc-900 bg-zinc-50 dark:bg-grid-white/[0.02] bg-grid-black/[0.05]' >
      <div className="flex flex-col px-0 sm:px-14 lg:px-18 text-center items-center justify-center">
      <p className="font-bold text-md mx-8 dark:text-white pt-7 mb-3"><ColourfulText text="About Me" /></p>
        <p className="font-extrabold text-center text-4xl mt-2 mx-8 dark:text-white">Take a Glimpse Into My World</p>
        <p className="font-normal text-sm mx-8 dark:text-white pt-7 mb-3">
          I’m a motivated and driven engineering student passionate about data engineering, real-time data processing, and Generative AI while leveraging Devops tools 🎓. My journey combines strong theoretical knowledge with hands-on experience 💻, enabling me to design scalable data pipelines and optimize cloud architectures for high-demand environments 🌐. With a passion for cloud deployment, system optimization, and building resilient infrastructures, I focus on leveraging cutting-edge technologies to create impactful solutions 🔐. I thrive on solving complex technical challenges, ensuring systems are efficient, scalable, and secure. I aim to push the boundaries of technology in today’s fast-paced digital landscape 🚀.
        </p>
      </div>
      <BentoGrid className="mt-10 grid-cols-1 md:grid-cols-3 gap-4">
        <BentoGridItem className="col-span-1 md:col-span-1 p-0 ">
          <CardSpotlight className="h-full text-neutral-800 dark:text-neutral-200">
            <p className="relative z-20 font-sans font-bold ">
              My Approach
            </p>
            <div className=" mt-1 mb-7 relative z-20 text-xs">
            I believe in combining strong work ethics, effective collaboration, and strategic thinking to deliver impactful results.
            </div>
            <ul className="relative z-20 font-sans text-xs space-y-2 pl-3 mb-3">
              <li className="flex items-center">
                <span className="text-violet-500 mr-2">✔</span>
                <strong>Adaptability</strong>
              </li>
              <li className="flex items-center">
                <span className="text-violet-500 mr-2">✔</span>
                <strong>Collaboration, Team work and Communication</strong>
              </li>
              <li className="flex items-center">
                <span className="text-violet-500 mr-2">✔</span>
                <strong>Attention to Detail and Precision</strong>
              </li>
              <li className="flex items-center">
                <span className="text-violet-500 mr-2">✔</span>
                <strong>Proactive Thinking</strong>
              </li>
              <li className="flex items-center">
                <span className="text-violet-500 mr-2">✔</span>
                <strong>Continuous Learning and Growth</strong>
              </li>
              <li className="flex items-center">
                <span className="text-violet-500 mr-2">✔</span>
                <strong>Time Management</strong>
              </li>
            </ul>
          </CardSpotlight>
        </BentoGridItem>
        <BentoGridItem title="Tech Stack" description="Explore the tools and technologies I use to build efficient, scalable, and secure solutions." className="col-span-1 md:col-span-2">
          <InfiniteMovingCards
          items={line1}
          direction="right"
          speed="fast"
        />
        <InfiniteMovingCards
          items={line2}
          direction="left"
          speed="fast"
        />
        <InfiniteMovingCards
          items={line3}
          direction="right"
          speed="fast"
        />
        </BentoGridItem>

        <BentoGridItem
          title="Studies"
          description="Optimized cloud architecture for scalable solutions, Developed real-time data pipelines"
          icon={<i className="fas fa-trophy"></i>}
          className="col-span-1 md:col-span-2"
        />
        <BentoGridItem
          title="Current Work Status"
          description="AWS Certified Solutions Architect, Google Cloud Professional Data Engineer"
          icon={<i className="fas fa-certificate"></i>}
          className="col-span-1 md:col-span-1"
        />
      </BentoGrid>
    </div>
  );
}

export default About;
