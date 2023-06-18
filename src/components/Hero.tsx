import { cn } from '@/lib/classMerge';
import { ReactNode, type FC, HTMLAttributes } from 'react';

interface HeroProps extends HTMLAttributes<HTMLDivElement> {
children: ReactNode;
}
interface HeroElementProps extends HTMLAttributes<HTMLTitleElement> {
  children: ReactNode;
}

export const HeroTitle: FC<HeroElementProps> = ({children,className}) => {
  return <h1 className={cn(className, 'text-5xl leading-[42px] text-left w-full sms:text-center sms:text-6xl lg:text-7xl')}>{children}</h1>
} 

export const HeroSubtitle: FC<HeroElementProps> = ({children,className}) => {
  return <p className={cn(className, "text-lg w-full text-left sms:text-center sms:text-xl ")}>{children}</p>
} 

export const Hero: FC<HeroProps> = ({children,className, ...props}) => {
  return (
<div className={cn(className)}> 
{children}
</div>
)
}

