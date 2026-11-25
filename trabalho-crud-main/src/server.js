import express from "express"
import { film } from "./router/film.js"
import "dotenv/config"
import { ingreRouter } from "./router/ingressos.js"
import cadastroRouter from "./router/cadastro.js"
import loginRouter from "./router/login.js";

const app = express()

app.use(express.json())
app.use(ingreRouter)
app.use(film)
app.use(cadastroRouter)
app.use(loginRouter);

app.listen(process.env.rota, ()=>{
    console.log("servidor rodando, já pode dar 10 Alan")
})