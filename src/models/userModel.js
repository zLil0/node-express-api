import { users } from "../db-memory/user.js"
import { z } from 'zod'
const userSchema = z.object({
    id: z.number({
        required_error: "ID é obrigatório.",
        invalid_type_error: "ID deve ser um número."
    }),
    name: z.string(),
    email: z.string(),
    avatar: z.string(),
})


const list = () => {
    return users
}

const add = (user) => {
    user.id = users[users.length - 1].id + 1
    users.push(user)
    return users
}

const edit = (updated) => {
    return users.map((user, index) => {
        if (user.id === updated.id) {
            if (updated.name) users[index].name = updated.name
            if (updated.avatar) users[index].avatar = updated.avatar
            if (updated.email) users[index].email = updated.email
        }
    })
}

const remove  = (deleted) => {
    return users.map((user, index) => {
        if (user.id === deleted.id) {
            users.splice(index, 1)
        }
    })
}

export default { list, add, edit, remove }