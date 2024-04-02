// const express = require('express')
import express from "express"
import { PORT, HOST } from './config.js'
import logger from "./middlewares/logger.js"
import userRouter from './routers/userRouter.js'
import productsRouter from './routers/productsRouter.js'
import authRouter from './routers/authRouter.js'

const app = express()

app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
  res.json({ message: "Bem vindo à API!" })
})

app.use('/users', userRouter)
app.use('/products', productsRouter)
app.use('/auth', authRouter)



app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${HOST}:${PORT}`)
})