// apps/web/src/components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 rounded-xl border text-sm font-extrabold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(255,198,39,0.2)] disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground shadow-[0_8px_26px_rgba(255,198,39,0.16)] hover:-translate-y-px hover:bg-[#e5b120]",
                outline:
                    "border-[rgba(168,124,29,0.4)] bg-[hsl(var(--card))] text-slate-100 hover:border-[rgba(255,198,39,0.72)] hover:bg-[#101010]",
                ghost:
                    "border-transparent bg-transparent text-slate-300 hover:bg-white/5 hover:text-white",
                destructive:
                    "border-red-500/30 bg-red-600 text-white shadow-[0_12px_24px_rgba(220,38,38,0.25)] hover:bg-red-500",
            },
            size: {
                default: "h-11 px-5 py-2.5",
                sm: "h-9 px-4 text-xs",
                lg: "h-12 px-7 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

type ButtonProps = React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
    asChild?: boolean
}

function Button({
                    className,
                    variant,
                    size,
                    asChild = false,
                    ...props
                }: ButtonProps) {
    const Comp = asChild ? Slot : "button"

    return (
        <Comp
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        />
    )
}

export { Button }
