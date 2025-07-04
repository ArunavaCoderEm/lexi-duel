import { Context, Hono } from 'hono'
import userRoutes from '../routes/user.routes'
import { serve } from '@hono/node-server'
import 'dotenv/config'
import wordRoutes from '../routes/word.route'

const app = new Hono()

app.get('/health', (c: Context) => {
  return c.text('Server health check fine')
})

app.route('/api/users', userRoutes)
app.route('/api/word', wordRoutes)

const port = process.env.ENV == "production" ? Number(process.env.PORT) : 8000;

serve({ fetch: app.fetch, port }, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
