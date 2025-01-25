import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'

const Hero = () => {
  return (
    <div>
        <div>
        <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <p className="bg-clip-text text-white drop-shadow-2xl">
            Gradients X Animations
            </p>
        </div>
        </BackgroundGradientAnimation>
        </div>
    </div>
  )
}

export default Hero