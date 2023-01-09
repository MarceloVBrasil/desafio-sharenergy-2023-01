import mongoose, { Schema } from "mongoose"
import { v4 as uuidV4 } from "uuid"
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

const ClientSchema = new Schema<IClient>({
    _id: { type: String, default: uuidV4() },
    cpf: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true }
    },
})

const Client = mongoose.model('client', ClientSchema)

export { Client, IClient }