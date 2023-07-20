"use client";
import { type FC, useState, useContext } from "react";
import axios from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/classMerge";

import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import ToastContext from "@/components/helpers/ToastProvider";

const contactForm = z.object({
  name: z
    .string()
    .min(2, "Must be at least 2 characters long.")
    .max(50, "Must be at most 50 characters long."),
  email: z
    .string()
    .email("Must be a valid email.")
    .max(100, "Must be at most 100 characters long."),
  message: z.string().min(10, "Must be at least 10 characters long."),
});
type ContactForm = z.infer<typeof contactForm>;

const ContactForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const context = useContext(ToastContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactForm),
  });

  function onSubmit(data: ContactForm) {
    try {
      setLoading(true);
      axios.post("/api/send-email", data);
      reset();
    } catch (err) {
    } finally {
      setLoading(false);
      context?.showToast(
        "✍️ Message Successfuly Sended, You will be contacted shortly.",
        3000,
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-4 flex flex-col"
    >
      <Field label="Name" error={errors.name} className="relative">
        {errors.name && (
          <Icons.alert className="w-5 h-5 absolute right-3 top-[35px] text-[#dc2626]" />
        )}
        <input
          type="text"
          placeholder="Yana Doe"
          {...register("name")}
          className={cn(
            "rounded-md p-2 bg-off-whit border-none outline-none text-grey-dark text-md  transition-colors duration-300",
            errors.name
              ? "ring-2 ring-[#dc2626]"
              : "focus:ring-2 focus:ring-[#4f46e5]",
          )}
        />
      </Field>
      <Field label="Email" error={errors.email} className="relative">
        {errors.email && (
          <Icons.alert className="w-5 h-5 absolute right-3 top-[35px] text-[#dc2626]" />
        )}
        <input
          type="text"
          placeholder="yanadoe@example.com"
          {...register("email")}
          className={cn(
            "rounded-md p-2 bg-off-whit border-none outline-none text-grey-dark text-md  transition-colors duration-300",
            errors.email
              ? "ring-2 ring-[#dc2626]"
              : "focus:ring-2 focus:ring-[#4f46e5]",
          )}
        />
      </Field>
      <Field label="Message" error={errors.message} className="pb-2 relative">
        {errors.message && (
          <Icons.alert className="w-5 h-5 absolute right-3 top-[35px] text-[#dc2626]" />
        )}
        <textarea
          placeholder="Your amazing message..."
          {...register("message")}
          className={cn(
            "rounded-md p-2 bg-off-whit border-none outline-none text-grey-dark text-md transition-colors duration-300 overflow-y-scroll h-[200px] resize-none hide-scrollbar",
            errors.message
              ? "ring-2 ring-[#dc2626]"
              : "focus:ring-2 focus:ring-[#4f46e5]",
          )}
        />
      </Field>

      <Button
        isLoading={loading}
        disabled={loading}
        className="w-full md:w-auto md:self-end "
        size="lg"
      >
        ✍️ Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
