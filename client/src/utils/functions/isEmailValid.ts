import { validate } from "email-validator"

export function isEmailValid(email: string): boolean {
    return validate(email)
}