const fastifyStart = async fastify => {
    fastify.listen({ port: 3000 }, err => {
        if (err) {
          console.log(err)
          return
        }
        console.log(`Your server is ready !`)
      })
  }

export default fastifyStart 
