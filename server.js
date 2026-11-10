import express from "express"

const app = express()

app.use(express.json())

app.listen(process.env.rota, ()=>{
    console.log("servidor rodando, já pode dar 10 Alan")
})