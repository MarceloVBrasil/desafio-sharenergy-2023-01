import Mongoose from "./mongoose";

export default class Database {
    constructor() {

    }

    static start() {
        Mongoose.startDB()
    }
}