import { Hono } from 'hono'

const app = new Hono()

app.get('/test', (c) => {
  return c.text('Hello Hono!')
})

export default app
