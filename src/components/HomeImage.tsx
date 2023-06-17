"use client"
import { cn } from '@/lib/classMerge';
import Image from 'next/image';
import { type FC } from 'react';
import {useInView} from 'react-intersection-observer'
interface HomeImageProps {
  
}

const HomeImage: FC<HomeImageProps> = ({}) => {
    const {ref, inView} = useInView({threshold: 0.8, triggerOnce: true})

    console.log(inView)
  return (
<div ref={ref} className=" [perspective:2000px] rounded-md  mt-[96px] max-w-3xl">
<div className={`
relative rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient
${inView ?  "animate-image-rotate" : "[transform:rotateX(25deg)]"}
before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]
${inView ? "before:animate-image-glow" : ""}
`}>

<svg
    className={
      `
      absolute top-0 left-0 h-full w-full
      [&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]
      ${inView ? "[&_path]:animate-sketch-lines" : ""}
      `}
    width="100%"
    viewBox="0 0 1499 778"
    fill="none">
    <path pathLength="1" d="M1500 72L220 72"></path>
    <path pathLength="1" d="M1500 128L220 128"></path>
    <path pathLength="1" d="M1500 189L220 189"></path>
    <path pathLength="1" d="M220 777L220 1"></path>
    <path pathLength="1" d="M538 777L538 128"></path>
</svg>


<img className={`relative rounded-md z-10  transition-opacity delay-[650ms]
${inView ? "opacity-100" : "opacity-0"}
`}  src="/hero.png" alt='hero image' />

</div>
</div>
)
}

export default HomeImage