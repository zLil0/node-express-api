import userModel from "../../models/userModel.js"


const getById = (req, res) => {
    const id = +req.params.id
    res.json({
        success: "Usuário listado com sucesso",
        users: userModel.getUser(id)
    })
}

export default getById