import { Context, Hono } from 'hono'
import { cors } from 'hono/cors'
import userRoutes from '../routes/user.routes'
import { serve } from '@hono/node-server'
import 'dotenv/config'
import wordRoutes from '../routes/word.route'

const app = new Hono()

app.use('*', cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'], 
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))

app.get('/health', (c: Context) => {
  return c.text('Server health check fine')
})

app.route('/api/users', userRoutes)
app.route('/api/word', wordRoutes)

const port = process.env.ENV == "production" ? Number(process.env.PORT) : 8000;

serve({ fetch: app.fetch, port }, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
