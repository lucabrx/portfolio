"use client";

import Button from "@/components/ui/Button";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/classMerge";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Button
      variant="primary_without_glow"
      className={cn(
        "rounded-md p-0 bg-grey-dark z-10  fixed bottom-4 right-4",
        isVisible ? "block" : "hidden",
      )}
      onClick={scrollToTop}
    >
      <ArrowUp className="w-4 h-4 " />
    </Button>
  );
};

export default ScrollToTop;
