"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
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

export const Form = FormProvider

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
    {} as FormFieldContextValue
)

type FormItemContextValue = {
    id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
    {} as FormItemContextValue
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

function useFormField() {
    const fieldContext = React.useContext(FormFieldContext)
    const itemContext = React.useContext(FormItemContext)
    const { getFieldState, formState } = useFormContext()

    if (!fieldContext.name) {
        throw new Error("useFormField must be used within <FormField>")
    }

    const fieldState = getFieldState(fieldContext.name, formState)
    const { id } = itemContext

    return {
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    }
}

export function FormItem({
                             className,
                             ...props
                         }: React.HTMLAttributes<HTMLDivElement>) {
    const id = React.useId()

    return (
        <FormItemContext.Provider value={{ id }}>
            <div className={cn("space-y-2", className)} {...props} />
        </FormItemContext.Provider>
    )
}

export function FormLabel({
                              className,
                              ...props
                          }: React.ComponentProps<typeof Label>) {
    const { error, formItemId } = useFormField()

    return (
        <Label
            className={cn(error && "text-destructive", className)}
            htmlFor={formItemId}
            {...props}
        />
    )
}

export function FormControl({
                                ...props
                            }: React.ComponentProps<typeof Slot>) {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

    return (
        <Slot
            id={formItemId}
            aria-describedby={
                error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId
            }
            aria-invalid={Boolean(error)}
            {...props}
        />
    )
}

export function FormDescription({
                                    className,
                                    ...props
                                }: React.HTMLAttributes<HTMLParagraphElement>) {
    const { formDescriptionId } = useFormField()

    return (
        <p
            id={formDescriptionId}
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    )
}

export function FormMessage({
                                className,
                                ...props
                            }: React.HTMLAttributes<HTMLParagraphElement>) {
    const { error, formMessageId } = useFormField()

    if (!error) return null

    return (
        <p
            id={formMessageId}
            className={cn("text-sm font-medium text-red-600", className)}
            {...props}
        >
            {String(error.message)}
        </p>
    )
}
