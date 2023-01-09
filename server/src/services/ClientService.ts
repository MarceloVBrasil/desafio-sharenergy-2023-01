import { IClient } from "../models/Client";

export default class ClientService {
    constructor() {

    }

    static async getAll() {
        return
    }

    static async getById(id: string) {
        return
    }

    static async add(client: IClient) {
        return
    }

    static async update(id: string, client: IClient) {
        return
    }

    static async delete(id: string) {
        return
    }

    private static async checkIfCpfExists(cpf: string) {
        return
    }

    private static async checkIfEmailExists(email: string) {
        return
    }

    private static async checkIfCpfBelongsToSomeoneElse(cpf: string, myId: string) {
        return
    }

    private static async checkIfEmailBelongsToSomeoneElse(email: string, myId: string) {
        return
    }
}