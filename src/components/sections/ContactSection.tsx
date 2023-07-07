"use client"
import { useState, type FC } from 'react';
import axios from 'axios';
import Button from '../ui/Button';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/classMerge';
import Image from 'next/image';
interface ContactSectionProps {
  
}

const ContactSection: FC<ContactSectionProps> = ({}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });

    function handleSubmit(e: any) {
        e.preventDefault()
        axios.post('/api/send-email', {name, email, message})
    }
    
  return ( 
    <>
  <div ref={ref}  className='w-full  md:mt-8  '>
   
    <h2 className={cn("w-full text-center lg:text-4xl xl:text-5xl text-3xl font-semibold opacity-0 pt-8 pb-4", inView ? "animate-fade-in" : "")}>Say Hello 🤝</h2>
  <div className='grid grid-cols-1 md:grid-cols-[40%,1fr] container items-stretch '>
  <Image src="/contact.svg" alt="potrait" width={350} height={350} className={cn('md:block hidden rounded-md drop-shadow-sm opacity-0', inView ? "animate-fade-in [--animation-delay:400ms]" : "")}  />

  <div className="flex flex-col items-center justify-center w-full ">
    <form onSubmit={handleSubmit} className='w-full'>
        <input type="text" placeholder="Name" className=" p-2 border-2 my-2 text-background rounded-md w-full" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="w-full p-2 my-2  border-2 text-background rounded-md" onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Message" className="w-full p-2 my-2 border-2 text-background rounded-md" onChange={(e) => setMessage(e.target.value)} />
        <Button className='w-full'>Send</Button>
    </form>
</div>

  </div> 
  </div> 
  <div className="  mask-radial-faded pointer-events-none relative -z-[20] overflow-hidden h-[900px] -mt-[870px] md:-mt-[850px] 
          [--color:#7877C6] before:absolute before:inset-x-0 before:-inset-y-[100px] before:bg-radial-faded before:opacity-[0.4]
          after:absolute after:top-full after:-left-1/2  after:w-[200%]   after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background after:h-full" />
  </>

)
}

export default ContactSection

