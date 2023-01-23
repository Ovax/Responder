import ResponderService from '../../services/responderService.js'
import Resource from '../../models/resourceModel.js'
import Route from '../../models/routesModel.js'
import Request from '../../models/requestModel.js'

const responderService = new ResponderService(Route, Resource, Request)

const responderGET = ({ params, query }, reply) => {
	const { resourceID, routeID } = params
	const { pag } = query
  responderService.responderGET(resourceID, routeID, pag?? 0)
    .then(({ statusCode, request }) => 
      res.status(statusCode).send(request)
    )
    .catch( (error) => {
      reply
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } })
    })
}

const responderPOST = (request, reply) => {
  responderService.responderPOST(request.body)
  .then(newEndpoint => {
    reply.send({ status: "OK", data: newEndpoint })
  })
  .catch( (error) => {
    reply
    .status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } })
  })
}

const responderPUT = (request, reply) => {
  responderService.responderPUT(request.params.resourceID, request.body)
  .then(newEndpoint => {
    reply.send({ status: "OK", data: newEndpoint })
  })
  .catch( (error) => {
    reply
    .status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } })
  })
}

const responderPATCH = (request, reply) => {
  reply.send({ status: "OK" })
}

const responderResourceDELETE = (request, reply) => {
  responderService.responderDELETE(request.params.resourceID, false)
  .then(newEndpoint => {
    reply.send({ status: "OK", data: newEndpoint })
  })
  .catch( (error) => {
    reply
    .status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } })
  })
}

const responderRouteDELETE = (request, reply) => {
  responderService.responderDELETE(request.params.resourceID, request.params.routeID)
  .then(count => {
    reply.send({ status: "OK", data: count })
  })
  .catch( (error) => {
    reply
    .status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } })
  })
}


export {
    responderGET,
    responderPOST,
    responderPUT,
    responderPATCH,
    responderResourceDELETE,
    responderRouteDELETE,
  }
  