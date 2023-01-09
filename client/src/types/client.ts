export type ClientType = {
    id?: string
    cpf: string
    email: string
    address: address
    phone: string
    fullName: string
}

type address = {
    street: string
    city: string
    state: string
}