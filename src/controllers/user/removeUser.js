import userModel from "../../models/userModel.js"

const remove = (req, res) => {
    const deleted = req.body
    const dataValidated = userModel.validateId(deleted)
    if(!dataValidated.success){
		return res.status(400).json({
			error: "Dados Inválidos!",
			fields: dataValidated.error.flatten().fieldErrors
		})
	}
    res.json({
        success: `Usuário id:${deleted.id} deletado com sucesso`,
        users: userModel.remove(deleted)
    })
}


export default remove