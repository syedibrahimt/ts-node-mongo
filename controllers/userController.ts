import { Request, Response } from "express"
import asyncHandler from "express-async-handler"
import { User } from "../types/user"
import { STATUS_CODES } from "../config/constants"

// @desc for get all users
// @route GET /api/users/
// @access public
export const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  res.json({
    message: "getAllUsers",
  })
})

// @desc for get particular user
// @route GET /api/users/:id
// @access public
export const getUser = asyncHandler(async (req: Request, res: Response) => {
  res.json({
    message: `getUser id ${req.params.id}`,
  })
})

// @desc for create new user
// @route POST /api/users/
// @access public
export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, age, sex }: User = req.body
  if (!name || !age || !sex) {
    res.status(STATUS_CODES.BAD_REQUEST)
    throw new Error("All Fields are required")
  }
  res.json({
    message: `create user`,
  })
})

// @desc for update user
// @route PUT /api/users/:id
// @access public
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  res.json({
    message: `Update user ${req.params.id}`,
  })
})

// @desc for update user
// @route DELETE /api/users/:id
// @access public
export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  res.json({
    message: `delete user ${req.params.id}`,
  })
})
