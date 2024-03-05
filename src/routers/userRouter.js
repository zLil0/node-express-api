import express from 'express'
import listAll from '../controllers/user/listAllUser.js'
import addUser from '../controllers/user/addUser.js'
import remove from '../controllers/user/removeUser.js'
import edit from '../controllers/user/editUser.js'

const router = express.Router()

router.get('/', listAll)

router.post('/', addUser)

router.delete('/', remove)

router.put('/', edit)

export default router