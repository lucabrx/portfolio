import Button, { buttonClasses } from '@/components/Button'
import Container from '@/components/Container'
import  {Hero, HeroSubtitle, HeroTitle } from '@/components/Hero'
import HomeImage from '@/components/HomeImage'
import { cn } from '@/lib/classMerge'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full overflow-hidden '>
    <Container className='pb-[1000px]'>
       <Hero className='w-full md:mt-4 flex flex-col justify-center items-center '>

          <HeroTitle className='mt-3 lg:mt-22 lpc:mt-24 mb-1 animate-fade-in opacity-0 translate-y-[-100px]'>Hey, I'm <span className='text-transparent bg-clip-text bg-title-gradient '>Luka Brkovic</span>  <br/>
          <span className='hidden sms:block'>a self tought web developer</span>
          <span className='sms:hidden'>web developer</span>
          </HeroTitle>

          <HeroSubtitle className='sms:mt-4 animate-fade-in max-w-[850px] [--animation-delay:200ms] opacity-0 translate-y-[-100px]'>Feel free to explore my portfolio, where you'll find a collection of my  projects that demonstrate my skills and expertise. {"  "}<span className='hidden md:inline-block'>
          I'm always excited to take on new challenges.
          </span>
          </HeroSubtitle>

         <div className='animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-100px] mt-4'>
          <Link className={cn(buttonClasses({size: "md"}), "md:hidden flex gap-4")}   href="/">Contact  👋</Link>
          <Link className={cn(buttonClasses({size: "lg"}), "hidden md:flex gap-4 ")}   href="/">Contact  👋</Link>
          </div>
        <div className='animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-100px] mt-4 md:mt-12'>
          <HomeImage />
        </div>
        </Hero>
      </Container>
      </div>
  )
}
