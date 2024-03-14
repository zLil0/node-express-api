import productModel from "../../models/productModel.js"

const edit = (req, res) => {
    const updated = req.body
    const dataValidated = productModel.validateId(updated)
    if(!dataValidated.success){
		return res.status(400).json({
			error: "Dados Inválidos!",
			fields: dataValidated.error.flatten().fieldErrors
		})
	}
    res.json({
        success: `Produto ${updated.id} atualizado com sucesso`,
        products: productModel.edit(dataValidated.data)
    })
}

export default edit