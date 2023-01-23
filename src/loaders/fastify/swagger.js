export default {
    routePrefix: '/documentation',
    swagger: {
      info: {
        title: 'Responder',
        description: 'REST API mock, which allows the creation of endpoints with custom responses.',
        version: '1.0.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost:' + process.env.PORT,
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'Responder', description: 'Responder related end-points' }
      ],
      securityDefinitions: {
        apiKey: []
      }
    },
    uiConfig: {
      docExpansion: 'none',
      deepLinking: false
    },
    uiHooks: {
      onRequest: function (request, reply, next) { next() },
      preHandler: function (request, reply, next) { next() }
    },
    staticCSP: false,
    exposeRoute: true
  }