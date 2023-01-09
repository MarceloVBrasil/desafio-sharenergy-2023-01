interface IClient {
    cpf: string
    email: string
    address: address
    fullName: string
    phone: string
    _id: string
}

type address = {
    street: string,
    city: string
    state: "AC" | "AL" | "AP" | "AM" | "BA" | "CE" | "DF" | "ES" |
    "GO" | "MA" | "MT" | "MS" | "MG" | "PA" | "PB" | "PR" | "PE" |
    "PI" | "RJ" | "RN" | "RS" | "RO" | "RR" | "SC" | "SE" | "SP" |
    "TO"
}