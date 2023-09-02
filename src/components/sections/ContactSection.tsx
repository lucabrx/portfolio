"use client"

import { type FC } from "react"
import Image from "next/image"
import ContactForm from "@/components/ContactForm"
import { cn } from "@/lib/classMerge"
import { useInView } from "react-intersection-observer"

const ContactSection: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <>
      <div id="contact-section" ref={ref} className="w-full  md:mt-8  ">
        <h2
          className={cn(
            "w-full pb-4 pt-8 text-center text-3xl font-semibold opacity-0 lg:text-4xl xl:text-5xl",
            inView ? "animate-fade-in" : ""
          )}
        >
          Say Hello 🤝
        </h2>
        <div className="container grid grid-cols-1 items-stretch md:grid-cols-[45%,1fr] md:gap-7 xl:gap-10">
          <Image
            src="/contact.svg"
            alt="potrait"
            aria-label="image of email"
            width={420}
            height={420}
            className={cn(
              "hidden rounded-md opacity-0 drop-shadow-sm md:block",
              inView ? "animate-fade-in [--animation-delay:400ms]" : ""
            )}
          />

          <div
            className={cn(
              "flex w-full flex-col items-center justify-center opacity-0",
              inView ? "animate-fade-in [--animation-delay:400ms] md:[--animation-delay:600ms]" : ""
            )}
          >
            <ContactForm />
          </div>
        </div>
      </div>

      <div
        className="  mask-radial-faded pointer-events-none relative -z-[20] -mt-[870px] h-[900px] overflow-hidden [--color:#7877C6] 
          before:absolute before:-inset-y-[100px] before:inset-x-0 before:bg-radial-faded before:opacity-[0.4] after:absolute
          after:-left-1/2 after:top-full after:h-full  after:w-[200%]   after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background md:-mt-[850px]"
      />
    </>
  )
}

export default ContactSection
