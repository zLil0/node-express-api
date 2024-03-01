import express from 'express'
import listAll from '../controllers/product/listAllProduct.js'
import addProduct from '../controllers/product/addProduct.js'
import remove from '../controllers/product/removeProduct.js'
import edit from '../controllers/product/editProduct.js'

const router = express.Router()

router.get('/', listAll)
  
  router.post('/', addProduct)
  
  router.delete('/', remove)
  
  router.put('/', edit)

  export default router