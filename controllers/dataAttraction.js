import dataAttraction from '../models/dataAttraction.js'

export const getDataAttraction = async (req, res) => {
  try {
    // console.log(req.body)
    const result = await dataAttraction.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: error })
  }
}
