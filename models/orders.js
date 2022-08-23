import mongoose from 'mongoose'
import validator from 'validator'

const schema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: 'users',
    required: [true, '缺少使用者欄位']
  },
  products: [
    {
      product: {
        type: mongoose.ObjectId,
        ref: 'products',
        required: [true, '缺少商品欄位']
      },
      quantity: {
        type: Number,
        required: [true, '缺少數量欄位']
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now()
  },
  orderInfo: [
    {
      lastName: {
        type: String,
        // ref: 'products',
        required: [true, '缺少訂購人姓氏']
      },
      firstName: {
        type: String,
        // ref: 'products',
        required: [true, '缺少訂購人名字']
      },
      phone: {
        type: Number,
        required: [true, '缺少訂購人電話']
      },
      email: {
        type: String,
        required: [true, '缺少訂購人信箱'],
        validate: {
          validator (email) {
            return validator.isEmail(email)
          },
          message: '信箱格式錯誤'
        }
      }
    }
  ]
}, { versionKey: false })

export default mongoose.model('orders', schema)
