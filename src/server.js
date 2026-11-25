import express from "express"
import { film } from "./router/film.js"
import "dotenv/config"
import { ingreRouter } from "./router/ingressos.js"
import { cadastroRouter } from "./router/cadastro.js"

const app = express()

app.use(express.json())
app.use(ingreRouter)
app.use(film)
app.use(cadastroRouter)

app.listen(process.env.rota, ()=>{
    console.log("servidor rodando na porta 6767")
})