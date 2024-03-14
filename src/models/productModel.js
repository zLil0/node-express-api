import { products } from '../db-memory/products.js'
import { z } from 'zod'


const productSchema = z.object({
    id: z
        .number({
            required_error: "ID obrigatório.",
            invalid_type_error: "ID deve ser um número."
        }),
    name: z
        .string({
            required_error: "Nome obrigatório.",
            invalid_type_error: "Nome deve ser um texto."
        })
        .min(3)
        .max(200),
    price: z
        .number({
            required_error: "Preço obrigatório.",
            invalid_type_error: "Preço deve ser um número."
        }),
    brand: z
        .string({
            required_error: "Avatar Url obrigatório.",
            invalid_type_error: "Marca deve ser um texto."
        })
})


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
            if (updated.price) products[index].price = updated.price
            if (updated.brand) products[index].brand = updated.brand
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

const getProduct = (id) => {
    return products.find(product => product.id === id)
}

const validateAdd = (product) => {
    const partialProductSchema = productSchema.partial({id: true})
    return partialProductSchema.safeParse(product)
}

const validateId = (id) => {
    const partialProductSchema = productSchema.partial({name: true, price: true, brand: true})
    return partialProductSchema.safeParse(id)
}

export default { list, add, edit, remove, validateAdd, validateId, getProduct }