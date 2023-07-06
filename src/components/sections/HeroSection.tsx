import { type FC } from 'react';
import  { buttonClasses } from '@/components/ui/Button'
import HomeImage from '@/components/HomeImage'
import { cn } from '@/lib/classMerge'
import Link from 'next/link'


const HeroSection: FC = ({}) => {
  return (
    <div className='w-full overflow-hidden  container'>
    <div className='w-full flex flex-col justify-center items-center mt-4 md:mt-8 lg:mt-12 xl:mt-18 '>

     
     <h1 className=' mb-1 animate-fade-in opacity-0 translate-y-[-100px] text-5xl leading-[42px] text-left w-full sms:text-center sms:text-6xl lg:text-7xl'> Hello, I&apos;m <br className='md:hidden'/> <span className='text-transparent bg-clip-text bg-title-gradient '>Luka Brkovic,</span>  <br/>
       <span className='hidden md:inline-block'>a self tought web developer</span>
       <span className='ml-1 md:hidden'>web developer</span>
       </h1>

       <h3 className='animate-fade-in max-w-[850px] [--animation-delay:200ms] opacity-0 translate-y-[-100px] ml-2 mt-2 md:mt-4 text-lg w-full text-left sms:text-center sms:text-xl '>Welcome to  my portfolio, where you&apos;ll find a collection of my  projects that demonstrate my skills and expertise. {"  "}<span className='hidden md:inline-block'>
       I&apos;m always excited to take on new challenges.
       </span>
       </h3>

      <div className='animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-100px] mt-4 self-start sms:self-center ml-2 md:mt-4'>
       <Link className={cn(buttonClasses({size: "lg"}))}   href="/">Contact  👋</Link>
       </div>
    
     <div className='animate-fade-in [--animation-delay:700ms] opacity-0 translate-y-[-100px] mt-6 md:mt-8 lg:mt-12'>
       <HomeImage />
     </div>
     </div>
 </div>
)
}

export default HeroSection