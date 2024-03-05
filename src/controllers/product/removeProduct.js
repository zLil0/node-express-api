import productModel from "../../models/productModel.js"

const remove = (req, res) => {
  const deleted = req.body
  res.json({
    success: "Produto deletado com sucesso",
    products: productModel.remove(deleted)
  })
}

export default remove