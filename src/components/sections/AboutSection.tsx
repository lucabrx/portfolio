import Image from 'next/image';
import { type FC } from 'react';

interface AboutSectionProps {
  
}

const AboutSection: FC<AboutSectionProps> = ({}) => {
  return (
<div className='mt-8 md:mt-16 lg:mt-24 space-y-3 max-w-[880px] mx-auto w-full'> 
<h2 className='text-3xl text-left  font-medium font-serif md:text-4xl'>Meet me  🫱</h2>

<div className='grid grid-cols-1 md:grid-cols-2'>
<div>
<p className='text-md text-off-white/80 md:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus iste possimus non. Qui, ducimus praesentium aliquid, amet rem dicta mollitia consectetur, veniam eveniet id laudantium?</p>

<p className='text-md text-off-white/80 md:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus iste possimus non. Qui, ducimus praesentium aliquid, amet rem dicta mollitia consectetur, veniam eveniet id laudantium?</p>

<p className='text-md text-off-white/80 md:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus iste possimus non. Qui, ducimus praesentium aliquid, amet rem dicta mollitia consectetur, veniam eveniet id laudantium?</p>
</div>

<Image src="/profile.png" alt="potrait" width={450} height={450} className='rounded-md drop-shadow-sm'  />
</div>


</div>
)
}

export default AboutSection