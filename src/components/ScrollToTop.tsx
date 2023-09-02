"use client"

import { useEffect, useState } from "react"
import Button from "@/components/ui/Button"
import { cn } from "@/lib/classMerge"
import { ArrowUp } from "lucide-react"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    if (scrollTop > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <Button
      variant="primary_without_glow"
      className={cn("fixed bottom-4 right-4 z-10  rounded-md bg-grey-dark p-0", isVisible ? "block" : "hidden")}
      onClick={scrollToTop}
    >
      <ArrowUp className="h-4 w-4 " />
    </Button>
  )
}

export default ScrollToTop
