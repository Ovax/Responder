import mongoose from 'mongoose'

const setDB = async _ => {
  let DB = 'mongodb://<user>:<pass>@<ip>:<port>'
  mongoose.Promise = global.Promise;
  await mongoose.connect(DB)
    .then(() => console.log('Db is conencted'))
    .catch(err => console.error(err))
}

export default setDB
