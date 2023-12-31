import AboutSection from "@/components/sections/AboutSection"
import ContactSection from "@/components/sections/ContactSection"
import HeroSection from "@/components/sections/HeroSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import SkillsSection from "@/components/sections/SkillsSection"
import { StarsIllustration } from "@/components/StarsIllustration"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div
        className="
mask-radial-faded pointer-events-none relative -z-[20] -my-[520px] h-[960px] overflow-hidden [--color:#7877C6] before:absolute
          before:inset-0 before:bg-radial-faded before:opacity-[0.4] after:absolute after:-left-1/2
          after:top-1/2 after:h-[42.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background md:-my-[570px] md:after:h-[142.8%] xl:h-[1020px]"
      >
        <StarsIllustration />
      </div>
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
