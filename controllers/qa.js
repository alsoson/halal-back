import qa from '../models/qa.js'

export const createQa = async (req, res) => {
  try {
    const result = await qa.create({
      user: req.user._id,
      anonymous: req.body.anonymous,
      title: req.body.title,
      description: req.body.description,
      reply: req.body.reply,
      sell: req.body.sell
    })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      return res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const getQa = async (req, res) => {
  try {
    const result = await qa.find({ sell: true })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getAllQa = async (req, res) => {
  try {
    const result = await qa.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getOneQa = async (req, res) => {
  try {
    const result = await qa.findById(req.params.id)
    // console.log(result)
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const editQa = async (req, res) => {
  // console.log(req.body.reply)
  try {
    const data = {
      reply: req.body.reply,
      sell: req.body.sell
    }
    const result = await qa.findByIdAndUpdate(req.params.id, data, { new: true })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      return res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const deleteQa = async (req, res) => {
  try {
    await qa.findByIdAndDelete(req.params.id)
    // await orders.deleteMany({user : req.params.id})
    res.status(200).send({ success: true, message: '' })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}
