// const express = require('express')
import express from "express"
import { PORT, HOST } from './config.js'
import { users } from './db-memory/user.js'
import logger from "./middlewares/logger.js"
const app = express()

app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
  res.json({ message: "Bem vindo à API!" })
})

app.get('/users', (req, res) => {
  res.json({
    success: "Usuários listados com sucesso",
    users
  })
})

app.post('/users', (req, res) => {
  const user = req.body
  user.id = users[users.length - 1].id + 1
  users.push(user)

  res.json({
    success: "Usuários listados com sucesso",
    users
  })
})

app.delete('/users', (req, res) => {
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

app.put('/users', (req, res) => {
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


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${HOST}:${PORT}`)
})