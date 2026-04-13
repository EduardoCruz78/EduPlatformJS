"use client"

import * as React from "react"
import {
    Controller,
    FormProvider,
    useFormContext,
    type ControllerProps,
    type FieldPath,
    type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

// ================= ROOT =================
export const Form = FormProvider

// ================= FIELD =================
type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
    {} as FormFieldContextValue
)

export function FormField<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
>({ ...props }: ControllerProps<TFieldValues, TName>) {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    )
}

// ================= HOOK =================
function useFormField() {
    const fieldContext = React.useContext(FormFieldContext)
    const { getFieldState, formState } = useFormContext()

    const fieldState = getFieldState(fieldContext.name, formState)

    return {
        name: fieldContext.name,
        ...fieldState,
    }
}

// ================= ITEM =================
export function FormItem({
                             className,
                             ...props
                         }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("space-y-2", className)} {...props} />
    )
}

// ================= LABEL =================
export function FormLabel({
                              className,
                              ...props
                          }: React.ComponentProps<typeof Label>) {
    return <Label className={cn(className)} {...props} />
}

// ================= CONTROL =================
export function FormControl({
                                ...props
                            }: React.HTMLAttributes<HTMLDivElement>) {
    return <div {...props} />
}

// ================= DESCRIPTION =================
export function FormDescription({
                                    className,
                                    ...props
                                }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    )
}

// ================= MESSAGE =================
export function FormMessage({
                                className,
                                ...props
                            }: React.HTMLAttributes<HTMLParagraphElement>) {
    const { error } = useFormField()

    if (!error) return null

    return (
        <p
            className={cn("text-sm font-medium text-red-600", className)}
            {...props}
        >
            {String(error.message)}
        </p>
    )
}