import data from '../models/data.js'

export const getData = async (req, res) => {
  try {
    console.log(req.body)
    const result = await data.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: error })
  }
}
