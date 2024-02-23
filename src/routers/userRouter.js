import express from 'express'
import { users } from '../db-memory/user.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
      success: "Usuários listados com sucesso",
      users
    })
  })
  
  router.post('/', (req, res) => {
    const user = req.body
    user.id = users[users.length - 1].id + 1
    users.push(user)
  
    res.json({
      success: "Usuários listados com sucesso",
      users
    })
  })
  
  router.delete('/', (req, res) => {
    const deleted = req.body
    users.map((user, index) => {
      if (user.id === deleted.id) {
        users.splice(index, 1)
      }
  
    })
    res.json({
      success: "Usuário deletado com sucesso",
      users
    })
  })
  
  router.put('/', (req, res) => {
    const updated = req.body
    users.map((user, index) => {
      if (user.id === updated.id) {
  
        if(updated.name) users[index].name = updated.name
        if(updated.avatar) users[index].avatar = updated.avatar
        if(updated.email) users[index].email = updated.email
  
      }
  
    })
  
    res.json({
      success: `Usuário ${updated.id} atualizado com sucesso`,
      users
    })
  })

  export default router