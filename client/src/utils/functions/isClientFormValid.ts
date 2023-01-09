import { ClientType } from "../../types/client"

export function isClientFormValid(error: ClientType) {
    if (error.cpf !== '') return false
    if (error.fullName !== '') return false
    if (error.email !== '') return false
    if (error.phone !== '') return false
    if (error.address.street !== '') return false
    if (error.address.city !== '') return false
    if (error.address.state !== '') return false
    return true
}