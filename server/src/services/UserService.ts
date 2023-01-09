import IUser from "../models/User";
import UserRepository from "../repositories/UserRepository";

const userRepository = new UserRepository()

export default class UserService {
    constructor() {

    }

    static login(user: IUser): IUser | undefined {
        return userRepository.login(user)
    }
}