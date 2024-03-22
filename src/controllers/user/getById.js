import userModel from "../../models/userModel.js"


const getById = async (req, res) => {
    const id = +req.params.id
    res.json({
        success: "Usuário listado com sucesso",
        users: await userModel.getUser(id)
    })
}

export default getById