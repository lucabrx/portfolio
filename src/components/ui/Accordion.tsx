import type { FC, ReactNode } from "react"
import { cn } from "@/lib/classMerge"
import { ChevronDown } from "lucide-react"

interface AccordionProps {
  title: string
  children: ReactNode
  activeIndex: number
  index: number
  onAccordionClick: (index: number) => void
}

const Accordion: FC<AccordionProps> = ({ title, children, activeIndex, index, onAccordionClick }) => {
  const isActive = activeIndex === index

  const toggleAccordion = () => {
    onAccordionClick(index)
  }

  return (
    <div>
      <div className="bg-gray-200 flex cursor-pointer items-center justify-between p-4" onClick={toggleAccordion}>
        <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
        <ChevronDown
          className={`transition-transform duration-300
        ${isActive ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      {isActive && (
        <div className={cn("p-4 opacity-0 md:px-7 md:py-4", isActive && "animate-fade-in [--animation-delay:50ms]")}>
          {children}
        </div>
      )}
    </div>
  )
}

export default Accordion
