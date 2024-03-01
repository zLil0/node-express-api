import { users } from "../../db-memory/user.js"

const edit = (req, res) => {
    const updated = req.body
    users.map((user, index) => {
        if (user.id === updated.id) {

            if (updated.name) users[index].name = updated.name
            if (updated.avatar) users[index].avatar = updated.avatar
            if (updated.email) users[index].email = updated.email

        }

    })

    res.json({
        success: `Usuário ${updated.id} atualizado com sucesso`,
        users
    })
}

export default edit