import Image from "next/image";
import { type FC } from "react";

const HomeImage: FC = () => {
  return (
    <div className=" [perspective:2000px] rounded-md max-w-[880px] pb-[180px] md:pb-[250px]">
      <div className="relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)] before:animate-image-glow">
        {/* <div className='absolute inset-0 z-30 bg-glass-gradient2 blur-sm'></div> */}

        <div className="flex mt-12 rotate-20">
          <div className="relative mr-4 left-3 md:left-0  aspect-video w-[calc(100vw-64px)] z-10 border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient rounded-md ">
            <Image
              src="/projects/fitness-t-full.png"
              alt="Picture of the author"
              fill
              className="rounded-md delay-[650ms]"
            />
          </div>
          <div className="absolute  h-[45%] w-[45%] -top-10 left-0 md:-left-4  border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient rounded-md ">
            <Image
              src="/projects/chatnik-full.png"
              alt="Picture of the author"
              fill
              className="rounded-md delay-[650ms]"
            />
          </div>
          <div className="absolute  h-[45%] w-[45%] -top-6 right-6 border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient  rounded-md ">
            <Image
              src="/projects/quanta-full.png"
              alt="Picture of the author"
              fill
              className="rounded-md delay-[650ms]"
            />
          </div>
          <div className="absolute  h-[65%] w-[calc(65%)] -bottom-4 left-6 border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient z-30 rounded-md ">
            <Image
              src="/projects/icon-gen-full.png"
              alt="Picture of the author"
              fill
              className="rounded-md delay-[650ms]"
            />
          </div>
          <div className="absolute  h-[65%] w-[65%] -bottom-8 -right-0 md:-right-4 border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient z-20 rounded-md ">
            <Image
              src="/projects/vox-populi-full.png"
              alt="Picture of the author"
              fill
              className="rounded-md delay-[650ms]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
