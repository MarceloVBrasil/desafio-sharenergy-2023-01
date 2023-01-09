import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./src/routes/UserRoutes"
import clientRoutes from "./src/routes/ClientRoutes"
import Database from "./src/database"

dotenv.config()
const { PORT = 5060 } = process.env
const server = express()

server.use(express.json())
server.use(cors())
server.use("/user", userRoutes)
server.use("/client", clientRoutes)

Database.start()

server.listen(PORT, () => console.log(`server is running on port ${PORT}`))