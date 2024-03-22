import userModel from "../../models/userModel.js"

const edit = async (req, res) => {
    const updated = req.body
    const dataValidated = userModel.validateId(updated)
    if(!dataValidated.success){
		return res.status(400).json({
			error: "Dados Inválidos!",
			fields: dataValidated.error.flatten().fieldErrors
		})
	}
    res.json({
        success: `Usuário ${updated.id} atualizado com sucesso`,
        users: await userModel.edit(updated)
    })
}

export default edit