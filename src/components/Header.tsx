import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';
import Container from './Container';
import Button from './Button';

interface HeaderProps {
  
}
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const Header: FC<HeaderProps> = ({}) => {
  return (
<header className='fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px] py-2'> 
<Container className="flex h-navigation-height items-center justify-between">
<Link className='flex items-center' href='/'>
  <Image src='/logo.svg' alt='logo' width={36} height={36} />
</Link>


<nav className='flex'>
  {
    navigation.map(({name, href}, i) => (
      <Link href={href} key={i} className='text-lg ml-6 hover:text-grey transition-colors'>
       {name}
       </Link>
    ))
  }
</nav>

<Button href='/' size="md" > Contact</Button>
</Container>
</header>

)
}

export default Header