import { users } from "../db-memory/user.js"
import { z } from 'zod'
import { PrismaClient } from '@prisma/client/edge'

const prisma = new PrismaClient()

const userSchema = z.object({
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
    email: z
        .string({
            required_error: "Email obrigatório.",
            invalid_type_error: "Email deve ser um texto."
        })
        .email({ message: 'Email inválido.' }),
    avatar: z
        .string({
            required_error: "Avatar Url obrigatório.",
            invalid_type_error: "Url do avatar deve ser um texto."
        })
        .url({ message: 'Url do avatar inválido.' }),
})


const list = () => {
    return users
}

const getUser = (id) => {
    return users.find(user => user.id === id)
}

const add = (user) => {
    user.id = users[users.length - 1].id + 1
    users.push(user)
    return users
}

const edit = (updated) => {
    users.map((user, index) => {
        if (user.id === updated.id) {
            if (updated.name) users[index].name = updated.name
            if (updated.avatar) users[index].avatar = updated.avatar
            if (updated.email) users[index].email = updated.email
        }
    })
    return users
}

const remove = (deleted) => {
    users.map((user, index) => {
        if (user.id === deleted.id) {
            users.splice(index, 1)
        }
    })
    return users
}

const validateAdd = (user) => {
    const partialUserSchema = userSchema.partial({id: true})
    return partialUserSchema.safeParse(user)
}

const validateId = (user) => {
    const partialUserSchema = userSchema.partial({name: true, avatar: true, email: true})
    return partialUserSchema.safeParse(user)
}

export default { list, add, edit, remove, validateAdd, validateId, getUser}