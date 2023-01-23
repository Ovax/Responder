import fastifySwagger from '@fastify/swagger'
import swaggerConfig from './swagger.js'
import responderRouter from '../../v1/routes/responderRouter.js'
import dbRoutes from '../../v1/routes/dbRoutes.js'

const setRoutes = async fastify => {
  await fastify.register(fastifySwagger, swaggerConfig)
  responderRouter
    .forEach(route => fastify.register(async fastify => {fastify.route(route)}))
  await dbRoutes()
    .then(db => db.forEach(route => fastify.register(async fastify => {fastify.route(route)})))
}

export default setRoutes
