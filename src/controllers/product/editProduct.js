import { products } from "../../db-memory/products.js"

const edit = (req, res) => {
    const updated = req.body
    products.map((product, index) => {
        if (product.id === updated.id) {

            if (updated.name) products[index].name = updated.name
            if (updated.avatar) products[index].avatar = updated.avatar
            if (updated.email) products[index].email = updated.email

        }

    })

    res.json({
        success: `Usuário ${updated.id} atualizado com sucesso`,
        products
    })
}

export default edit