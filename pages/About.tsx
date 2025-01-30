import React from 'react';
import Image from 'next/image'
import { BentoGrid, BentoGridItem } from './components/bento-grid';
import { CardSpotlight } from './components/card-spotlight';
import { InfiniteMovingCards } from './components/infinite-moving-cards';
import { ColourfulText } from './components/colourful-text';
import { BackgroundLines } from './components/background-lines';


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
      <p className="font-bold text-2xl mx-8 dark:text-white pt-7 mb-3"><ColourfulText text="About Me" /></p>
        <p className="font-extrabold text-center text-4xl mt-2 mx-8 dark:text-white">Take a Glimpse Into My World</p>
        <p className="font-normal text-sm mx-12 dark:text-white pt-7 mb-3">
          I’m a motivated and driven engineering student passionate about data engineering, real-time data processing, and Generative AI while leveraging Devops tools 🎓. My journey combines strong theoretical knowledge with hands-on experience 💻, enabling me to design scalable data pipelines and optimize cloud architectures for high-demand environments 🌐. With a passion for cloud deployment, system optimization, and building resilient infrastructures, I focus on leveraging cutting-edge technologies to create impactful solutions 🔐. I thrive on solving complex technical challenges, ensuring systems are efficient, scalable, and secure. I aim to push the boundaries of technology in today’s fast-paced digital landscape 🚀.
        </p>
      </div>
      <BentoGrid className="mt-10 grid-cols-1 md:grid-cols-3 gap-4">
        <BentoGridItem className="col-span-1 md:col-span-1 p-0 ">
          <CardSpotlight className="h-full text-neutral-800 dark:text-neutral-200">
            <p className="relative z-20 font-sans font-bold ">
            🚀 My Approach
            </p>
            <div className=" mt-1 mb-7 relative z-20 text-xs">
            I believe in combining strong work ethics, effective collaboration, and strategic thinking to deliver impactful results.
            </div>
            <ul className="relative z-20 font-sans text-xs space-y-2 pl-3 mb-3">
              <li className="flex items-center">
                <span className=" mr-2">✔</span>
                <strong>Adaptability</strong>
              </li>
              <li className="flex items-center">
                <span className=" mr-2">✔</span>
                <strong>Collaboration, Team work and Communication</strong>
              </li>
              <li className="flex items-center">
                <span className=" mr-2">✔</span>
                <strong>Attention to Detail and Precision</strong>
              </li>
              <li className="flex items-center">
                <span className=" mr-2">✔</span>
                <strong>Proactive Thinking</strong>
              </li>
              <li className="flex items-center">
                <span className=" mr-2">✔</span>
                <strong>Continuous Learning and Growth</strong>
              </li>
              <li className="flex items-center">
                <span className=" mr-2">✔</span>
                <strong>Time Management</strong>
              </li>
            </ul>
          </CardSpotlight>
        </BentoGridItem>
        <BentoGridItem title="💻 Tech Stack" description="Explore the tools and technologies I use to build efficient, scalable, and secure solutions." className="col-span-1 md:col-span-2">
          <InfiniteMovingCards
          items={line1}
          direction="right"
          speed="normal"
          className='mt-10'
        />
        <InfiniteMovingCards
          items={line2}
          direction="left"
          speed="normal"
        />
        <InfiniteMovingCards
          items={line3}
          direction="right"
          speed="normal"
        />
        </BentoGridItem>

        <BentoGridItem
          title="📚 My Stydies" description="A journey through foundational and advanced concepts in engineering, with a focus on cloud architecture, data systems, and innovative technologies." className="col-span-1 md:col-span-2">
          <div className='flex flex-col md:flex-row md:space-x-10 pt-5'>
            <div className="relative pl-12 border-l-2 mb-4 border-gray-700 group transform transition-transform duration-300 hover:scale-105">
              <div className=" absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2">
                <i className=" text-2xl text-white"></i>
              </div>
              <p className=" text-zinc-800 text-sm bg-zinc-300 rounded-full w-fit py-1 px-2">2020 - 2022</p>
              <h5 className="text-black dark:text-white text-lg font-semibold">
                Preparatory Cycle
                <span className="block text-black dark:text-white text-sm">
                  Preparatory Institute for Engineering in Tunis
                </span>
              </h5>
              <ul className="relative z-20 font-sans text-xs space-y-2 my-3">
                <li className="flex items-center">
                  <span className=" mr-2">•</span>
                  <strong>Mathematics</strong>
                </li>
                <li className="flex items-center">
                  <span className=" mr-2">•</span>
                  <strong>Computer Science</strong>
                </li>
                <li className="flex items-center">
                  <span className=" mr-2">•</span>
                  <strong>Physics</strong>
                </li>
              </ul>
            </div>
            <div className="relative pl-12 border-l-2 mb-4 border-gray-700 group transform transition-transform duration-300 hover:scale-105">
              <div className=" absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2">
                <i className=" text-2xl text-white"></i>
              </div>
              <p className=" text-zinc-800 text-sm bg-zinc-300 rounded-full w-fit py-1 px-2">2022 - Present</p>
              <h5 className="text-black dark:text-white text-lg font-semibold">
                ICT Engineering
                <span className="block text-black dark:text-white text-sm">
                  Higher School of Communication of Tunis
                </span>
              </h5>
              <ul className="relative z-20 font-sans text-xs space-y-2 my-3">
                <li className="flex items-center">
                  <span className=" mr-2">•</span>
                  <strong>Big Data, Database Management & BI</strong>
                </li>
                <li className="flex items-center">
                  <span className=" mr-2">•</span>
                  <strong>Cloud Computing & System Monitoring</strong>
                </li>
                <li className="flex items-center">
                  <span className=" mr-2">•</span>
                  <strong>Management, Innovation & Fintech</strong>
                </li>
              </ul>
            </div>
          </div>
        </BentoGridItem>
        <BentoGridItem title="🤝 Current Work Status" description="Currently pursuing an End-of-Study Internship and open to networking and learning opportunities" className="col-span-1 md:col-span-1">
          <BackgroundLines className='flex flex-col justify-center items-center' svgOptions={{ duration: 5 }}>
            <div className="mt-4">
              <Image
                src="/avatar.png" // Replace with your image path
                alt="Availability Status"
                width={150}
                height={150}
                className="sm:h-[150px] h-[120px]  object-cover mx-auto" // Adjust the size and styling
              />
            </div>
            <div className='rounded-xl w-fit bg-zinc-800 dark:bg-zinc-100 text-white dark:text-black py-1 px-2 flex flex-row items-center space-x-3'>
              <div className="bg-green-500 size-2.5 rounded-full"></div>
              <div className="sm:text-sm text-xs font-medium">
                  Available for new projects
              </div>
            </div>
          </BackgroundLines>
        </BentoGridItem>
      </BentoGrid>
    </div>
  );
}

export default About;
