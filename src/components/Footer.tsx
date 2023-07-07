import { type FC } from 'react';
import Image from 'next/image';
import { Facebook, Github, Instagram, Send } from 'lucide-react';
import IconContainer from './ui/IconContainer';

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="border-t border-transparent-white py-4 text-sm">
    <div className="flex flex-col justify-between lg:flex-row container">
        <div className="flex h-full w-full justify-between  items-center gap-4 ">
          <div className="flex items-end text-grey gap-4">
          <Image src='/logo.svg' alt='logo' width={32} height={32} />
             Luka Brkovic
          </div>
          <div className="mt-auto flex space-x-2 text-grey">
           <IconContainer>
            <Send size="20" />
            </IconContainer>
           <IconContainer>
            <Facebook size="20" />
            </IconContainer>
           <IconContainer>
            <Github size="20" />
            </IconContainer>
           <IconContainer>
           <Instagram size="20" />
           </IconContainer>
          </div>
        </div>
    </div>
    </footer>
)
}

export default Footer