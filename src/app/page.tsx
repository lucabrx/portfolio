import { StarsIllustration } from '@/components/StarsIllustration'
import HeroSection from '@/components/sections/HeroSection'
import SkillsContainer from '@/components/sections/SkillsContainer';
const accordions = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' },
];

export default function Home() {
  return (
    <>
    <HeroSection />
    <div className="
          mask-radial-faded pointer-events-none relative -z-[20] -my-[520px] md:-my-[570px] h-[960px] overflow-hidden
          [--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]
          after:absolute after:top-1/2 after:-left-1/2 md:after:h-[142.8%] after:w-[200%] after:h-[42.8%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background">
      <StarsIllustration />
    </div>
    <SkillsContainer />
    </>
  )
}
