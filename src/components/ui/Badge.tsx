import { cn } from "@/lib/classMerge"
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-1 text-xs  outline-none ring-0 border-none ",
  {
    variants: {
      variant: {
        default: " bg-primary-gradient",
        secondary: "bg-[#18181b]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export default Badge
