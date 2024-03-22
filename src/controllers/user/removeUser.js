import userModel from "../../models/userModel.js"

const remove = async (req, res) => {
    const deleted = req.body
    const dataValidated = userModel.validateId(deleted)
    if(!dataValidated.success){
		return res.status(400).json({
			error: "Dados Inválidos!",
			fields: dataValidated.error.flatten().fieldErrors
		})
	}
    const usersResult = await userModel.remove(dataValidated.data.id)
    res.json({
        success: `Usuário id:${deleted.id} deletado com sucesso`,
        users: usersResult
    })
}


export default remove