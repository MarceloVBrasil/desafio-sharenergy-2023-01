import { Request, Response } from "express"
import UserService from "../services/UserService"

export default class UserController {
    constructor() {

    }

    static async login(req: Request, res: Response) {
        try {
            const result = UserService.login(req.body)
            if (result) return res.json({ message: "user successfully logged in" })
            else res.status(400).json({ message: "wrong credentials" })
        } catch (error) {
            return res.status(400).json({ message: "username and password are required" })
        }
    }
}