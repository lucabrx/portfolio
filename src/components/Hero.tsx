import { cn } from '@/lib/classMerge';
import { ReactNode, type FC, HTMLAttributes } from 'react';

interface HeroProps extends HTMLAttributes<HTMLDivElement> {
children: ReactNode;
}
interface HeroElementProps extends HTMLAttributes<HTMLTitleElement> {
  children: ReactNode;
}

export const HeroTitle: FC<HeroElementProps> = ({children,className}) => {
  return <h1 className={cn(className, 'text-5xl md:text-7xl leading-[48px] md:text-center')}>{children}</h1>
} 

export const HeroSubtitle: FC<HeroElementProps> = ({children,className}) => {
  return <p className={cn(className, "text-md md:text-xl mb-4 text-off-white/70 md:text-center")}>{children}</p>
} 

export const Hero: FC<HeroProps> = ({children,className, ...props}) => {
  return (
<div className={cn(className)}> 
{children}
</div>
)
}

