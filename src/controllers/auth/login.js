import userModel from '../../models/userModel.js'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../../config.js'


const login = async (req, res) => {
    const { email, pass } = req.body

    const userFound = await userModel.getByEmail(email)
    if (!userFound) return res.status(401).json({
        error: "Email ou senha inválida!"
    })
    const rightPass = await compare(pass, userFound.pass)
    if (!rightPass) return res.status(401).json({
        error: "Email ou senha inválida!"
    })

    const accessToken = jwt.sign(
        { id: userFound.id, name: userFound.name },
        SECRET_KEY,
        { expiresIn: '1m' }
    )

    const refreshToken = jwt.sign(
        { id: userFound.id },
        SECRET_KEY,
        { expiresIn: '3m' }
    )

    delete userFound.pass
    return res.json({
        success: `Usuário do login!`,
        user: userFound,
        accessToken,
        refreshToken
    })
}

export default login