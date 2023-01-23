import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Message = new Schema({
  date:         { type: Date, default: Date.now },
  headers:      { type: String },
  receive:	    { type: String },
  statusCode:   { type: String },
  send:		      { type: String },
  delay:        { type: Number },
})

const Request = new Schema({
  resourceID:   { type: String },
  routeID:   { type: String },
  json:         { type: [Message] },
},{
    collection: 'requests'
})

export default mongoose.model('Request', Request)
