import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { AuroraBackground } from './ui/aurora-background'
import DownloadButton from './ui/DownloadButton'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import { Link } from 'lucide-react'

const Hero = () => {
  return (
    <div className="h-screen overflow-auto">
      <AuroraBackground className='flex justify-center h-[50rem] w-full dark:bg-zinc-900 bg-zinc-50 dark:bg-grid-white/[0.02] bg-grid-black/[0.05] relative items-center'>
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-10 py-10 sm:py-0">
          {/* Image Card with fixed size */}
          <CardContainer className="inter-var mb-10 sm:mb-0">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[250px] sm:w-[300px] h-[350px] sm:h-[400px] rounded-xl border">
              <CardItem translateZ="100" className="w-full h-full">
                <img
                  src="/me.jpg"
                  height="400"
                  width="300"
                  className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Text Section */}
          <div className="z-50 flex flex-col sm:items-start sm:justify-start font-medium px-4 text-xl text-center md:text-2xl lg:text-4xl items-center justify-center">
            <p className="font-medium text-base mb-4 dark:text-white">Hi there!</p>
            <TextGenerateEffect className="font-bold dark:text-white" words={'I’m Azaiez Nourhene, an aspiring ICT Engineering Student.'} />
            <TextGenerateEffect className="font-bold dark:text-white" words={'Passionate about innovation and creating impactful solutions.'} />
            <p className="font-medium mt-4 text-base dark:text-white">Discover my journey and projects!</p>
            <p className="font-light text-sm dark:text-white pt-7 mb-3">View my Resume below</p>
            <DownloadButton />
          </div>
        </div>
      </AuroraBackground>
    </div>
    
  )
}

export default Hero
