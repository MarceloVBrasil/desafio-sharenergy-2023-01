import { object, string } from "yup"
import { isCPFValid } from "../utils/validators/isCPFValid"
import { isFullNameValid } from "../utils/validators/isFullNameValid"
import { isStateValid } from "../utils/validators/isStateValid"
import { isPhoneValid } from "../utils/validators/isPhoneValid"
import { isCityValid } from "../utils/validators/isCityValid"
import { isStreetValid } from "../utils/validators/isStreetValid"

export default class ClientSchema {
    constructor() { }

    static getAll() {

    }

    static getById() {
        return object().shape({
            id: string().required().uuid()
        })
    }

    static add() {
        return object().shape({
            cpf: string().required().test('cpfIsValid', (cpf) => isCPFValid(cpf)),
            fullName: string().required().test('fullName', (fullName) => isFullNameValid(fullName)),
            phone: string().required().test('phoneIsValid', (phone) => isPhoneValid(phone)),
            email: string().required().email(),
            address: object().required().shape({
                street: string().required().test('streetValid', (street) => isStreetValid(street)),
                city: string().required().test('cityValid', (city) => isCityValid(city)),
                state: string().required().test('stateIsValid', (state) => isStateValid(state))
            }),
        })
    }

    static update() {
        return object().shape({
            id: string().required().uuid()
        })
    }

    static delete() {
        return object().shape({
            id: string().required().uuid()
        })
    }
}