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
    const result = await userModel.edit(updated)
    delete result.pass
    res.json({
        success: `Usuário ${updated.id} atualizado com sucesso`,
        users: result
    })
}

export default edit