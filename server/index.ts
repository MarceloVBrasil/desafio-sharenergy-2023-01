import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const { PORT = 5060 } = process.env
const server = express()

server.use(express.json())
server.use(cors())

server.listen(PORT, () => console.log(`server is running on port ${PORT}`))