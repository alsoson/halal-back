import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '缺少行程名稱']
  },
  price: {
    type: Number,
    min: [0, '行程價格錯誤'],
    required: [true, '缺少行程價格']
  },
  startDay: {
    type: Date,
    required: [true, '缺少行程出發日期']
  },
  endDay: {
    type: Date,
    required: [true, '缺少行程結束日期']
  },
  people: {
    type: Number,
    min: [0, '行程人數式錯誤'],
    required: [true, '缺少行程人數']
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  sell: {
    type: Boolean,
    default: false
  },
  dayoneone: {
    type: String
  },
  dayonetwo: {
    type: String
  },
  dayonethree: {
    type: String
  },
  dayonefour: {
    type: String
  },
  dayonefive: {
    type: String
  },
  daytwoone: {
    type: String
  },
  daytwotwo: {
    type: String
  },
  daytwothree: {
    type: String
  },
  daytwofour: {
    type: String
  },
  daytwofive: {
    type: String
  }

}, { versionKey: false })

export default mongoose.model('products', schema)
