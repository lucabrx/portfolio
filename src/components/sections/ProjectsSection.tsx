"use client";
import { useRef, type FC } from "react";
import { useInView } from "react-intersection-observer";

import { cn } from "@/lib/classMerge";
import { projects } from "@/config/projects";

import { Icons } from "@/components/ui/Icons";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  function handleScroll(scrollOffset: number) {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      scrollContainerRef.current.scrollLeft += scrollOffset;

      if (scrollOffset > 0 && scrollContainer.scrollLeft >= maxScrollLeft) {
        scrollContainer.scrollLeft = 0;
      } else if (scrollOffset < 0 && scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = maxScrollLeft;
      }
    }
  }

  return (
    <div ref={ref} className="mt-6 md:mt-10 lg:mt-16 container">
      <h2
        className={cn(
          "w-full text-center lg:text-4xl xl:text-5xl text-3xl font-semibold opacity-0",
          inView ? "animate-fade-in" : "",
        )}
      >
        My Projects👨‍💻
      </h2>
      <div className="flex gap-6 overflow-x-auto mt-6 hide-scrollbar relative">
        <div
          ref={scrollContainerRef}
          className={cn(
            "flex gap-4 md:gap-7 overflow-x-scroll px-5 md:px-0 py-6 hide-scrollbar opacity-0 transition-transform transform",
            inView ? "animate-fade-in [--animation-delay:300ms]" : "",
          )}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <button
          className={cn(
            "absolute z-30 top-[45%] left-3 bg-grey/20 rounded-md p-1 hover:bg-grey/40 transition-colors duration-300 opacity-0 hidden md:block",
            inView ? "animate-fade-in [--animation-delay:300ms] " : "",
          )}
          onClick={() => handleScroll(-100)}
        >
          <Icons.left className="h-7" />
        </button>
        <button
          className={cn(
            "absolute z-30 top-[45%] right-3 bg-grey/20 rounded-md p-1 hover:bg-grey/40 transition-colors duration-300 opacity-0 hidden md:block",
            inView ? "animate-fade-in [--animation-delay:300ms]" : "",
          )}
          onClick={() => handleScroll(100)}
        >
          <Icons.right className="h-7" />
        </button>
      </div>
      <div className="flex gap-6 mt-5"></div>
    </div>
  );
};

export default ProjectsSection;
