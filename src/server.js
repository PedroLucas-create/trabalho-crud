import express from "express"
import { film } from "./router/film.js"
import "dotenv/config"
import { ingreRouter } from "./router/ingressos.js"

const app = express()

app.use(express.json())
app.use(ingreRouter)
app.use(film)

app.listen(process.env.rota, ()=>{
    console.log("servidor rodando, já pode dar 10 Alan")
})