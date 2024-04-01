import userModel from "../../models/userModel.js"
import {hash} from 'bcrypt'

const addUser = async (req, res) => {
    const user = req.body
    const dataValidated = userModel.validateAdd(user)
    if(!dataValidated.success){
		return res.status(400).json({
			error: "Dados Inválidos!",
			fields: dataValidated.error.flatten().fieldErrors
		})
	}
    dataValidated.data.pass = await hash(dataValidated.data.pass, 10)
	const result = await userModel.add(dataValidated.data)
    delete result.pass
    res.json({
        success: "Usuário adicionado com sucesso",
        users: result
    })
}

export default addUser
