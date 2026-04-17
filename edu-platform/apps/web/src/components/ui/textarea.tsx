"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={cn(
                    "flex min-h-[110px] w-full rounded-3xl border border-white/8 bg-[#1a1a1a] px-4 py-3 text-sm text-slate-100",
                    "placeholder:text-slate-500",
                    "focus-visible:border-[rgba(255,198,39,0.72)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(255,198,39,0.2)]",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                {...props}
            />
        )
    }
)

Textarea.displayName = "Textarea"

export { Textarea }
