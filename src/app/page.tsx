import Container from '@/components/Container'
import  {Hero, HeroSubtitle, HeroTitle } from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
       <Hero className='w-full mt-4 md:mt-12 flex flex-col justify-center items-center'>
          <HeroTitle className='mt-3 mb-1'>Hey, I'm <span className='text-transparent bg-clip-text bg-title-gradient'>Luka Brkovic</span> 👋 <br/>
          <span className='hidden md:block'> a self tought front-end developer</span>
          </HeroTitle>
          <HeroSubtitle className='md:mt-4'>Feel free to explore my portfolio, where you'll find a collection of my  projects that demonstrate my skills and expertise. <span className='hidden md:block'>
          I'm always excited to take on new challenges.
          </span>
          </HeroSubtitle>
        
        <Image 
        className='mt-4 md:mt-8 rounded-md'
        height={500} width={800} src="/hero.png" alt='hero image' />
       
        </Hero>
      </Container>
  )
}
