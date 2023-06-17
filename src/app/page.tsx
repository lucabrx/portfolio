import Button, { buttonClasses } from '@/components/Button'
import Container from '@/components/Container'
import  {Hero, HeroSubtitle, HeroTitle } from '@/components/Hero'
import { cn } from '@/lib/classMerge'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
       <Hero className='w-full md:mt-4 flex flex-col justify-center items-center'>
          <HeroTitle className='mt-3 mb-1'>Hey, I'm <span className='text-transparent bg-clip-text bg-title-gradient'>Luka Brkovic</span>  <br/>
          <span className='hidden sms:block'>a self tought web developer</span>
          <span className='sms:hidden'>web developer</span>
          </HeroTitle>
          <HeroSubtitle className='sms:mt-4'>Feel free to explore my portfolio, where you'll find a collection of my  projects that demonstrate my skills and expertise. <span className='hidden md:block'>
          I'm always excited to take on new challenges.
          </span>
          </HeroSubtitle>

         
          <Link className={cn(buttonClasses({size: "md"}), "md:hidden flex gap-4 ")}   href="/">Contact  👋</Link>
          <Link className={cn(buttonClasses({size: "lg"}), "hidden md:flex gap-4 ")}   href="/">Contact  👋</Link>
  
        <Image 
        className='mt-8 md:mt-8 rounded-md'
        height={500} width={800} src="/hero.png" alt='hero image' />
       
        </Hero>
      </Container>
  )
}
