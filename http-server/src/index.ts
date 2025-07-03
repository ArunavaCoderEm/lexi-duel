import { Context, Hono } from 'hono'
import userRoutes from '../routes/user.routes'
import { serve } from '@hono/node-server'
import 'dotenv/config'

const app = new Hono()

app.get('/health', (c: Context) => {
  return c.text('Server health check fine')
})

app.route('/api/users', userRoutes)

const port = Number(process.env.PORT) || 8000

serve({ fetch: app.fetch, port }, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
