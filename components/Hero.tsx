import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { AuroraBackground } from './ui/aurora-background'
import DownloadButton from './ui/DownloadButton'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'

const Hero = () => {
  return (
    <div className="h-screen overflow-auto sm:overflow-hidden">
      <AuroraBackground className='pt-80 lg:pt-0 flex justify-center h-[50rem] w-full dark:bg-zinc-900 bg-zinc-50 dark:bg-grid-white/[0.02] bg-grid-black/[0.05] relative items-center'>
        <div className=" m-10 sm:m-20 flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-10 py-10 sm:py-0">
          {/* Image Card with fixed size */}
          <CardContainer className="inter-var mb-10 sm:mb-0">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[250px] sm:w-[300px] h-[350px] sm:h-[400px] rounded-xl border">
              <CardItem translateZ="100" className="w-full h-full">
                <img
                  src="/me.png"
                  height="400"
                  width="300"
                  className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Text Section */}
          <div className="z-50 flex flex-col sm:items-start sm:justify-start font-medium px-4 text-l text-center md:text-xl lg:text-2xl items-center justify-center">
            <TextGenerateEffect className="font-bold font mb-4 dark:text-white" words="Hi, I'm Nourhene Azaiez" />
            <TextGenerateEffect className="font-semibold dark:text-white text-justify" words={'Driven engineering student with hands-on experience in data engineering, cloud technologies, and log management.'} />
            <TextGenerateEffect className="font-semibold dark:text-white text-justify" words={'Passionate about real-time data processing, cloud deployment, and optimizing systems to deliver impactful solutions.'} />
            <p className="font-normal mt-4 dark:text-white">Discover my journey and projects!</p>
            <p className="font-normal text-sm dark:text-white pt-7 mb-3">View my Resume below</p>
            <DownloadButton />
          </div>
        </div>
      </AuroraBackground>
    </div>
    
  )
}

export default Hero
