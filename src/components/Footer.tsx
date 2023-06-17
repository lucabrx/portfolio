import { type FC } from 'react';
import Container from './Container';
import Image from 'next/image';
import { Facebook, Github, Instagram, Send } from 'lucide-react';
import Button from './Button';
import IconContainer from './IconContainer';

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-12 border-t border-transparent-white py-4 text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
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
    </Container>
    </footer>
)
}

export default Footer