import { ChevronDown } from 'lucide-react';
import React, { ReactNode, useState } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
  activeIndex: number;
  index: number;
  onAccordionClick: (index: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  activeIndex,
  index,
  onAccordionClick,
}) => {
  const isActive = activeIndex === index;

  const toggleAccordion = () => {
    onAccordionClick(index);
  };

  return (
    <div className="accordion">
      <div
        className={`accordion-header flex items-center justify-between cursor-pointer bg-gray-200 p-4 ${
          isActive ? 'active' : ''
        }`}
        onClick={toggleAccordion}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <ChevronDown className={`transition-transform duration-300
        ${isActive ? 'rotate-180' : 'rotate-0'}`} />
        
      </div>
      {isActive && (
        <div className="p-4">{children}</div>
      )}
    </div>
  );
};

export default Accordion;