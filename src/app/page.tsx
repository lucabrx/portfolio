import Container from '@/components/Container'
import  {Hero, HeroSubtitle, HeroTitle } from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
       <Hero
        >
          <HeroTitle>Hey, I'm Luka Brkovic 👋 <br/> a self tought front-end developer</HeroTitle>
          <HeroSubtitle>Feel free to explore my portfolio, where you'll find a collection of my  projects that demonstrate my skills and expertise. I'm always excited to take on new challenges.</HeroSubtitle>
        <img src="/hero.png" alt='hero image' />
        </Hero>
      </Container>
  )
}
