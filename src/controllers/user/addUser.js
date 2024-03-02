import userModel from "../../models/userModel.js"

const addUser = (req, res) => {
    const user = req.body
    
    res.json({
        success: "Usuário adicionado com sucesso",
        users: userModel.add(user)
    })
}

export default addUser