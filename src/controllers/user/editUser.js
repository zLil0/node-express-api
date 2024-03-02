import userModel from "../../models/userModel.js"

const edit = (req, res) => {
    const updated = req.body

    res.json({
        success: `Usuário ${updated.id} atualizado com sucesso`,
        users: userModel.edit(updated)
    })
}

export default edit