import React from 'react'
import { ColourfulText } from './ui/colourful-text';
import { ExpandableCardDemo } from './ui/ExpandableCardDemo';

interface ProjectProps {
    id?: string;
  }

const cards = [
  {
    description: "Real-time Weather API, AWS Pipeline, Machine Learning, Data Visualization, AWS SageMaker, Grafana, LLM",
    title: "AWS Real time Air Quality Visualization, prediction and LLM reporting",
    src: "/AWS.png",
    ctaLink: "https://github.com/Nourhene-Azaiez/AWS-Real-time-Air-Quality-Visualization-and-prediction-and-LLM-reporting",
    content: (
      <>
        <p>
          <strong>Overview<br/></strong>
          This project is designed to collect, process, and visualize real-time weather data by leveraging AWS services, OpenWeather API, and machine learning tools. The pipeline automates data retrieval, cloud storage, processing for analytics, and provides real-time visualization and predictive analysis.
        </p>

        <p><strong className="mt-4">Features</strong></p>
        <ul className="list-disc list-inside">
          <li>Real-time data ingestion using OpenWeather API and AWS EC2</li>
          <li>Data streaming and processing with Amazon Kinesis and AWS Lambda</li>
          <li>Data transformation and cataloging using AWS Glue and Athena</li>
          <li>Interactive dashboards for visualization in Grafana</li>
          <li>Predictive analysis with AWS SageMaker machine learning models</li>
          <li>LLM integration for report generation and deeper insights</li>
          <li>Automated pipeline for scalable and efficient data management</li>
        </ul>
      </>
    ),
  },
  {
    description: "Real-Time Flight Data Pipeline, Dashboard, Kafka, Spark, Elasticsearch, Kibana, Docker, GitHub Actions, Azure",
    title: "Real-Time Flight Data Pipeline and Dashboard",
    src: "/p2m.png",
    ctaLink: "https://github.com/Nourhene-Azaiez/Real-Time-flight-into-data-pipeline",
    content: (
      <>
        <p>
          <strong>Overview<br/></strong>
          This project is a real-time data pipeline and dashboard solution designed to process and visualize air traffic data dynamically. It retrieves data from the Airlabs API, processes it through a Kafka-Spark pipeline, and visualizes insights on a Kibana dashboard. The system is deployed using Docker and automated via GitHub Actions for continuous integration, hosted on Azure for scalability and reliability.
        </p>

        <p><strong className="mt-4">Features</strong></p>
        <ul className="list-disc list-inside">
          <li>Real-time data ingestion using Kafka from Airlabs API</li>
          <li>Data processing and analysis with Apache Spark</li>
          <li>Visualization of insights on Kibana dashboards</li>
          <li>Dockerized environment for modular and scalable architecture</li>
          <li>Automated deployment using GitHub Actions</li>
          <li>Hosted on Azure for cloud scalability</li>
          <li>Interactive and customizable dashboards with filters for detailed analysis</li>
        </ul>
      </>
    ),
  },
  {
    description: "Will be Soon Available",
    title: "Other Work",
    src: "/dev.jpg",
    ctaLink: "https://github.com/Nourhene-Azaiez/",
    content: (
      <>
        <p>
          <strong>Overview<br/></strong>
          Work in Progress
        </p>
      </>
    ),
  },
  
];

const Projects: React.FC<ProjectProps> = ({ id }) => {
  return (
    <div id={id} className='dark:bg-zinc-900 bg-zinc-50 dark:bg-grid-white/[0.02] bg-grid-black/[0.05] pb-14' >
      <div className="flex flex-col px-0 sm:px-14 lg:px-18 text-center items-center justify-center">
        <p className="font-bold text-2xl mx-8 dark:text-white pt-7 mb-1"><ColourfulText text="Personal Projects" /></p>
        <p className="font-extrabold text-center text-4xl mt-2 mx-8 dark:text-white">Turning ideas into reality, one project at a time.</p>
        <p className="font-normal text-sm mx-8 dark:text-white mb-10 mt-7">
          Discover the projects I've created and worked on independently, showcasing my passion for innovation, problem-solving, and continuous learning.
        </p>
      </div>
      <ExpandableCardDemo cards={cards} />
    </div>
  );
}

export default Projects