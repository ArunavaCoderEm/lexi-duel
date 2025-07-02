import { Context, Hono } from 'hono'

const app = new Hono()

app.get('/test', (c: Context) => {
  return c.text('Hello Hono!')
})

export default app
