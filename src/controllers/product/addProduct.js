import productModel from "../../models/productModel.js"

const addProduct = (req, res) => {
    const product = req.body
    const dataValidated = productModel.validateAdd(product)
    if(!dataValidated.success){
		return res.status(400).json({
			error: "Dados Inválidos!",
			fields: dataValidated.error.flatten().fieldErrors
		})
	}
    res.json({
        success: "Produto adicionado com sucesso",
        products: productModel.add(dataValidated.data)
    })
}

export default addProduct