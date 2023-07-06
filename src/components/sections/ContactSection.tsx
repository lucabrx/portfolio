"use client"
import { useState, type FC } from 'react';
import axios from 'axios';
import Button from '../ui/Button';
interface ContactSectionProps {
  
}

const ContactSection: FC<ContactSectionProps> = ({}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e: any) {
        e.preventDefault()
        axios.post('/api/send-email', {name, email, message})
    }
    
  return (
<div className="flex flex-col items-center justify-center w-full mt-10">
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" className="w-1/2 p-2 m-2 border-2 text-background rounded-md" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="w-1/2 p-2 m-2 border-2 text-background rounded-md" onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Message" className="w-1/2 p-2 m-2 border-2 text-background rounded-md" onChange={(e) => setMessage(e.target.value)} />
        <Button className='w-full'>Send</Button>
    </form>
</div>
)
}

export default ContactSection