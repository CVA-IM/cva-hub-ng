import { Hono } from 'hono'

type Bindings = {
  DB: D1Database
  FILES: R2Bucket
  SESSIONS: KVNamespace
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  })
})

app.get('/', (c) => {
  return c.json({
    name: 'cva-hub-api',
    version: '0.1.0',
  })
})

export default app
