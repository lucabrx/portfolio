import Link from 'next/link';
import { ReactNode, type FC, HTMLAttributes } from 'react';
import { cva, VariantProps } from "class-variance-authority";


export const buttonClasses = cva(" rounded-md inline-flex items-center justify-center cursor-pointer", {
    variants: {
      variant: {
        primary: "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow] duration-300 ",
        primary_without_glow: "bg-primary-gradient  duration-300 hover:bg-background",
        secondary: "text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in",
        github : "shadow-sm hover:bg-[#27272a] bg-[#27272a]/70 text-[##fefffe]",

      },
      size: {
        sm: "text-xs px-3 h-7",
        md: "text-sm px-4 h-8",
        lg: "text-md px-6 h-10",
        icon_sm: "p-1"
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  });
interface ButtonProps extends VariantProps<typeof buttonClasses>, HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({children,variant,size,className,...props}) => {
  return (
<button {...props} className={buttonClasses({variant,size,className})}> 
{children}
</button>
)
}

export default Button