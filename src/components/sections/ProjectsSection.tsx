"use client"

import { useRef, type FC } from "react"
import ProjectCard from "@/components/ProjectCard"
import { Icons } from "@/components/ui/Icons"
import { projects } from "@/config/projects"
import { cn } from "@/lib/classMerge"
import { useInView } from "react-intersection-observer"

const ProjectsSection: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  function handleScroll(scrollOffset: number) {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth

      const newScrollLeft = scrollContainer.scrollLeft + scrollOffset
      const adjustedScrollLeft = Math.max(0, Math.min(maxScrollLeft, newScrollLeft))

      scrollContainer.scrollTo({
        left: adjustedScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <div id="projects-section" ref={ref} className="container mt-6 md:mt-10 lg:mt-16">
      <h2
        className={cn(
          "w-full text-center text-3xl font-semibold opacity-0 lg:text-4xl xl:text-5xl",
          inView ? "animate-fade-in" : ""
        )}
      >
        My Projects 👨‍💻
      </h2>
      <div className="hide-scrollbar relative mt-6 flex gap-6 overflow-x-auto">
        <div
          ref={scrollContainerRef}
          className={cn(
            "hide-scrollbar flex transform gap-4 overflow-x-scroll px-5 py-6 opacity-0 transition-transform md:gap-7 md:px-0",
            inView ? "animate-fade-in [--animation-delay:300ms]" : ""
          )}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <button
          aria-label="scroll left"
          className={cn(
            "absolute left-3 top-[45%] z-30 hidden rounded-md bg-grey/20 p-1 opacity-0 transition-colors duration-300 hover:bg-grey/40 md:block",
            inView ? "animate-fade-in [--animation-delay:300ms] " : ""
          )}
          onClick={() => handleScroll(-350)}
        >
          <Icons.left className="h-7" />
        </button>
        <button
          aria-label="scroll right"
          className={cn(
            "absolute right-3 top-[45%] z-30 hidden rounded-md bg-grey/20 p-1 opacity-0 transition-colors duration-300 hover:bg-grey/40 md:block",
            inView ? "animate-fade-in [--animation-delay:300ms]" : ""
          )}
          onClick={() => handleScroll(350)}
        >
          <Icons.right className="h-7" />
        </button>
      </div>
      <div className="mt-5 flex gap-6"></div>
    </div>
  )
}

export default ProjectsSection
