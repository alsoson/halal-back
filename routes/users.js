import express from 'express'
import * as auth from '../middleware/auth.js'
import content from '../middleware/content.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'

import {
  register,
  login,
  logout,
  getAllUsers,
  editUser,
  // admin,
  deleteUser,
  extend,
  getUser,
  addCart,
  editCart,
  getCart,
  getOrder,
  editOrder,
  addOrder,
  getCollection,
  addCollection,
  deleteCollection
} from '../controllers/users.js'

const router = express.Router()

router.post('/', content('application/json'), register)
router.patch('/', content('multipart/form-data'), auth.jwt, upload, editUser)
router.get('/', auth.jwt, getUser)
router.post('/login', content('application/json'), auth.login, upload, login)
router.delete('/logout', auth.jwt, logout)
// router.get('/all', getUser)
router.get('/all', getAllUsers)
router.delete('/:id', auth.jwt, admin, deleteUser)
router.post('/extend', auth.jwt, extend)
router.post('/cart', content('application/json'), auth.jwt, addCart)
router.patch('/cart', content('application/json'), auth.jwt, editCart)
router.get('/cart', auth.jwt, getCart)
router.post('/order', content('application/json'), auth.jwt, addOrder)
router.patch('/order', content('application/json'), auth.jwt, editOrder)
router.get('/order', auth.jwt, getOrder)
router.post('/collections', content('application/json'), auth.jwt, addCollection)
router.get('/collections', auth.jwt, getCollection)
router.delete('/collections/:id', auth.jwt, deleteCollection)
export default router
