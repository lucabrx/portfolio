import { type FC } from "react"
import ShouldRender from "@/components/helpers/ShouldRender"
import { cn } from "@/lib/classMerge"
import { type FieldError } from "react-hook-form"

interface FieldProps {
  children: React.ReactNode
  label: string
  error?: FieldError
  className?: string
}

const Field: FC<FieldProps> = ({ error, children, label, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      <label className="text-lg">{label}</label>
      {children}
      <ShouldRender if={error}>
        <p className="text-sm text-[#dc2626]">{error?.message}</p>
      </ShouldRender>
    </div>
  )
}

export default Field
