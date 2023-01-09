import mongoose from "mongoose"
import dotenv from "dotenv"

mongoose.set('strictQuery', true)
mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
        delete converted._id;
    }
});

dotenv.config()

const { MONGOOSE_DB_PASSWORD: password } = process.env

export default class Mongoose {
    constructor() {

    }

    static async startDB() {
        await mongoose.connect(`mongodb+srv://desafiossharenergy:${password}@cluster0.ky3zcha.mongodb.net/test`)
        console.log("Mongo DB successfully connected")
    }
}