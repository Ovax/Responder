import Fastify from 'fastify'
import init from "../init.js"

const setRestartHook = async fastify => {
  fastify.addHook('onResponse', (request, _, done) => {
    const tags = request.context.schema.tags?? []
    const method = request.context.config.method
    
    if(tags[0] == 'Responder' && method == 'PATCH')
      fastify.close().then(async () => {
        console.log('********************')
        console.log('successfully closed!')
        console.log('********************')
        console.log('Reconnecting!')
        const app = Fastify({ logger: true })
        await init({ fastifyApp: app })
      }, (err) => {
        console.log('an error happened', err)
      })
    done()
  })
}

export default setRestartHook 
