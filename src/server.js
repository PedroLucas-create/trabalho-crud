import express, { Router } from "express"
import { film } from "./router/film.js"
import "dotenv/config"

const app = express()

app.use(express.json())
app.use(film)

app.listen(process.env.rota, ()=>{
    console.log("servidor rodando, já pode dar 10 Alan")
})