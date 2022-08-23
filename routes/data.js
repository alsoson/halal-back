import express from 'express'
import {
  getData
} from '../controllers/data.js'
import {
  getDataAttraction
} from '../controllers/dataAttraction.js'

const router = express.Router()

router.get('/', getData)
router.get('/attraction', getDataAttraction)
export default router
