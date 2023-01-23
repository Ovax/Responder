import { saveData } from "../../services/dbService.js"

const getEcho = (request, reply) => {
	reply.send({...request.context.config, headers: request.raw.rawHeaders})
}

const getRoute = (resourceID, endpointID, statusCode, bodyToSend, delay) => {
    const handler = ({ headers, receivedBody }, reply) => {
        saveData(resourceID, endpointID, statusCode, headers, receivedBody, bodyToSend, delay)
        setTimeout(() => { reply.status(statusCode).send(JSON.parse(bodyToSend)) }, delay)
    }
    return handler
}

export {
    getEcho,
    getRoute,
}
