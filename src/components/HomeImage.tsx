import { type FC } from 'react';
interface HomeImageProps {
  
}




const HomeImage: FC<HomeImageProps> = ({}) => {

  return (
<div  className=" [perspective:2000px] rounded-md max-w-[880px] pb-[250px]">
<div className={`
relative rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient
 animate-image-rotate
before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)] before:animate-image-glow`}>
  <div className='absolute inset-0 z-30 bg-glass-gradient2 blur-sm'></div>

<svg
    className={
      `
      absolute top-0 left-0 h-full w-full
      [&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1] [&_path]:animate-sketch-lines`}
    width="100%"
    viewBox="0 0 1499 778"
    fill="none">
    <path pathLength="1" d="M1500 72L220 72"></path>
    <path pathLength="1" d="M1500 128L220 128"></path>
    <path pathLength="1" d="M1500 189L220 189"></path>
    <path pathLength="1" d="M220 777L220 1"></path>
    <path pathLength="1" d="M538 777L538 128"></path>
</svg>

<img className={`relative rounded-md z-10  transition-opacity delay-[650ms] opacity-100 md:hidden `}  
src="/hero2.png" alt='hero image' />

<img className={`relative rounded-md z-10  transition-opacity delay-[650ms] opacity-100 hidden md:block lg:hidden `}  
src="/hero.png" alt='hero image' />

<img className={`relative rounded-md z-10  transition-opacity delay-[650ms] opacity-100 hidden  lg:block `}  
src="/hero3.png" alt='hero image' />

</div>

</div>
)
}

export default HomeImage