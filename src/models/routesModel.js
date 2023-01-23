import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Route = new Schema({
  resourceID:     { type: String },
  routeID:        { type: String },
  statusCode:     { type: String },
  request:	      { type: String },
  condition:	    { type: [String] },
  delay:	        { type: String },
  verb:           { type: String , enum: ['GET', 'POST', 'PUT', 'DELETE'] },
},{
  collection: 'routes'
})

export default mongoose.model('Route', Route)
