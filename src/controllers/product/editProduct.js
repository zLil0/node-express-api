import productModel from "../../models/productModel.js"

const edit = (req, res) => {
    const updated = req.body
    res.json({
        success: `Usuário ${updated.id} atualizado com sucesso`,
        products: productModel.edit(updated)
    })
}

export default edit