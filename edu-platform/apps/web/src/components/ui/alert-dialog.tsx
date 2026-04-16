// apps/web/src/components/ui/alert-dialog.tsx

"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export const AlertDialog = AlertDialogPrimitive.Root
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger
export const AlertDialogPortal = AlertDialogPrimitive.Portal

type AlertDialogOverlayProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Overlay
>

type AlertDialogContentProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
>

type AlertDialogActionProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Action
>

type AlertDialogCancelProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Cancel
>

export function AlertDialogOverlay({ className, ...props }: AlertDialogOverlayProps) {
    return (
        <AlertDialogPrimitive.Overlay
            className={cn("fixed inset-0 bg-black/50", className)}
            {...props}
        />
    )
}

export function AlertDialogContent({ className, ...props }: AlertDialogContentProps) {
    return (
        <AlertDialogPortal>
            <AlertDialogOverlay />
            <AlertDialogPrimitive.Content
                className={cn("bg-white p-6 rounded-lg shadow-lg", className)}
                {...props}
            />
        </AlertDialogPortal>
    )
}

export const AlertDialogTitle = AlertDialogPrimitive.Title
export const AlertDialogDescription = AlertDialogPrimitive.Description

export function AlertDialogAction(props: AlertDialogActionProps) {
    return <Button asChild><AlertDialogPrimitive.Action {...props} /></Button>
}

export function AlertDialogCancel(props: AlertDialogCancelProps) {
    return <Button variant="outline" asChild><AlertDialogPrimitive.Cancel {...props} /></Button>
}
