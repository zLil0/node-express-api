import userModel from "../../models/userModel.js"

const addUser = async (req, res) => {
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
        users: await userModel.add(dataValidated.data)
    })
}

export default addUser