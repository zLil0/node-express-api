import { users } from "../db-memory/user.js"
import {z} from 'zod'
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

const addUser = (user) => {
    user.id = users[users.length - 1].id + 1
    users.push(user)
    return users
}

export default {list, addUser}