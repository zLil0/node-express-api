import productModel from "../../models/productModel.js"

const getById = (req, res) => {
    const id = +req.params.id
    res.json({
        success: "Produto listado com sucesso",
        users: productModel.getProduct(id)
    })
}

export default getById