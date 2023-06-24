"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, type FC, useEffect } from 'react';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import ShouldRender from './ShouldRender';
import { motion } from 'framer-motion';
import { Facebook, Github, Instagram, Send } from 'lucide-react';

interface HeaderProps {
  
}
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/' },
  { name: 'Projects', href: '/' },
  { name: 'Contact', href: '/' },
]

const socials = [
  { name: 'Facebook', href: '/', icon: <Facebook size="20" /> },
  { name: 'Github', href: '/', icon: <Github size="20" /> },
  { name: 'Instagram', href: '/', icon: <Instagram size="20" /> },
  { name: 'Email', href: '/', icon: <Send size="20" /> },
]

const Navbar: FC<HeaderProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(isOpen === true) {
        document.body.style.overflow = 'HIDDEN'
    }
return () => {
    document.body.style.overflow = 'AUTO'
}
}, [isOpen]);

function handleClick() {
setIsOpen(!isOpen)
}

  return (
<header className={`fixed top-0 left-0 w-full z-20  ${isOpen ? "bg-background" : "backdrop-blur-[12px] bg-transparent border-transparent-white border-b"}`}> 
<div className="flex py-2 h-[56px] items-center justify-between container">
<Link className='flex items-center' href='/'>
  <Image src='/logo.svg' alt='logo' width={32} height={32} />
</Link>


<nav className='hidden md:flex'>
  {
    navigation.map(({name, href}, i) => (
      <Link href={href} key={i} className='text-lg ml-6 hover:text-grey transition-colors'>
       {name}
       </Link>
    ))
  }
</nav>

<div className='flex justify-center items-center gap-2'>

<div className="hidden md:flex space-x-2 text-off-white">
          {
            socials.map(({name, href, icon}, i) => (
              <Button variant="secondary" size="icon_sm"  key={i}>
                {icon}
              </Button>
            ))
          }
        </div>

<button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
{isOpen?  <X className='w-8 h-8' /> : <Menu className='w-8 h-8' />}
</button>

<ShouldRender if={isOpen}>
<motion.div 
 initial={{opacity: 0, y: 0}}
 animate={{opacity: 1, y: 0}} 
 exit={{opacity: 0, y: 0}} 
 transition={{duration: 0.5}}
className='absolute top-[56px] w-full h-[calc(100vh-56px)] bg-background inset-x-0'>
<div className='flex flex-col space-y-2 py-4 '>
  {
    navigation.map(({name, href}, i) => (
      <Link onClick={handleClick} href={href} key={i} className='text-lg px-4 hover:text-grey transition-colors h-navigation-height flex items-center w-full border-b border-grey-dark'>
       {name}
       </Link>
    ))
  }
</div>
</motion.div>
</ShouldRender>
</div>
</div>
</header>

)
}

export default Navbar