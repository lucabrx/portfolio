"use client"
import { cn } from '@/lib/classMerge';
import Image from 'next/image';
import { type FC } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutSection: FC = () => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
<div  className=' mt-16 md:mt-24 '>
<div className="  mask-radial-faded pointer-events-none relative -z-[20] -my-[520px] md:-my-[570px] h-[960px] overflow-hidden
          [--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]
          after:absolute after:top-1/2 after:-left-1/2 md:after:h-[142.8%] after:w-[200%] after:h-[42.8%]  after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background">
    </div>
<div ref={ref}  className='mt-8 md:mt-16 lg:mt-24 space-y-3 max-w-[880px] mx-auto w-full '> 
<h2 className={cn("w-full text-center lg:text-4xl xl:text-5xl text-3xl font-semibold opacity-0 pt-8 pb-4", inView ? "animate-fade-in" : "")}>Meet me 👋</h2>

<div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-7 container'>
<div className={cn("opacity-0", inView ? "animate-fade-in [--animation-delay:200ms]" : "")}>
<p className='text-md text-off-white/80 md:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus iste possimus non. Qui, ducimus praesentium aliquid, amet rem dicta mollitia consectetur, veniam eveniet id laudantium?</p>

<p className='text-md text-off-white/80 md:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus iste possimus non. Qui, ducimus praesentium aliquid, amet rem dicta mollitia consectetur, veniam eveniet id laudantium?</p>

<p className='text-md text-off-white/80 md:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus iste possimus non. Qui, ducimus praesentium aliquid, amet rem dicta mollitia consectetur, veniam eveniet id laudantium?</p>
</div>

<Image src="/profile.png" alt="potrait" width={450} height={450} className={cn('rounded-md drop-shadow-sm opacity-0', inView ? "animate-fade-in [--animation-delay:400ms]" : "")}  />
</div>


</div>
</div>
)
}

export default AboutSection