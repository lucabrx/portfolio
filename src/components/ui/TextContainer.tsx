import type { FC, HtmlHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/classMerge"

interface TextContainerProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

const TextContainer: FC<TextContainerProps> = ({ className, children }) => {
  return <p className={cn("text-md text-off-white/70 md:text-lg", className)}>{children}</p>
}

export default TextContainer
