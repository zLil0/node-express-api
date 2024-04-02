import userModel from "../../models/userModel.js"


const listAll = async (req, res) => {
    const result = await userModel.list()
    delete result.pass
    res.json({
        success: "Usuários listados com sucesso",
        users:  result
    })
}

export default listAll
