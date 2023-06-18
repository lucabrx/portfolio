import  { buttonClasses } from '@/components/Button'
import Container from '@/components/Container'
import  {Hero, HeroSubtitle, HeroTitle } from '@/components/Hero'
import HomeImage from '@/components/HomeImage'
import { cn } from '@/lib/classMerge'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full overflow-hidden '>
    <Container>
       <Hero className='w-full flex flex-col justify-center items-center mt-4 md:mt-8 lg:mt-12 '>

          <HeroTitle className=' mb-1 animate-fade-in opacity-0 translate-y-[-100px]'> Hello, I&apos;m <br className='md:hidden'/> <span className='text-transparent bg-clip-text bg-title-gradient '>Luka Brkovic,</span>  <br/>
          <span className='hidden md:inline-block'>a self tought web developer</span>
          <span className='ml-1 md:hidden'>web developer</span>
          </HeroTitle>

          <HeroSubtitle className='animate-fade-in max-w-[850px] [--animation-delay:400ms] opacity-0 translate-y-[-100px] ml-2 mt-2 md:mt-4'>Welcome to  my portfolio, where you&apos;ll find a collection of my  projects that demonstrate my skills and expertise. {"  "}<span className='hidden md:inline-block'>
          I&apos;m always excited to take on new challenges.
          </span>
          </HeroSubtitle>

         <div className='animate-fade-in [--animation-delay:800ms] opacity-0 translate-y-[-100px] mt-4 self-start sms:self-center ml-2 md:mt-4'>
          <Link className={cn(buttonClasses({size: "lg"}), "flex gap-4 ")}   href="/">Contact  👋</Link>
          </div>
        <div className='animate-fade-in [--animation-delay:1200ms] opacity-0 translate-y-[-100px] mt-6 md:mt-8'>
          <HomeImage />
        </div>
        </Hero>
      </Container>
      </div>
  )
}
