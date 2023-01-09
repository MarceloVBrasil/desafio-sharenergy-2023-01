import { Request, Response } from "express";
import { v4 as uuidV4 } from "uuid"
import ClientService from "../services/ClientService";
import ClientSchema from "../schemas/ClientSchema";

export default class ClientController {
    constructor() {

    }

    static async getAll(req: Request, res: Response) {
        try {
            const result = await ClientService.getAll()
            res.json(result)
        } catch (error) {
            res.status(400).json({ message: error })
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            await ClientSchema.getById().validate(req.params)
            const result = await ClientService.getById(req.params.id)
            res.json(result)
        } catch (error) {
            res.status(400).json({ message: error })
        }
    }

    static async add(req: Request, res: Response) {
        try {
            await ClientSchema.add().validate(req.body)
            req.body.id = uuidV4()
            const result = await ClientService.add(req.body)
            if (typeof result === 'string') res.status(400).json({ message: result })
            else res.json(result)
        } catch (error) {
            res.status(400).json({ message: error })
        }
    }

    static async update(req: Request, res: Response) {
        try {
            await ClientSchema.update().validate(req.params)
            const result = await ClientService.update(req.params.id, req.body)
            if (typeof result === 'string') res.status(400).json({ message: result })
            else res.json(result)
        } catch (error) {
            res.status(400).json({ message: error })
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            await ClientSchema.delete().validate(req.params)
            const result = await ClientService.delete(req.params.id)
            res.json(result)
        } catch (error) {
            res.status(400).json({ message: error })
        }
    }
}