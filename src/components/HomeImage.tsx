import Image from "next/image";
import {useRef} from "react";
import {cn} from "@/lib/classMerge";

interface HomeImageProps {
    src: string;
    width: number;
    height: number;
    className?: string;
}

export default function HomeImage({src, width, height, className}: HomeImageProps) {
    const ref = useRef<DOMRect | null>(null);
    // how to add z-index to the image that is hovered which overwrites absolute?


  return (

           <div className={cn("flex flex-col absolute [perspective:800px]", className)}>
               <div
                   onMouseLeave={() => ref.current = null}
                   onMouseEnter={(e) => ref.current = e.currentTarget.getBoundingClientRect()}
                   onMouseMove={(e) => {
                       if (!ref.current) return;
                       const x = e.clientX - ref.current.left;
                       const y = e.clientY - ref.current.top;
                       const xPercentage = x / ref.current.width;
                       const yPercentage = y / ref.current.height;
                       const xRotation = (xPercentage - 0.5) * 20;
                       const yRotation = (0.5 - yPercentage) * 20;

                       e.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
                       e.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
                       e.currentTarget.style.setProperty("--x", `${xPercentage * 200}%`);
                       e.currentTarget.style.setProperty("--y", `${yPercentage * 200}%`);
                   }}
                   className="transition-transform ease-out md:hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] rounded-md  border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient">
                   <Image
                       src={src}
                       alt="Picture of the author"
                       width={width}
                       height={height}
                       className="rounded-md delay-[650ms] hover:z-[150]"
                   />
               </div>
           </div>
  )
}
