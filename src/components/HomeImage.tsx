import Image from 'next/image';
import { type FC } from 'react';


const HomeImage: FC = () => {

  return (
<div  className=" [perspective:2000px] rounded-md max-w-[880px] pb-[250px]">
<div className="relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)] before:animate-image-glow">
  {/* <div className='absolute inset-0 z-30 bg-glass-gradient2 blur-sm'></div> */}



<div className='flex mt-12'>
  <div className='relative mr-4  aspect-video w-[calc(100vw-64px)] z-10 border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient'>
  <Image src="/projects/fitness-t-full.png" alt="Picture of the author" fill  
  className='rounded-md delay-[650ms]' /> 
  </div>
  <div className='absolute  aspect-video w-[calc(45%)] -top-10 -left-4 border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient'>
  <Image src="/projects/fitness-t-full.png" alt="Picture of the author" fill  
  className='rounded-md delay-[650ms]' /> 
  </div>
  <div className='absolute  aspect-video w-[calc(45%)] -top-10 right-8 border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient'>
  <Image src="/projects/fitness-t-full.png" alt="Picture of the author" fill  
  className='rounded-md delay-[650ms]' /> 
  </div>
  <div className='absolute  aspect-video w-[calc(65%)] -bottom-4 left-4 border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient z-20'>
  <Image src="/projects/fitness-t-full.png" alt="Picture of the author" fill  
  className='rounded-md delay-[650ms]' /> 
  </div>
  <div className='absolute  aspect-video w-[calc(65%)] -bottom-8 -right-4 border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient z-20'>
  <Image src="/projects/fitness-t-full.png" alt="Picture of the author" fill  
  className='rounded-md delay-[650ms]' /> 
  </div>
  {/* <div className='relative aspect-video w-full origin-top-left -skew-x-12 '>
  <Image src="/projects/fitness-t-full.png" alt="Picture of the author" fill  
  className='  rounded-md z-10  transition-opacity delay-[650ms] opacity-100 ' /> 
   <div className='absolute inset-0 bg-background/30 backdrop-blur-[1px] z-10 '></div> 
  </div> */}  
</div>

</div>

</div>
)
}

export default HomeImage