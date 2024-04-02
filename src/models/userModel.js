import { z } from 'zod'
import { PrismaClient } from '@prisma/client'

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
    pass: z
        .string({
            required_error: "A senha é obrigatória",
            invalid_type_error: "Senha deve ser um texto"
        })
})


const list = async () => {
    return await prisma.user.findMany()
}

const getUser = async (id) => {
    return await prisma.user.findUnique({
        where: {
            id
        }
    })
}

const getByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: {
            email
        }
    })
}

const add = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

const edit = async (updated) => {
    return await prisma.user.update({
        where: {
            id: updated.id
        },
        data: updated
    })
}

const remove = async (id) => {
    return await prisma.user.delete({
        where: {
            id
        }
    })
}

const validateAdd = (user) => {
    const partialUserSchema = userSchema.partial({ id: true })
    return partialUserSchema.safeParse(user)
}

const validateId = (user) => {
    const partialUserSchema = userSchema.partial({ name: true, avatar: true, email: true, pass: true })
    return partialUserSchema.safeParse(user)
}

export default { list, add, edit, remove, validateAdd, validateId, getUser, getByEmail}
