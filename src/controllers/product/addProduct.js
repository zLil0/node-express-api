import { products } from "../../db-memory/products.js"

const addProduct = (req, res) => {
    const product = req.body
    product.id = products[products.length - 1].id + 1
    products.push(product)

    res.json({
        success: "Produto adicionado com sucesso",
        products
    })
}

export default addProduct