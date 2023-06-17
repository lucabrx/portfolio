"use client"
import { cn } from '@/lib/classMerge';
import Image from 'next/image';
import { type FC } from 'react';
import {useInView} from 'react-intersection-observer'
interface HomeImageProps {
  
}

const HomeImage: FC<HomeImageProps> = ({}) => {
    const {ref, inView} = useInView({threshold: 0.99, triggerOnce: true})

    console.log(inView)
  return (
<div ref={ref} className=" [perspective:2000px] mt-[120px]">
<div className={`
relative rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient
${inView ?  "animate-image-rotate" : "[transform:rotateX(25deg)]"}
before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]
${inView ? "before:animate-image-glow" : ""}
`}>
<img className='relative z-10'  src="/hero.png" alt='hero image' />
</div>
</div>
)
}

export default HomeImage