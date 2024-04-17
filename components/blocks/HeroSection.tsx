import React from 'react'
import { Hero } from './Hero'
import Image from 'next/image'
import { LiaGithubSquare, LiaLinkedin, LiaMailBulkSolid } from 'react-icons/lia'

const HeroSection = () => {
    return (
        <div className='flex mt-14 flex-row flex-wrap md:flex-nowrap w-full justify-items-start px-8 md:px-36 gap-12'>
            <div className='flex items-center justify-center'>
                <Image className='rounded-full shadow-md' height={130} width={130} alt='main' src={"/pp.jpg"} />
            </div>

            <div className='flex flex-col justify-items-start'>
                <Hero />
                <p className='text-xl text-slate-900'>
                    Machine Learning & Deep Learning Aficionado : Python Enthusiast 
                </p>
                <div className='flex flex-nowrap gap-4 mt-4 w-fit pt-1 border-t-2'>
                    <a href="https://linked.com"><LiaLinkedin size={30} /></a>
                    <a href="https://github.com/Hrushikeshhad123?tab=overview&from=2024-04-01&to=2024-04-15"><LiaGithubSquare size={30} /></a>
                    <a href="https://linked.com"><LiaMailBulkSolid size={30} /></a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection