import { users } from "../../db-memory/user.js"

const remove = (req, res) => {
    const deleted = req.body
    users.map((user, index) => {
        if (user.id === deleted.id) {
            users.splice(index, 1)
        }

    })
    res.json({
        success: "Usuário deletado com sucesso",
        users
    })
}


export default remove