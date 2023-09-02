"use client"

import { type FC } from "react"
import Image from "next/image"
import TextContainer from "@/components/ui/TextContainer"
import { text, textHidden } from "@/config/about-text"
import { cn } from "@/lib/classMerge"
import { useInView } from "react-intersection-observer"

const AboutSection: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <div id="about-section" className=" mt-16 md:mt-24 ">
      <div
        className="mask-radial-faded pointer-events-none relative -z-[20] -my-[520px] h-[960px] overflow-hidden [--color:#7877C6]
          before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4] after:absolute
          after:-left-1/2 after:top-1/2 after:h-[42.8%] after:w-[200%] after:border-t after:border-[rgba(120,_119,_198,_0.4)]  after:bg-background md:-my-[570px] md:after:h-[142.8%]"
      />

      <div ref={ref} className="mx-auto mt-8 w-full space-y-3 md:mt-16 lg:mt-24 ">
        <h2
          className={cn(
            "w-full pb-4 pt-8 text-center text-3xl font-semibold opacity-0 lg:text-4xl xl:text-5xl",
            inView ? "animate-fade-in" : ""
          )}
        >
          Meet me 👋
        </h2>

        <div className="container grid grid-cols-1 gap-4 md:grid-cols-[55%,1fr] md:gap-7 xl:grid-cols-[66%,1fr] xl:gap-12 ">
          <div
            className={cn(
              "space-y-2 opacity-0 md:space-y-4",
              inView ? "animate-fade-in [--animation-delay:200ms]" : ""
            )}
          >
            {text.map((item, index) => (
              <TextContainer key={index}>{item.text}</TextContainer>
            ))}
            {textHidden.map((item, index) => (
              <TextContainer className="hidden lg:block" key={index}>
                {item.text}
              </TextContainer>
            ))}
          </div>

          <Image
            src="/profile.png"
            alt="potrait"
            aria-label="potrait of me"
            width={370}
            height={370}
            className={cn(
              "hidden rounded-md opacity-0 drop-shadow-sm md:block",
              inView ? "animate-fade-in [--animation-delay:400ms]" : ""
            )}
          />

          <div
            className={cn(
              "flex w-full justify-center opacity-0 md:hidden",
              inView ? "animate-fade-in [--animation-delay:400ms]" : ""
            )}
          >
            <Image
              src="/profile.png"
              alt="potrait"
              aria-label="potrait of me"
              width={280}
              height={280}
              className="rounded-md drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
