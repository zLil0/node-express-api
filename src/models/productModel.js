import { products } from '../db-memory/products.js'

const list = () => {
    return products
}

const add = (product) => {
    product.id = products[products.length - 1].id + 1
    products.push(product)
    return products
}

const edit = (updated) => {
    products.map((product, index) => {
        if (product.id === updated.id) {
            if (updated.name) products[index].name = updated.name
            if (updated.avatar) products[index].avatar = updated.avatar
            if (updated.email) products[index].email = updated.email
        }
    })
    return products
}

const remove = (deleted) => {
    products.map((product, index) => {
        if (product.id === deleted.id) {
            products.splice(index, 1)
        }
    })
    return products
}

export default { list, add, edit, remove }