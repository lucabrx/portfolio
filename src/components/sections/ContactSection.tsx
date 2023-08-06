"use client";
import { type FC } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import { cn } from "@/lib/classMerge";

import ContactForm from "@/components/ContactForm";

const ContactSection: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      <div id="contact-section" ref={ref} className="w-full  md:mt-8  ">
        <h2
          className={cn(
            "w-full text-center lg:text-4xl xl:text-5xl text-3xl font-semibold opacity-0 pt-8 pb-4",
            inView ? "animate-fade-in" : "",
          )}
        >
          Say Hello 🤝
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[45%,1fr] container items-stretch md:gap-7 xl:gap-10">
          <Image
            src="/contact.svg"
            alt="potrait"
            aria-label="image of email"
            width={420}
            height={420}
            className={cn(
              "md:block hidden rounded-md drop-shadow-sm opacity-0",
              inView ? "animate-fade-in [--animation-delay:400ms]" : "",
            )}
          />

          <div
            className={cn(
              "flex flex-col items-center justify-center w-full opacity-0",
              inView
                ? "animate-fade-in [--animation-delay:400ms] md:[--animation-delay:600ms]"
                : "",
            )}
          >
            <ContactForm />
          </div>
        </div>
      </div>

      <div
        className="  mask-radial-faded pointer-events-none relative -z-[20] overflow-hidden h-[900px] -mt-[870px] md:-mt-[850px] 
          [--color:#7877C6] before:absolute before:inset-x-0 before:-inset-y-[100px] before:bg-radial-faded before:opacity-[0.4]
          after:absolute after:top-full after:-left-1/2  after:w-[200%]   after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background after:h-full"
      />
    </>
  );
};

export default ContactSection;
