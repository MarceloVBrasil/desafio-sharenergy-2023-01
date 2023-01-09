import { IClient } from "../models/Client";
import ClientRepository from "../repositories/ClientRepository";

const clientRepository = new ClientRepository()

export default class ClientService {
    constructor() {

    }

    static async getAll() {
        return clientRepository.getAll()
    }

    static async getById(id: string) {
        return clientRepository.getById(id)
    }

    static async add(client: IClient) {
        const cpfExists = await this.checkIfCpfExists(client.cpf)
        if (cpfExists) return 'cpf already exists'
        const emailsExists = await this.checkIfEmailExists(client.email)
        if (emailsExists) return 'email already exists'

        return await clientRepository.add(client)
    }

    static async update(id: string, client: IClient) {
        const cpfBelongsToSomeoneElse = await this.checkIfCpfBelongsToSomeoneElse(client.cpf, id)
        if (cpfBelongsToSomeoneElse) return 'cpf already taken'
        const emailBelongsToSomeoneElse = await this.checkIfEmailBelongsToSomeoneElse(client.email, id)

        return clientRepository.update(id, client)
    }

    static async delete(id: string) {
        return await clientRepository.delete(id)
    }

    private static async checkIfCpfExists(cpf: string): Promise<boolean> {
        const cpfExists = await clientRepository.checkExistence('cpf', cpf)
        return cpfExists ? true : false
    }

    private static async checkIfEmailExists(email: string): Promise<boolean> {
        const emailExists = await clientRepository.checkExistence('email', email)
        return emailExists ? true : false
    }

    private static async checkIfCpfBelongsToSomeoneElse(cpf: string, myId: string): Promise<boolean> {
        let cpfAlreadyExists: boolean = false
        const client = await clientRepository.checkExistence('cpf', cpf)
        if (client && client._id !== myId) cpfAlreadyExists = true
        return cpfAlreadyExists
    }

    private static async checkIfEmailBelongsToSomeoneElse(email: string, myId: string) {
        let emailAlreadyExists: boolean = false
        const client = await clientRepository.checkExistence('email', email)
        if (client && client._id !== myId) emailAlreadyExists = true
        return emailAlreadyExists
    }
}