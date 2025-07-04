import { Hono } from 'hono'
import { getUserHandler, userRegisterHandler } from '../controller/user.controller'

const userRoutes = new Hono()

userRoutes.post('/add-user', userRegisterHandler)
userRoutes.get('/get-user/:email', getUserHandler)


export default userRoutes