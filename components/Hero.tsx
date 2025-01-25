import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { AuroraBackground } from './ui/aurora-background'

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
          <TextGenerateEffect className="font-medium" words={'Hi there!'} />
          <p className="font-bold dark:text-white">I’m Azaiez Nourhene, an aspiring ICT Engineering Student.</p>
          <p className="font-bold dark:text-white">Passionate about innovation and creating impactful solutions.</p>
          <TextGenerateEffect className="font-medium" words={'Discover my journey and projects!'} />
          <p className="font-light text-sm dark:text-white pt-7">Download my Resume below</p>   
               
        </div>
        </AuroraBackground>
        </div>
    </div>
  )
}

export default Hero