import Joi from 'joi';

const id = Joi.number().integer()
const code = Joi.string()
const username = Joi.string().alphanum().min(3).max(50)
const password = Joi.string().min(6).max(50)

const createUserSchema = Joi.object({
  code: code.required(),
  username: username.required(),
  password: password.required(),
})

const updateUserSchema = Joi.object({
  id,
  code,
  username,
  password,
})

const getUserSchema = Joi.object({
  id: id.required(),
})

export { createUserSchema, updateUserSchema, getUserSchema };
