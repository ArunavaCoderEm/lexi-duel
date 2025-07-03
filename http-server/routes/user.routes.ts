import { Hono } from 'hono'
import { userRegisterHandler } from '../controller/user.controller'

const userRoutes = new Hono()

userRoutes.post('/add-user', userRegisterHandler)


export default userRoutes