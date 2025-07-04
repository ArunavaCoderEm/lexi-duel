import { Hono } from 'hono'
import { wordFetch } from '../controller/word.controller'

const wordRoutes = new Hono()

wordRoutes.get('/get-word', wordFetch)

export default wordRoutes