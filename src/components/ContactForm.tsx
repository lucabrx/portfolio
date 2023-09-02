"use client"

import {useContext, useState, type FC} from "react"
import ToastContext from "@/components/helpers/ToastProvider"
import Button from "@/components/ui/Button"
import Field from "@/components/ui/Field"
import { Icons } from "@/components/ui/Icons"
import { cn } from "@/lib/classMerge"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { z } from "zod"
import ShouldRender from "@/components/helpers/ShouldRender";

const contactForm = z.object({
  name: z.string().min(2, "Must be at least 2 characters long.").max(50, "Must be at most 50 characters long."),
  email: z.string().email("Must be a valid email.").max(100, "Must be at most 100 characters long."),
  message: z.string().min(10, "Must be at least 10 characters long."),
})
type ContactForm = z.infer<typeof contactForm>

const ContactForm: FC = () => {
  const [loading, setLoading] = useState(false)
  const context = useContext(ToastContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactForm),
  })




  async function onSubmit(data: ContactForm) {
    try {
      setLoading(true)
      await axios.post("/api/send-email", data)
      reset()
    } catch (err) {
    } finally {
      setLoading(false)
      context?.showToast( "<h2 class='text-lg mb-1'>Message sent successfully!  🤝</h2>" +
          "<p class='text-off-white/60'>Thank you for your message! You will be contacted shortly.</p>"
          , 3000)
    }
  }

  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)} className="flex w-full flex-col space-y-4">
      <Field label="Name" error={errors.name} className="relative">
        {errors.name && <Icons.alert className="absolute right-3 top-[35px] h-5 w-5 text-[#dc2626]" />}
        <input
          type="text"
          placeholder="Yana Doe"
          aria-label="enter your name"
          {...register("name")}
          className={cn(
            "bg-off-whit rounded-md border-none p-2 text-md text-grey-dark outline-none  transition-colors duration-300",
            errors.name ? "ring-2 ring-[#dc2626]" : "focus:ring-2 focus:ring-[#4f46e5]"
          )}
        />
      </Field>
      <Field label="Email" error={errors.email} className="relative">
        {errors.email && <Icons.alert className="absolute right-3 top-[35px] h-5 w-5 text-[#dc2626]" />}
        <input
          type="text"
          aria-label="enter your email"
          placeholder="yanadoe@example.com"
          {...register("email")}
          className={cn(
            "bg-off-whit rounded-md border-none p-2 text-md text-grey-dark outline-none  transition-colors duration-300",
            errors.email ? "ring-2 ring-[#dc2626]" : "focus:ring-2 focus:ring-[#4f46e5]"
          )}
        />
      </Field>
      <Field label="Message" error={errors.message} className="relative pb-2">
        {errors.message && <Icons.alert className="absolute right-3 top-[35px] h-5 w-5 text-[#dc2626]" />}
        <textarea
          placeholder="Your amazing message..."
          {...register("message")}
          aria-label="enter your message"
          className={cn(
            "bg-off-whit hide-scrollbar h-[200px] resize-none overflow-y-scroll rounded-md border-none p-2 text-md text-grey-dark outline-none transition-colors duration-300",
            errors.message ? "ring-2 ring-[#dc2626]" : "focus:ring-2 focus:ring-[#4f46e5]"
          )}
        />
      </Field>

      <Button
        aria-label="send message button"
        isLoading={loading}
        disabled={loading}
        className="w-full md:w-auto md:self-end "
        size="lg"
      >
        <ShouldRender if={!loading}>
          <span className="mr-2" >✍️</span>
        </ShouldRender>
         Send Message
      </Button>
    </form>
  )
}

export default ContactForm
