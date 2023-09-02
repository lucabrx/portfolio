import { type FC } from "react"
import Image from "next/image"

const HomeImage: FC = () => {
  return (
    <div className="max-w-[880px] rounded-md pb-[180px] [perspective:2000px] md:pb-[250px]">
      <div className="relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:animate-image-glow before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]">
        {/* <div className='absolute inset-0 z-30 bg-glass-gradient2 blur-sm'></div> */}

        <div className="rotate-20 mt-12 flex">
          <div className="relative left-3 z-10 mr-4  aspect-video w-[calc(100vw-64px)] rounded-md border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient md:left-0 ">
            <Image
              src="/projects/jimmy-dzomlia.png"
              alt="Picture of the author"
              fill
              className="rounded-md delay-[650ms]"
            />
          </div>
          <div className="absolute  -top-10 left-0 h-[45%] w-[45%] rounded-md  border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient md:-left-4 ">
            <Image
              src="/projects/icon-ai.png"
              alt="Picture of the author"
              fill
              className="rounded-md delay-[650ms]"
            />
          </div>
          <div className="absolute  -top-6 right-6 h-[45%] w-[45%] rounded-md border border-transparent-white bg-white bg-opacity-[0.01]  bg-hero-gradient ">
            <Image
              src="/projects/quanta.png"
              alt="Picture of the author"
              fill
              className="rounded-md delay-[650ms]"
            />
          </div>
          <div className="absolute  -bottom-4 left-6 z-30 h-[65%] w-[calc(65%)] rounded-md border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient ">
            <Image
              src="/projects/quanta.png"
              alt="Picture of the author"
              fill
              className="rounded-md delay-[650ms]"
            />
          </div>
          <div className="absolute  -bottom-8 -right-0 z-20 h-[65%] w-[65%] rounded-md border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient md:-right-4 ">
            <Image
              src="/projects/web-dev-tools.png"
              alt="Picture of the author"
              fill
              className="rounded-md delay-[650ms]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeImage
