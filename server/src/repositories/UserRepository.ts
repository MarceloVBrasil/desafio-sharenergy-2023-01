import User from "../models/User"
import bcrypt from "bcryptjs"

export default class UserRepository {
    private users: User[]

    constructor() {
        this.users = [{ username: 'desafiossharenergy', password: bcrypt.hashSync('sh@r3n3rgy') }]
    }

    login(user: User): User | undefined {
        const { username, password } = user
        const foundUser = this.users.find(user => user.username === username && bcrypt.compareSync(password, user.password))
        return foundUser
    }
}