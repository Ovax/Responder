const fastifyStart = async fastify => {
    fastify.listen({ port: process.env.PORT }, err => {
        if (err) {
          console.log(err)
          return
        }
        console.log(`Your server is ready !`)
      })
  }

export default fastifyStart 
