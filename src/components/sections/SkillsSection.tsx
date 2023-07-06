"use client"
import {type FC, useState } from 'react';
import Accordion from '../ui/Accordion';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/classMerge';
import { frontendTools,backendTools,designTools } from '../../../config/tools';


const accordions = [
  { title: '💅 Frontend', content: (<div className='flex flex-col space-y-2 justify-center items-start'>
   {frontendTools.map((tool, index) => (
   <div className='flex items-center justify-start  max-w-[120px] w-full' key={index}>
    <div className='mr-4 p-2 aspect-square w-10'>{<tool.Icon className='h-6 aspect-square' />}</div>
    <span className='text-lg'>{tool.text}</span>
    </div>
   ))}
  </div>) },
  { title: '🎩 Backend', content: (<div className='flex flex-col space-y-2 justify-center items-start'>
  {backendTools.map((tool, index) => (
   <div className='flex items-center justify-start  max-w-[125px] w-full' key={index}>
   <div className='mr-4 p-2 aspect-square w-10'>{<tool.Icon className='h-6 aspect-square' />}
   </div>
   <span className='text-lg'>{tool.text}</span>
   </div>
  ))}
 </div>) },
  { title: '🎨 Design', content: (<div className='flex flex-col space-y-2 justify-center items-start'>
  {designTools.map((tool, index) => (
   <div className='flex items-center justify-start  max-w-[145px] w-full' key={index}>
   <div className='mr-4 p-2 aspect-square w-10  '>{<tool.Icon className='h-6 aspect-square' />}</div>
   <span className='text-lg'>{tool.text}</span>
   </div>
  ))}
 </div>) },
];

  const SkillsSection: FC= ({}) => {
    const {ref, inView} = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });
  const [activeIndex, setActiveIndex] = useState(-1);
  
    const handleAccordionClick = (index: number) => {
      setActiveIndex(index === activeIndex ? -1 : index);
    };
  
    return (
      <div ref={ref} className='mt-[100px] md:mt-[140px] lg:mt-[160px] container'> 
      <h2 className={cn("w-full text-center lg:text-4xl xl:text-5xl text-3xl font-semibold opacity-0", inView ? "animate-fade-in" : "")}>Nice to meet u! 👋</h2>
      <p className={cn("text-center mt-4 text-off-white/80 container opacity-0", inView ? "animate-fade-in [--animation-delay:200ms]" : "")}>
        I&apos;m a passionate junior frontend developer with a keen eye for design and a strong desire to create engaging user experiences.
        </p>
       <div className='pt-7 grid grid-cols-1 lg:grid-cols-2 gap-7'>
        <div className={cn("aspect-video w-full bg-transparent-white flex justify-center items-center  opacity-0 ", inView ? "animate-fade-in [--animation-delay:400ms]" : "")}>

      
        </div>
        <div className={cn("md:space-y-2 opacity-0", inView ? "animate-fade-in [--animation-delay:600ms]" : "")}>
      {accordions.map((accordion, index) => (
          <Accordion
            key={index}
            title={accordion.title}
            activeIndex={activeIndex}
            index={index}
            onAccordionClick={handleAccordionClick}
          >{accordion.content}</Accordion>
        ))}
      </div>
       </div>
      </div>
    );
  };
  
  export default SkillsSection;

