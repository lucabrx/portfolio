"use client"
// @ts-ignore
import { useState, type FC, CSSProperties, useEffect, useRef } from 'react';
import {useInView} from 'react-intersection-observer'
interface HomeImageProps {
  
}

interface Line {
  id: string;
  direction: "to top" | "to left";
  size: number;
  duration: number;
}

function randomNumberBetween (min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const HomeImage: FC<HomeImageProps> = ({}) => {
    const [lines, setLines] = useState<Line[]>([]);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const removeLine = (id: string) => {
      setLines((prev) => prev.filter((line) => line.id !== id));
    };

    useEffect(() => {
  
      const renderLine = (timeout: number) => {
        timeoutRef.current = setTimeout(() => {
          setLines((lines) => [
            ...lines,
            {
              direction: Math.random() > 0.6 ? "to top" : "to left",
              duration: randomNumberBetween(1300, 4500),
              size: randomNumberBetween(10, 50),
              id: Math.random().toString(36).substring(7),
            },
          ]);
  
          renderLine(randomNumberBetween(800, 2500));
        }, timeout);
      };
  
      renderLine(randomNumberBetween(800, 1300));
  
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, [ setLines]);

  return (
<div  className=" [perspective:2000px] rounded-md   max-w-3xl">
<div className={`
relative rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient
 animate-image-rotate
before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)] before:animate-image-glow`}>
 <div className="absolute top-0 left-0 z-20 h-full w-full">
          {lines.map((line) => (
            <span
              key={line.id}
              onAnimationEnd={() => removeLine(line.id)}
              style={
                {
                  "--direction": line.direction,
                  "--size": line.size,
                  "--animation-duration": `${line.duration}ms`,
                } as CSSProperties
              }
              className={`
                absolute top-0 block  bg-glow-lines
                ${line.direction === "to left" ?
                  "left-0 h-[1px] w-12 animate-glow-line-horizontal md:w-15" : ""}
                ${line.direction === "to top" &&
                  "right-0 h-[60px] w-[1px] animate-glow-line-vertical md:h-[60px]"}
              `}
            />
          ))}
        </div>
<svg
    className={
      `
      absolute top-0 left-0 h-full w-full
      [&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1] [&_path]:animate-sketch-lines`}
    width="100%"
    viewBox="0 0 1499 778"
    fill="none">
    <path pathLength="1" d="M1500 72L220 72"></path>
    <path pathLength="1" d="M1500 128L220 128"></path>
    <path pathLength="1" d="M1500 189L220 189"></path>
    <path pathLength="1" d="M220 777L220 1"></path>
    <path pathLength="1" d="M538 777L538 128"></path>
</svg>

{/* @ts-ignore */}
<img className={`relative rounded-md z-10  transition-opacity delay-[650ms] opacity-100 md:hidden `}  
src="/hero2.png" alt='hero image' />
<img className={`relative rounded-md z-10  transition-opacity delay-[650ms] opacity-100 hidden md:block `}  
src="/hero.png" alt='hero image' />
</div>
</div>
)
}

export default HomeImage