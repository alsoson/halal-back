import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  district: {
    type: String
  },
  type: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  }
  // do: {
  //   type: String
  // }
}, { versionKey: false })

export default mongoose.model('data', schema)
