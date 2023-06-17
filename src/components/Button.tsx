import Link from 'next/link';
import { ReactNode, type FC, HTMLAttributes } from 'react';
import { cva, VariantProps } from "class-variance-authority";


export const buttonClasses = cva(" rounded-md flex items-center", {
    variants: {
      variant: {
        primary: "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow] duration-300",
        secondary: "text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in "
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

const Button: FC<ButtonProps> = ({children,variant,size,className}) => {
  return (
<button  className={buttonClasses({variant,size,className})}> 
{children}
</button>
)
}

export default Button