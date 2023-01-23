import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Resource = new Schema({
  resourceID: { type: String, unique: true },
  date:       { type: Date, default: Date.now }
},{
    collection: 'resources'
})

export default mongoose.model('Resource', Resource)
