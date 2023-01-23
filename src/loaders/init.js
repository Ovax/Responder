import fastifyHooks from './fastify/restartHook.js'
import fastifyRoutes from './fastify/routes.js'
import fastifyStart from './fastify/start.js'
import mongooseLoader from './mongoose.js'
const init = async ({ fastifyApp }) => {
  const mongoConnection = await mongooseLoader()
  console.log('MongoDB Initialized')
  await fastifyHooks(fastifyApp)
  await fastifyRoutes(fastifyApp)
  await fastifyStart(fastifyApp)
  console.log('Fastify Initialized')
}

export default init
