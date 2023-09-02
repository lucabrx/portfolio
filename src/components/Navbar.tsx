"use client"

import { useEffect, useState, type FC } from "react"
import Image from "next/image"
import ShouldRender from "@/components/helpers/ShouldRender"
import Button from "@/components/ui/Button"
import { navigation } from "@/config/navbar"
import { cn } from "@/lib/classMerge"
import { scrollToSection } from "@/lib/scrollToSection"
import { Menu, X } from "lucide-react"

const Navbar: FC = ({}) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "HIDDEN"
    }
    return () => {
      document.body.style.overflow = "AUTO"
    }
  }, [isOpen])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <header
      className={`fixed left-0 top-0 z-20 w-full  ${
        isOpen ? "bg-background" : "border-b border-transparent-white bg-transparent backdrop-blur-[12px]"
      }`}
    >
      <div className="container flex h-[56px] items-center justify-between py-2">
        <div className="flex items-center justify-center gap-4">
          <button aria-label="Sending user to the top of the page" className="flex items-center" onClick={scrollToTop}>
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
          </button>

          <nav className="hidden md:flex">
            {navigation.map(({ name, section, offset }, i) => (
              <button
                onClick={(e) => scrollToSection(e, section, offset)}
                key={i}
                aria-label={`Link to ${name}`}
                className="ml-6 text-lg transition-colors hover:text-grey"
              >
                {name}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Button
            onClick={(e) => scrollToSection(e, "contact-section", 0)}
            size="md"
            aria-label={"Link to contact section"}
            className="hidden md:block"
          >
            Contact me
          </Button>

          <button aria-label="toggle user menu" onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>

          <ShouldRender if={isOpen}>
            <div
              className={cn(
                "absolute inset-x-0 top-[56px] z-[100] h-[calc(100vh-56px)] w-full bg-background opacity-0 transition-opacity",
                isOpen ? "animate-fade-in opacity-100" : "animate-fade-out opacity-0"
              )}
            >
              <div className="flex flex-col space-y-2 py-4 ">
                {navigation.map(({ name, section, offset }, i) => (
                  <button
                    aria-label={`Sending user to the  ${name}`}
                    onClick={(e) => {
                      scrollToSection(e, section, offset)
                      setIsOpen(false)
                    }}
                    key={i}
                    className="flex h-navigation-height w-full items-center border-b border-grey-dark px-4 text-lg transition-colors hover:text-grey"
                  >
                    {name}
                  </button>
                ))}

                <button
                  aria-label="Sending user to the contact section"
                  onClick={(e) => {
                    scrollToSection(e, "contact-section", 0)
                    setIsOpen(false)
                  }}
                  className="flex h-navigation-height w-full items-center border-b border-grey-dark px-4 text-lg transition-colors hover:text-grey"
                >
                  Contact
                </button>
              </div>
            </div>
          </ShouldRender>
        </div>
      </div>
    </header>
  )
}

export default Navbar
