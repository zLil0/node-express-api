import userModel from "../../models/userModel.js"


const getById = async (req, res) => {
    const id = +req.params.id
    const result = await userModel.getUser(id)
    delete result.pass
    res.json({
        success: "Usuário listado com sucesso",
        users:result
    })
}

export default getById