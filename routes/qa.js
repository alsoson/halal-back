import express from 'express'
import content from '../middleware/content.js'
import * as auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
// import upload from '../middleware/upload.js'
import {
  createQa,
  getQa,
  getOneQa,
  getAllQa,
  deleteQa,
  editQa
} from '../controllers/qa.js'

const router = express.Router()

router.post('/', auth.jwt, createQa)
router.get('/', getQa)
// router.get('/all', auth.jwt, admin, getAllQas)
router.get('/all', getAllQa)
router.get('/:id', getOneQa)
router.delete('/:id', auth.jwt, admin, deleteQa)
router.patch('/:id', content('application/json'), auth.jwt, admin, editQa)

export default router
