import { IClient, Client } from "../models/Client";

export default class ClientRepository {
    constructor() {

    }

    async getAll(): Promise<IClient[]> {
        return Client.find()
    }

    async getById(id: string): Promise<IClient | null> {
        return await Client.findById(id)
    }

    async add(client: IClient): Promise<IClient> {
        return await Client.create(client)
    }

    async update(id: string, client: IClient): Promise<IClient | null> {
        return await Client.findByIdAndUpdate(id, client)
    }

    async delete(id: string): Promise<string> {
        await Client.findByIdAndDelete(id)
        return id
    }

    async checkExistence(key: string, value: string): Promise<IClient | null> {
        return await Client.findOne({ [`${key}`]: value })
    }
}