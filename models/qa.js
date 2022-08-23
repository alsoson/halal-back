import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: 'users',
    required: [true, '缺少使用者欄位']
  },
  anonymous: {
    type: String,
    required: [true, '缺少匿名']
  },
  title: {
    type: String,
    required: [true, '缺少問題標題']
  },
  description: {
    type: String,
    required: [true, '缺少問題內容']
  },
  reply: {
    type: String
  },
  sell: {
    type: Boolean,
    default: false
  }
}, { versionKey: false })

export default mongoose.model('qa', schema)
