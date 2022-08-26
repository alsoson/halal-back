import products from '../models/products.js'

export const createProduct = async (req, res) => {
  try {
    const result = await products.create({
      name: req.body.name,
      price: req.body.price,
      people: req.body.people,
      startDay: req.body.startDay,
      endDay: req.body.endDay,
      description: req.body.description,
      image: req.file?.path || '',
      sell: req.body.sell,
      category: req.body.category,
      dayoneone: req.body.dayoneone,
      dayonetwo: req.body.dayonetwo,
      dayonethree: req.body.dayonethree,
      dayonefour: req.body.dayonefour,
      dayonefive: req.body.dayonefive,
      daytwoone: req.body.daytwoone,
      daytwotwo: req.body.daytwotwo,
      daytwothree: req.body.daytwothree,
      daytwofour: req.body.daytwofour,
      daytwofive: req.body.daytwofive
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

export const getProducts = async (req, res) => {
  try {
    const result = await products.find({ sell: true })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getAllProducts = async (req, res) => {
  try {
    const result = await products.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getProduct = async (req, res) => {
  try {
    const result = await products.findById(req.params.id)
    console.log(result)
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const editProduct = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      price: req.body.price,
      people: req.body.people,
      startDay: new Date(req.body.startDay),
      endDay: new Date(req.body.endDay),
      description: req.body.description,
      sell: req.body.sell,
      image: req.file?.path || '',
      category: req.body.category,
      dayoneone: req.body.dayoneone,
      dayonetwo: req.body.dayonetwo,
      dayonethree: req.body.dayonethree,
      dayonefour: req.body.dayonefour,
      dayonefive: req.body.dayonefive,
      daytwoone: req.body.daytwoone,
      daytwotwo: req.body.daytwotwo,
      daytwothree: req.body.daytwothree,
      daytwofour: req.body.daytwofour,
      daytwofive: req.body.daytwofive
    }
    if (req.file) data.image = req.file.path
    const result = await products.findByIdAndUpdate(req.params.id, data, { new: true })
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

export const deleteProduct = async (req, res) => {
  try {
    await products.findByIdAndDelete(req.params.id)
    // await orders.deleteMany({user : req.params.id})
    res.status(200).send({ success: true, message: '' })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}
