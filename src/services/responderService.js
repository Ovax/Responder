
export default class ResponderService {

  constructor(Route, Resource, Request) {
    this.Resource = Resource
    this.Route = Route
    this.Request = Request
  }

  
  responderGET(resourceID, routeID, pag) {
		const limit = 20
		let skip = parseInt(pag)
		if(isNaN(skip)) skip = 0

		let request = {
			resource:'',
			route: '',
			notices: []
		}
		
    return new Promise((resolve, reject) => {
      this.Request.findOne({ resourceID, routeID }, 
        { json: { $slice: [limit * skip, limit] }},
        (error, data) => {
          if(error) return reject({ statusCode: 400, message: error })
          if(data === null) return reject({status: 404, message: 'Route not found'})

          request.resource = data.resourceID
          request.route = data.routeID
          
          const json = data.json.map( el => {
            return {
              headers:	  JSON.parse(el.headers),
              receive:  	JSON.parse(el.receive?? '""'),
              statusCode:	el.statusCode,
              send:		    JSON.parse(el.send),
              delay:	    el.delay?? 0
            }
          })
          
          request.notices = json
          resolve({ statusCode: 200, request })
      })
    })
  }

  responderPOST({name}) {
    return new Promise((resolve, reject) => {
      const resource = new this.Resource({resourceID: name.toLowerCase()})
      resource.save(err => {
        if(err) return reject(err)
        resolve(resource)
      })
    })
  }
  
  responderPUT(resourceID, { name, statusCode, request, condition, delay,  verb}) {
    const resource = this.Resource
    const route = this.Route
    resourceID = resourceID.toLowerCase()
    const routeID = name.toLowerCase()
    return new Promise((resolve, reject) => {
      resource.findOne({ resourceID }, (err, data) => {
        if(err) return reject({status: 400, message: err})
        if(data === null) return reject({status: 404, message: 'Route not found'})
  
        route.findOneAndUpdate(
          { resourceID, routeID },
          { resourceID, routeID, statusCode, request: JSON.stringify(request), condition, delay,  verb: verb.toUpperCase() },
          { new: true, upsert: true },
          (err, route) => {
            if(err) return reject({status: 400, message: err})
            resolve(route)
        })
      })
    })
  }
  
  responderDELETE(resourceID, routeID) {
    return new Promise((resolve, reject) => {
  
      const callback = (err, data) => {
        if(err) return reject({status: 400, message: err})
        if(data === null) return reject({status: 404, message: 'Route not found'})
  
        resolve({ data })
      }
  
      if(routeID){
        this.Resource.deleteOne({ resourceID, routeID }, callback)
      } else {
        this.Route.deleteOne({ resourceID }, (err, _) => {
          if(err) return callback(err, _)
          this.Resource.deleteMany({ resourceID }, callback)
        })
      }
    })
  }
}
