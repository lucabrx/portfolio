"use client";
import { type FC } from "react";
import Button from "@/components/ui/Button";
import HomeImage from "@/components/HomeImage";
import { scrollToSection } from "@/lib/scrollToSection";

const HeroSection: FC = () => {
  return (
    <div
      id="home-section"
      className="w-full overflow-hidden  flex flex-col justify-center items-center p-4 pt-navigation-height  "
    >
      <div className="grid grid-cols-1 md:grid-cols-[56%,40%] container md:gap-7 xl:mt-10 ">
        <div className="flex flex-col justify-center items-center md:-mt-28">
          <h1 className=" mb-1 animate-fade-in opacity-0  text-5xl leading-[42px] text-left w-full lg:leading-[58px] lg:text-[56px]">
            {" "}
            Hello, I&apos;m <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-title-gradient ">
              Luka Brkovic,
            </span>
            <span className="hidden lg:inline-block">
              a self taught developer
            </span>
            <br className="md:hidden" />
            <span className="ml-1 lg:hidden"> web developer</span>
          </h1>

          <h3 className="animate-fade-in max-w-[850px] [--animation-delay:200ms] opacity-0   mt-2 md:mt-4 text-lg  w-full text-left">
            Welcome to my portfolio, where you&apos;ll find a collection of my
            projects that demonstrate my skills and expertise. {"  "}
            <span className="hidden md:inline-block">
              Feel free to contact me.
            </span>
            <span className="md:inline-block hidden">
              I&apos;m always excited to take on new challenges.
            </span>
          </h3>

          <div className="animate-fade-in [--animation-delay:400ms] opacity-0 mt-4 self-start   md:mt-4">
            <Button
              size="lg"
              onClick={(e) => scrollToSection(e, "contact-section", 0)}
            >
              Contact 👋
            </Button>
          </div>
        </div>

        <div className="animate-fade-in [--animation-delay:700ms] opacity-0  mt-6 md:mt-8 lg:mt-12">
          <HomeImage />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
