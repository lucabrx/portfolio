"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, type FC, useEffect } from "react";

import { navigation } from "@/config/navbar";

import Button from "@/components/ui/Button";
import ShouldRender from "@/components/helpers/ShouldRender";
import { scrollToSection } from "@/lib/scrollToSection";
import { cn } from "@/lib/classMerge";

const Navbar: FC = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  //TODO fadeout animation

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "HIDDEN";
    }
    return () => {
      document.body.style.overflow = "AUTO";
    };
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20  ${
        isOpen
          ? "bg-background"
          : "backdrop-blur-[12px] bg-transparent border-transparent-white border-b"
      }`}
    >
      <div className="flex py-2 h-[56px] items-center justify-between container">
        <div className="flex gap-4 items-center justify-center">
          <button
            aria-label="Sending user to the top of the page"
            className="flex items-center"
            onClick={scrollToTop}
          >
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
          </button>

          <nav className="hidden md:flex">
            {navigation.map(({ name, section, offset }, i) => (
              <button
                onClick={(e) => scrollToSection(e, section, offset)}
                key={i}
                aria-label={`Link to ${name}`}
                className="text-lg ml-6 hover:text-grey transition-colors"
              >
                {name}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex justify-center items-center gap-2">
          <Button
            onClick={(e) => scrollToSection(e, "contact-section", 0)}
            size="md"
            aria-label={"Link to contact section"}
            className="hidden md:block"
          >
            Contact me
          </Button>

          <button
            aria-label="toggle user menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          <ShouldRender if={isOpen}>
            <div
              className={cn(
                "absolute top-[56px] z-[100] w-full h-[calc(100vh-56px)] bg-background inset-x-0 transition-opacity opacity-0",
                isOpen ? "animate-fade-in opacity-100" : "animate-fade-out opacity-0"
              )}
            >
              <div className="flex flex-col space-y-2 py-4 ">
                {navigation.map(({ name, section, offset }, i) => (
                  <button
                    aria-label={`Sending user to the  ${name}`}
                    onClick={(e) => {
                      scrollToSection(e, section, offset);
                      setIsOpen(false);
                    }}
                    key={i}
                    className="text-lg px-4 hover:text-grey transition-colors h-navigation-height flex items-center w-full border-b border-grey-dark"
                  >
                    {name}
                  </button>
                ))}
                <button
                  aria-label="Sending user to the contact section"
                  onClick={(e) => {
                    scrollToSection(e, "contact-section", 0);
                    setIsOpen(false);
                  }}
                  className="text-lg px-4 hover:text-grey transition-colors h-navigation-height flex items-center w-full border-b border-grey-dark"
                >
                  Contact
                </button>
              </div>
            </div>
          </ShouldRender>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
