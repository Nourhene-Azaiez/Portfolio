import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { AuroraBackground } from './ui/aurora-background'
import DownloadButton from './ui/DownloadButton'

const Hero = () => {
  return (
    <div>
        <div>
        {/* <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center font-medium px-4 pointer-events-none text-xl text-center md:text-2xl lg:text-4xl">
          <TextGenerateEffect className="font-medium" words={'Hi there!'} />
          <p className="font-bold dark:text-white">I’m Azaiez Nourhene, an aspiring ICT Engineering Student.</p>
          <p className="font-bold dark:text-white">Passionate about innovation and creating impactful solutions.</p>
          <TextGenerateEffect className="font-medium" words={'Discover my journey and projects!'} />
        </div>
        </BackgroundGradientAnimation> */}
        <AuroraBackground>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center font-medium px-4 pointer-events-none text-xl text-center md:text-2xl lg:text-4xl">
          <p className="font-medium text-base mb-4">Hi there!</p>
          <TextGenerateEffect className="font-bold dark:text-white" words={'I’m Azaiez Nourhene, an aspiring ICT Engineering Student.'} />
          <TextGenerateEffect className="font-bold dark:text-white" words={'Passionate about innovation and creating impactful solutions.'} />
          <p className="font-medium mt-4 text-base">Discover my journey and projects!</p>
          <p className="font-light text-sm dark:text-white pt-7 mb-3">View my Resume below</p>   
          <DownloadButton />     
        </div>
        </AuroraBackground>
        </div>
    </div>
  )
}

export default Hero