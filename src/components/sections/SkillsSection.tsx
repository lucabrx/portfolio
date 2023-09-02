"use client"

import { useState, type FC } from "react"
import Accordion from "@/components/ui/Accordion"
import TextContainer from "@/components/ui/TextContainer"
import { skillText } from "@/config/skills-section"
import { backendTools, designTools, frontendTools } from "@/config/tools"
import { cn } from "@/lib/classMerge"
import { useInView } from "react-intersection-observer"

const accordions = [
  {
    title: "💅 Frontend",
    content: (
      <div className="flex flex-col items-start justify-center space-y-2">
        {frontendTools.map((tool, index) => (
          <div className="flex w-full max-w-[120px]  items-center justify-start" key={index}>
            <div className="mr-4 aspect-square w-10 p-2">{<tool.Icon className="aspect-square h-6" />}</div>
            <span className="text-lg">{tool.text}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "🎩 Backend",
    content: (
      <div className="flex flex-col items-start justify-center space-y-2">
        {backendTools.map((tool, index) => (
          <div className="flex w-full max-w-[125px]  items-center justify-start" key={index}>
            <div className="mr-4 aspect-square w-10 p-2">{<tool.Icon className="aspect-square h-6" />}</div>
            <span className="text-lg">{tool.text}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "🎨 Design",
    content: (
      <div className="flex flex-col items-start justify-center space-y-2">
        {designTools.map((tool, index) => (
          <div className="flex w-full max-w-[145px]  items-center justify-start" key={index}>
            <div className="mr-4 aspect-square w-10 p-2  ">{<tool.Icon className="aspect-square h-6" />}</div>
            <span className="text-lg">{tool.text}</span>
          </div>
        ))}
      </div>
    ),
  },
]

const SkillsSection: FC = ({}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleAccordionClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index)
  }

  return (
    <div id="skills-section" ref={ref} className="container mt-[100px] md:mt-[140px] lg:mt-[160px]">
      <h2
        className={cn(
          "w-full text-center text-3xl font-semibold opacity-0 lg:text-4xl xl:text-5xl",
          inView ? "animate-fade-in" : ""
        )}
      >
        Thing&apos;s I do 👋
      </h2>
      <p
        className={cn(
          "container mt-4 text-center text-off-white/80 opacity-0 lg:hidden",
          inView ? "animate-fade-in [--animation-delay:200ms]" : ""
        )}
      >
        I&apos;m a passionate junior frontend developer with a keen eye for design and a strong desire to create
        engaging user experiences.
      </p>

      <div className="grid grid-cols-1 gap-7 pt-7 lg:grid-cols-2 ">
        <div
          className={cn(
            "hidden w-full flex-col space-y-2  pt-4 opacity-0  md:space-y-4    lg:flex ",
            inView ? "animate-fade-in [--animation-delay:400ms]" : ""
          )}
        >
          {skillText.map((text, index) => (
            <TextContainer key={index}>{text}</TextContainer>
          ))}
        </div>
        <div className={cn("opacity-0 md:space-y-2", inView ? "animate-fade-in [--animation-delay:600ms]" : "")}>
          {accordions.map((accordion, index) => (
            <Accordion
              key={index}
              title={accordion.title}
              activeIndex={activeIndex}
              index={index}
              onAccordionClick={handleAccordionClick}
            >
              {accordion.content}
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsSection
