"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, type FC, useEffect } from 'react';
import Container from './Container';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import ShouldRender from './ShouldRender';
interface HeaderProps {
  
}
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const Header: FC<HeaderProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(isOpen === true) {
        document.body.style.overflow = 'HIDDEN'
    }
return () => {
    document.body.style.overflow = 'AUTO'
}
}, [isOpen])

  return (
<header className={`fixed top-0 left-0 w-full border-b  backdrop-blur-[12px] py-2 ${isOpen ? "bg-background" : "backdrop-blur-[12px] border-transparent-white"}`}> 
<Container className="flex h-navigation-height items-center justify-between">
<Link className='flex items-center' href='/'>
  <Image src='/logo.svg' alt='logo' width={36} height={36} />
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

<Button href='/' size="md" > Contact</Button>

<button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
{isOpen?  <X className='w-8 h-8' /> : <Menu className='w-8 h-8' />}
</button>

<ShouldRender if={isOpen}>
<div className='fixed top-[64px] w-full h-[calc(100vh-64px)] bg-background inset-x-0 overflow-hidden'>
<div className='flex flex-col space-y-2 py-4'>
  {
    navigation.map(({name, href}, i) => (
      <Link href={href} key={i} className='text-lg px-4 hover:text-grey transition-colors h-navigation-height flex items-center w-full border-b border-grey-dark'>
       {name}
       </Link>
    ))
  }
</div>
</div>
</ShouldRender>
</div>
</Container>
</header>

)
}

export default Header