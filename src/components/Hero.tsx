import { ReactNode, type FC } from 'react';

interface HeroProps {
children: ReactNode;
}
interface HeroElementProps {
  children: ReactNode;
}

export const HeroTitle: FC<HeroElementProps> = ({children}) => {
  return <h1 className='text-8xl my-6'>{children}</h1>
} 

export const HeroSubtitle: FC<HeroElementProps> = ({children}) => {
  return <p className='text-xl mb-12'>{children}</p>
} 

export const Hero: FC<HeroProps> = ({children}) => {
  return (
<div> 
{children}
</div>
)
}

