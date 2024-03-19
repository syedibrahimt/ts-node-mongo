import { Router } from "express"
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/userController"

const userRouter = Router()

userRouter.route("/").get(getAllUsers).post(createUser)
userRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser)

export default userRouter
