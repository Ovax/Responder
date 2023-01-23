import Fastify from 'fastify'
import init from './loaders/init.js'

async function startServer() {
  const app = Fastify({ logger: true })
  await init({ fastifyApp: app })
}

startServer()
