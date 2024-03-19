import express, { Express, json } from "express"
import userRouter from "./routes/userRoutes"
import { configDotenv } from "dotenv"
import { errorHandler } from "./middlewares/errorHandler"
configDotenv()
const PORT = process.env.PORT
const app: Express = express()
app.use(json())
app.use("/api/users", userRouter)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started and Running on ${PORT}`)
})
