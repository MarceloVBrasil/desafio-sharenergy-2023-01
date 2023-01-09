import React from "react"

export type InputType = {
    label: string
    type: string
    error?: string
    fontSize?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    searchTerm?: string
    placeholder?: string
    value?: string | number
}