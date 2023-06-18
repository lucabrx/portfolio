import { cn } from '@/lib/classMerge';
import { ReactNode, type FC, HTMLAttributes } from 'react';

interface HeroProps extends HTMLAttributes<HTMLDivElement> {
children: ReactNode;
}
interface HeroElementProps extends HTMLAttributes<HTMLTitleElement> {
  children: ReactNode;
}

export const HeroTitle: FC<HeroElementProps> = ({children,className}) => {
  return <h1 className={cn(className, 'text-[44px] leading-[48px]')}>{children}</h1>
} 

export const HeroSubtitle: FC<HeroElementProps> = ({children,className}) => {
  return <p className={cn(className, "text-lg ")}>{children}</p>
} 

export const Hero: FC<HeroProps> = ({children,className, ...props}) => {
  return (
<div className={cn(className)}> 
{children}
</div>
)
}

