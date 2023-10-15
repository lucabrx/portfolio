"use client"

import { type FC } from "react"
import HomeImage from "@/components/HomeImage"
import HomeImageV2 from "@/components/HomeImagev2"
import Button from "@/components/ui/Button"
import { scrollToSection } from "@/lib/scrollToSection"

const HeroSection: FC = () => {
  return (
    <div
      id="home-section"
      className="flex w-full flex-col items-center  justify-center overflow-hidden p-4 pb-28 pt-navigation-height lg:pb-0"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-[65%,35%] xl:grid-cols-[55%,32%] xl:gap-15 xl:mt-10 ">

        <div className="mt-6 flex flex-col items-start justify-center  lg:-mt-20 xl:-mt-28 lg:ml-8 xl:ml-0">
          <h1 className=" mb-1 w-full animate-fade-in text-left  text-4xl leading-[42px] opacity-0 xs:text-5xl lg:mb-0 md:text-3xl lg:text-[44px] lg:leading-[48px] xl:text-[56px] xl:leading-[58px] sm:text-center lg:text-left">
            {" "}
            Hello, I&apos;m <br className="md:hidden" />
            <span className="bg-title-gradient bg-clip-text text-transparent ">Luka Brkovic,</span>
            <span className="hidden lg:inline-block">a self taught developer</span>
            <br className="md:hidden" />
            <span className="ml-1 lg:hidden"> web developer</span>
          </h1>

          <p className="mt-2 w-full  animate-fade-in text-left   text-off-white/70 opacity-0 [--animation-delay:200ms] xs:text-lg md:text-sm lg:mt-4 lg:text-md xl:w-4/5 xl:self-start xl:text-lg sm:text-center lg:text-left lg:w-5/6 ">
            Welcome to my portfolio, where you&apos;ll find a collection of my projects that demonstrate my skills and
            expertise. {"  "}
          </p>

          <div className="mt-4 animate-fade-in self-start sm:self-center lg:self-start opacity-0 [--animation-delay:400ms]  md:mt-4">
            <Button
              aria-label="button to contact section"
              size="lg"
              onClick={(e) => scrollToSection(e, "contact-section", 0)}
            >
              Contact 👋
            </Button>
          </div>
        </div>

        <div className="mt-6 hidden animate-fade-in opacity-0 [--animation-delay:700ms]  md:mt-8 lg:block lg:mt-12">
          <div className="max-w-[880px] rounded-md pb-[180px] [perspective:2000px] md:pb-[250px]">
            <div className="relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:animate-image-glow before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]">
              <div className="mt-32 lg:mb-12 flex relative rotate-20 -left-20 xl:left-0">
                <HomeImageV2 src={"/projects/jimmy-dzomlia.png"} width={470} height={470} className="-top-[180px] z-10 hover:z-40 xl:-top-[220px]" />
                 <HomeImageV2 src={"/projects/icon-ai.png"} width={270} height={270} className="-top-[200px] -left-6 hover:z-30 xl:-top-[240px]" />
                <HomeImageV2 src={"/projects/quanta.png"} width={270} height={270} className="-top-[210px] -right-18 hover:z-30 xl:-top-[250px]" />
                <HomeImageV2 src={"/projects/web-dev-tools.png"} width={320} height={320} className="-top-[100px] -right-12 z-20 hover:z-40 xl:-top-[120px]" />
                <HomeImageV2 src={"/projects/vox-populi.png"} width={320} height={320} className="-top-[80px] -left-12 z-20 hover:z-40 xl:-top-[100px]" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
