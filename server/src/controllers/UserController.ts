import { Request, Response } from "express"
import UserService from "../services/UserService"
import UserSchema from "../schemas/UserSchema"

export default class UserController {
    constructor() {

    }

    static async login(req: Request, res: Response) {
        try {
            await UserSchema.login().validate(req.body)
            const result = UserService.login(req.body)
            if (result) return res.json({ message: "user successfully logged in" })
            else res.status(400).json({ message: "wrong credentials" })
        } catch (error) {
            return res.status(500).json({ message: "server error: could not authenticate user. Try again later" })
        }
    }
}