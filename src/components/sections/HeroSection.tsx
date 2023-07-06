import { type FC } from 'react';
import  { buttonClasses } from '@/components/ui/Button'
import HomeImage from '@/components/HomeImage'
import { cn } from '@/lib/classMerge'
import Link from 'next/link'


const HeroSection: FC = ({}) => {
  return (
<div className='w-full overflow-hidden  flex flex-col justify-center items-center mt-4 '>
<div className='grid grid-cols-1 md:grid-cols-2 container'>
<div className='flex flex-col justify-center items-center md:-mt-24'>
    <h1 className=' mb-1 animate-fade-in opacity-0  text-5xl leading-[42px] text-left w-full lg:text-7xl'> Hello, I&apos;m <br className='md:hidden'/> <span className='text-transparent bg-clip-text bg-title-gradient '>Luka Brkovic,</span>  <br/>
       <span className='hidden lg:inline-block'>a self tought web developer</span>
       <span className='ml-1 lg:hidden'>web developer</span>
    </h1>

    <h3 className='animate-fade-in max-w-[850px] [--animation-delay:200ms] opacity-0  ml-2 mt-2 md:mt-4 text-lg  w-full text-left'>Welcome to  my portfolio, where you&apos;ll find a collection of my  projects that demonstrate my skills and expertise. {"  "}<span className='hidden md:inline-block'>
       I&apos;m always excited to take on new challenges.</span>
    </h3>

    <div className='animate-fade-in [--animation-delay:400ms] opacity-0 mt-4 self-start  ml-2 md:mt-4'>
      <Link className={cn(buttonClasses({size: "lg"}))}   href="/">
      Contact  👋
      </Link>
    </div>
  </div>

  <div className='animate-fade-in [--animation-delay:700ms] opacity-0 translate-y-[-100px] mt-6 md:mt-8 lg:mt-12'>
    <HomeImage />
  </div>
</div>
</div>
)
}

export default HeroSection