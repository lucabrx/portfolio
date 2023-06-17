import Link from 'next/link';
import { ReactNode, type FC } from 'react';
import { cva, VariantProps } from "class-variance-authority";


const buttonClasses = cva("relative rounded-md inline-flex items-center", {
    variants: {
      variant: {
        primary: "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow] duration-300",

      },
      size: {
        sm: "text-xs px-3 h-7",
        md: "text-sm px-4 h-8",
        lg: "text-md px-6 h-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  });
interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: ReactNode;
  href: string;
}

const Button: FC<ButtonProps> = ({children,href,variant,size}) => {
  return (
<Link href={href} className={buttonClasses({variant,size})}> 
{children}
</Link>
)
}

export default Button