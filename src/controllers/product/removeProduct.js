import productModel from "../../models/productModel.js"

const remove = (req, res) => {
  const deleted = req.body
  const dataValidated = productModel.validateId(deleted)
    if(!dataValidated.success){
		return res.status(400).json({
			error: "Dados Inválidos!",
			fields: dataValidated.error.flatten().fieldErrors
		})
	}
  res.json({
    success: "Produto deletado com sucesso",
    products: productModel.remove(dataValidated.data)
  })
}

export default remove