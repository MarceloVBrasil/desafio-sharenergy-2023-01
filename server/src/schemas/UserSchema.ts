import { object, string } from "yup"

export default class UserSchema {
    constructor() { }

    static login() {
        return object().shape({
            username: string().required(),
            password: string().required()
        })
    }
}