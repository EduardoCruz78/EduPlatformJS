// apps/web/src/components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition",
    {
        variants: {
            variant: {
                default: "bg-black text-white hover:bg-black/80",
                outline: "border hover:bg-gray-100",
                ghost: "hover:bg-gray-100",
                destructive: "bg-red-600 text-white hover:bg-red-700",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-8 px-3 text-sm",
                lg: "h-11 px-6",
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