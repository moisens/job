import User from "../models/User.js";
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from "../errors/index.js";


const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values")
    //throw new Error("Please provide all values")
  }

  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    throw new BadRequestError('Email already in use.')
  }

  const user = await User.create({ name, email, password })
  user.createJWT()
  res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
  res.send('log user')
}

const updateUser = async (req, res) => {
  res.send('update user')
}

export { register, login, updateUser }

