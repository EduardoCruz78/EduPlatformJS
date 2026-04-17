// apps/web/src/components/ui/input.tsx

import * as React from "react"
import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-2xl border border-white/8 bg-[#1a1a1a] px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:border-[rgba(255,198,39,0.72)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(255,198,39,0.2)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = "Input"

export { Input }
