import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { CardSpotlight } from './ui/card-spotlight';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';


interface AboutProps {
  id?: string;
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <div id={id} className='dark:bg-zinc-900 bg-zinc-50 dark:bg-grid-white/[0.02] bg-grid-black/[0.05]' >
      <div className="flex flex-col px-0 sm:px-14 lg:px-18 text-justify items-center justify-center">
        <p className="font-extrabold text-4xl mt-4 dark:text-white">About me</p>
        <p className="font-semibold text-sm mx-8 dark:text-white pt-7 mb-3">
          I’m a motivated and driven engineering student passionate about data engineering, real-time data processing, and Generative AI while leveraging Devops tools 🎓. My journey combines strong theoretical knowledge with hands-on experience 💻, enabling me to design scalable data pipelines and optimize cloud architectures for high-demand environments 🌐. With a passion for cloud deployment, system optimization, and building resilient infrastructures, I focus on leveraging cutting-edge technologies like Kafka, Spark, and AWS to create impactful solutions 🔐. I thrive on solving complex technical challenges, from real-time data processing to log management, ensuring systems are efficient, scalable, and secure. Driven by the mission to enhance system performance and deliver innovative solutions, I aim to push the boundaries of technology in today’s fast-paced digital landscape 🚀.
        </p>
      </div>
      <BentoGrid className="mt-10 grid-cols-1 md:grid-cols-3 gap-4">
        {/* First row */}
        <BentoGridItem className="col-span-1 md:col-span-1 p-0 ">
          <CardSpotlight className="h-full text-neutral-200">
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
        <BentoGridItem title="Tech Stack" className="col-span-1 md:col-span-2">
          <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        </BentoGridItem>
        {/* Second row (inverse layout) */}
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
