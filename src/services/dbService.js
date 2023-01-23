import Resource from '../models/resourceModel.js'
import Route from '../models/routesModel.js'
import Request from '../models/requestModel.js'

const getResources	= _             => Resource.find().select('resourceID').exec()

const getRoutes		= resourceID    => Route.find({ resourceID }).exec() 

const saveData      = async (resourceID, routeID, statusCode, headers, receivedBody, bodyToSend, delay) => {

    const message = {
        statusCode,
        headers:	JSON.stringify(headers),
        receive:	JSON.stringify(receivedBody),
        send:		JSON.stringify(bodyToSend),
        delay,
    }
    
    const req = await Request.findOne({ resourceID, routeID })

    if(req == null){
        new Request({ resourceID, routeID, json: [message]}).save((err) => { if(err != null) console.log(err) })
    } else {
        Request.updateOne({ resourceID, routeID }, { $push:{ json: message } }, (err) => { if(err != null) console.log(err) })
    }
}

export {
    getResources,
    getRoutes,
    saveData,
}
