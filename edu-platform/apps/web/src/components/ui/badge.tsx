// apps/web/src/components/ui/badge.tsx

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-[rgba(255,198,39,0.42)] bg-[rgba(255,198,39,0.12)] text-[#ffd66a] hover:bg-[rgba(255,198,39,0.16)]",
        secondary:
          "border-white/8 bg-[#111111] text-slate-300 hover:bg-[#161616]",
        destructive:
          "border-transparent bg-red-600 text-white hover:bg-red-500",
        outline: "border-[rgba(168,124,29,0.38)] bg-transparent text-slate-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
