import userModel from "../../models/userModel.js"

const remove = (req, res) => {
    const deleted = req.body
    
    res.json({
        success: `Usuário id:${deleted.id} deletado com sucesso`,
        users: userModel.remove(deleted)
    })
}


export default remove