import { cn } from "@/lib/classMerge";
import type { HtmlHTMLAttributes, FC, ReactNode } from "react";

interface TextContainerProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const TextContainer: FC<TextContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p className={cn("text-md text-off-white/80 md:text-lg", className)}>
      {children}
    </p>
  );
};

export default TextContainer;
