import productModel from "../../models/productModel.js"

const addProduct = (req, res) => {
    const product = req.body
    

    res.json({
        success: "Produto adicionado com sucesso",
        products: productModel.add(product)
    })
}

export default addProduct