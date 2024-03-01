import { products } from "../../db-memory/products.js"

const listAll = (req, res) => {
    res.json({
        success: "Produtos listados com sucesso",
        products
    })
}

export default listAll