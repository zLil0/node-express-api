import userModel from "../../models/userModel.js"

const addUser = (req, res) => {
    const user = req.body
    const dataValidated = userModel.validateAdd(user)
    if(!dataValidated.success){
		return res.status(400).json({
			error: "Dados Inválidos!",
			fields: dataValidated.error.flatten().fieldErrors
		})
	}
    res.json({
        success: "Usuário adicionado com sucesso",
        users: userModel.add(user)
    })
}

export default addUser