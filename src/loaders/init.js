import fastifyHooks from './fastify/restartHook.js'
import fastifyRoutes from './fastify/routes.js'
import fastifyStart from './fastify/start.js'
import mongooseLoader from './mongoose.js'
import * as dotenv from 'dotenv'

const init = async ({ fastifyApp }) => {
  dotenv.config()
  const mongoConnection = await mongooseLoader()
  await fastifyHooks(fastifyApp)
  await fastifyRoutes(fastifyApp)
  await fastifyStart(fastifyApp)
}

export default init
