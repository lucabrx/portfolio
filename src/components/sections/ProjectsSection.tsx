"use client"
import { cn } from '@/lib/classMerge';
import { useRef, type FC } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';

const ProjectsSection: FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });

    function handleScroll(scrollOffset: number) {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += scrollOffset;
        }
    };

  return (
<div ref={ref} className='mt-6 md:mt-10 lg:mt-16 container'> 
<h2 className={cn("w-full text-center lg:text-4xl xl:text-5xl text-3xl font-semibold opacity-0", inView ? "animate-fade-in" : "")}>Project I worked on 👨‍💻</h2>
<div className="flex gap-6 overflow-x-auto mt-6 hide-scrollbar">
<div ref={scrollContainerRef} className={cn("flex gap-6 overflow-x-scroll px-8 md:px-0 pb-12 hide-scrollbar opacity-0", inView ? "animate-fade-in [--animation-delay:400ms]" : "")}>
    {
        Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="relative flex min-h-[400px] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-3xl border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[100vw] md:basis-[calc(42.66%-12px)] md:p-14">
            </div>
        ))
    }

</div>
</div>
<div className='flex gap-6 mt-5'>
<Button onClick={() => handleScroll(-100)}>Scroll Left</Button>
<Button  onClick={() => handleScroll(100)}>Scroll Right</Button>
</div>
</div>
)
}

export default ProjectsSection