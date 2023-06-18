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
    <Container>
       <Hero className='w-full md:mt-4 flex flex-col justify-center items-center '>

          <HeroTitle className=' mb-1 animate-fade-in opacity-0 translate-y-[-100px]'> Hello, I&apos;m <br className=''/> <span className='text-transparent bg-clip-text bg-title-gradient '>Luka Brkovic</span>  <br/>
          <span className='hidden '>a self tought web developer</span>
          <span className=''>web developer</span>
          </HeroTitle>

          <HeroSubtitle className='animate-fade-in max-w-[850px] [--animation-delay:400ms] opacity-0 translate-y-[-100px] '>Welcome to  my portfolio, where you&apos;ll find a collection of my  projects that demonstrate my skills and expertise. {"  "}<span className='hidden md:inline-block'>
          I&apos;m always excited to take on new challenges.
          </span>
          </HeroSubtitle>

         <div className='animate-fade-in [--animation-delay:800ms] opacity-0 translate-y-[-100px] self-start '>
          <Link className={cn(buttonClasses({size: "lg"}), "flex gap-4 ")}   href="/">Contact  👋</Link>
          </div>
        <div className='animate-fade-in [--animation-delay:1200ms] opacity-0 translate-y-[-100px] md:mt-12'>
          <HomeImage />
        </div>
        </Hero>
      </Container>
      </div>
  )
}
