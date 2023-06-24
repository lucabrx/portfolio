"use client"
import {type FC, useState } from 'react';
import Accordion from '../ui/Accordion';
import { Icons } from '../ui/Icons';
import { LucideIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/classMerge';

interface ToolsProps {
  text: string;
  Icon: LucideIcon
}
const frontendTools: ToolsProps[] = [
  { text: "React",
    Icon: Icons.react,
  },
  { text: "Next.js",
    Icon: Icons.next,
  },
  { text: "Svelte",
    Icon: Icons.svelte,
  },
]
const backendTools: ToolsProps[] = [
  
  { text: "Express",
    Icon: Icons.express,
  },
  { text: "Mongo",
    Icon: Icons.mongodb,
  },
  { text: "SQL",
    Icon: Icons.sql,
  },
]
const designTools: ToolsProps[] = [
  { text: "Figma",
    Icon: Icons.figma,
  },
  { text: "Photoshop",
    Icon: Icons.ps,
  },
]
const accordions = [
  { title: '💅 Frontend', content: (<div className='flex flex-col space-y-2 justify-center items-start'>
   {frontendTools.map((tool, index) => (
   <div className='flex items-center justify-between  max-w-[120px] w-full' key={index}>
    <div className='mr-4 p-2'>{<tool.Icon className='h-6 w-6' />}</div>
    <span className='text-lg'>{tool.text}</span>
    </div>
   ))}
  </div>) },
  { title: '🎩 Backend', content: (<div className='flex flex-col space-y-2 justify-center items-start'>
  {backendTools.map((tool, index) => (
   <div className='flex items-center justify-between  max-w-[125px] w-full' key={index}>
   <div className='mr-4 p-2'>{<tool.Icon className='h-6 w-6' />}</div>
   <span className='text-lg'>{tool.text}</span>
   </div>
  ))}
 </div>) },
  { title: '🎨 Design', content: (<div className='flex flex-col space-y-2 justify-center items-start'>
  {designTools.map((tool, index) => (
   <div className='flex items-center justify-between  max-w-[145px] w-full' key={index}>
   <div className='mr-4 p-2'>{<tool.Icon className='h-6 w-6' />}</div>
   <span className='text-lg'>{tool.text}</span>
   </div>
  ))}
 </div>) },
];

// opacity-0", inView ? "animate-fade-in" : ""
// [--animation-delay:400ms]
  const SkillsContainer: FC= ({}) => {
    const {ref, inView} = useInView({
      triggerOnce: true,
      threshold: 1,
    });
  const [activeIndex, setActiveIndex] = useState(-1);
  
    const handleAccordionClick = (index: number) => {
      setActiveIndex(index === activeIndex ? -1 : index);
    };
  
    return (
      <div ref={ref} className='mt-[100px] md:mt-[140px] lg:mt-[160px] container'> 
      <h2 className={cn("w-full text-center lg:text-4xl xl:text-5xl text-3xl font-semibold opacity-0", inView ? "animate-fade-in" : "")}>My Skills 👨‍💻</h2>
       <div className='pt-7 grid grid-cols-1 lg:grid-cols-2 gap-7'>
        <div className={cn("aspect-video w-full bg-transparent-white flex justify-center items-center opacity-0", inView ? "animate-fade-in [--animation-delay:400ms]" : "")}>
          Amazing Image
        </div>
        <div className={cn("md:space-y-2 opacity-0", inView ? "animate-fade-in [--animation-delay:800ms]" : "")}>
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
  
  export default SkillsContainer;

