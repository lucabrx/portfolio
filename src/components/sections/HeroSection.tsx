"use client";
import { type FC } from "react";
import Button from "@/components/ui/Button";
import HomeImage from "@/components/HomeImage";
import { scrollToSection } from "@/lib/scrollToSection";

const HeroSection: FC = () => {
  return (
    <div
      id="home-section"
      className="pb-28 md:pb-0 w-full overflow-hidden  flex flex-col justify-center items-center p-4 pt-navigation-height"
    >
      <div className="grid grid-cols-1 md:grid-cols-[56%,40%] container md:gap-7 xl:mt-10 ">
        <div className="flex flex-col justify-center items-center mt-6  md:-mt-28">
          <h1 className=" mb-1 animate-fade-in opacity-0 text-4xl  xs:text-5xl leading-[42px] md:text-3xl md:mb-0 text-left w-full xl:leading-[58px] xl:text-[56px] lg:text-[44px] lg:leading-[48px]">
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

          <p className="animate-fade-in  [--animation-delay:200ms] opacity-0   mt-2 lg:mt-4 xs:text-lg md:text-sm lg:text-md xl:text-lg w-full text-left ">
            Welcome to my portfolio, where you&apos;ll find a collection of my
            projects that demonstrate my skills and expertise. {"  "}
            <span className="hidden md:inline-block">
              Feel free to contact me.
            </span>
            <span className="md:inline-block hidden">
              I&apos;m always excited to take on new challenges.
            </span>
          </p>

          <div className="animate-fade-in [--animation-delay:400ms] opacity-0 mt-4 self-start   md:mt-4">
            <Button
              aria-label="button to contact section"
              size="lg"
              onClick={(e) => scrollToSection(e, "contact-section", 0)}
            >
              Contact 👋
            </Button>
          </div>
        </div>

        <div className="hidden md:block animate-fade-in [--animation-delay:700ms] opacity-0  mt-6 md:mt-8 lg:mt-12">
          <HomeImage />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
