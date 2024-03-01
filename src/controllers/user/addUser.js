import { users } from "../../db-memory/user.js"


const addUser = (req, res) => {
    const user = req.body
    
    res.json({
        success: "Usuários listados com sucesso",
        users
    })
}

export default addUser