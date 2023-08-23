import { cn } from "@/lib/classMerge";
import type { HtmlHTMLAttributes, FC, ReactNode } from "react";

interface TextContainerProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const TextContainer: FC<TextContainerProps> = ({ className, children }) => {
  return (
    <p className={cn("text-md text-off-white/70 md:text-lg", className)}>
      {children}
    </p>
  );
};

export default TextContainer;
