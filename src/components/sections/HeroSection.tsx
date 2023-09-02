"use client"

import { type FC } from "react"
import HomeImage from "@/components/HomeImage"
import Button from "@/components/ui/Button"
import { scrollToSection } from "@/lib/scrollToSection"

const HeroSection: FC = () => {
  return (
    <div
      id="home-section"
      className="flex w-full flex-col items-center  justify-center overflow-hidden p-4 pb-28 pt-navigation-height md:pb-0"
    >
      <div className="container grid grid-cols-1 md:grid-cols-[56%,40%] md:gap-7 xl:mt-10 ">
        <div className="mt-6 flex flex-col items-center justify-center  md:-mt-28">
          <h1 className=" mb-1 w-full animate-fade-in text-left  text-4xl leading-[42px] opacity-0 xs:text-5xl md:mb-0 md:text-3xl lg:text-[44px] lg:leading-[48px] xl:text-[56px] xl:leading-[58px]">
            {" "}
            Hello, I&apos;m <br className="md:hidden" />
            <span className="bg-title-gradient bg-clip-text text-transparent ">Luka Brkovic,</span>
            <span className="hidden lg:inline-block">a self taught developer</span>
            <br className="md:hidden" />
            <span className="ml-1 lg:hidden"> web developer</span>
          </h1>

          <p className="mt-2 w-full  animate-fade-in text-left   text-off-white/70 opacity-0 [--animation-delay:200ms] xs:text-lg md:text-sm lg:mt-4 lg:text-md xl:w-4/5 xl:self-start xl:text-lg">
            Welcome to my portfolio, where you&apos;ll find a collection of my projects that demonstrate my skills and
            expertise. {"  "}
          </p>

          <div className="mt-4 animate-fade-in self-start opacity-0 [--animation-delay:400ms]  md:mt-4">
            <Button
              aria-label="button to contact section"
              size="lg"
              onClick={(e) => scrollToSection(e, "contact-section", 0)}
            >
              Contact 👋
            </Button>
          </div>
        </div>

        <div className="mt-6 hidden animate-fade-in opacity-0 [--animation-delay:700ms]  md:mt-8 md:block lg:mt-12">
          <HomeImage />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
