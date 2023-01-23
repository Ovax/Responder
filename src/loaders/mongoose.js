import mongoose from 'mongoose'

const setDB = async _ => {
  mongoose.Promise = global.Promise;
  await mongoose.connect(process.env.DATABASE)
    .then(() => console.log('Db is conencted'))
    .catch(err => console.error(err))
}

export default setDB
