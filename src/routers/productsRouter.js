import express from 'express'
import { products } from '../db-memory/products.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
      success: "Produtos listados com sucesso",
      products
    })
  })
  
  router.post('/', (req, res) => {
    const product = req.body
    product.id = products[products.length - 1].id + 1
    products.push(product)
  
    res.json({
      success: "Produto adicionado com sucesso",
      products
    })
  })
  
  router.delete('/', (req, res) => {
    const deleted = req.body
    products.map((product, index) => {
      if (product.id === deleted.id) {
        products.splice(index, 1)
      }
  
    })
    res.json({
      success: "Produto deletado com sucesso",
      products
    })
  })
  
  // router.put('/', (req, res) => {
  //   const updated = req.body
  //   products.map((product, index) => {
  //     if (product.id === updated.id) {
  
  //       if(updated.name) products[index].name = updated.name
  //       if(updated.avatar) products[index].avatar = updated.avatar
  //       if(updated.email) products[index].email = updated.email
  
  //     }
  
  //   })
  
  //   res.json({
  //     success: `Usuário ${updated.id} atualizado com sucesso`,
  //     products
  //   })
  // })

  export default router