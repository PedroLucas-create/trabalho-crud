import express from "express"
import { ingreRouter } from "./router/ingressos.js"

const app = express()

app.use(ingreRouter)
app.use(express.json())

app.listen(process.env.rota, ()=>{
    console.log("servidor rodando, já pode dar 10 Alan")
})