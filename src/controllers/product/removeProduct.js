import { products } from "../../db-memory/products.js"

const remove = (req, res) => {
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
  }

export default remove