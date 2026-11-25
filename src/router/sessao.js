import { Router } from "express";
import { conn } from "../database/conf.bd.js"

const sessaoRouter = Router()

sessaoRouter.post("adicioneSessao", (req, res)=>{
    const{hora, assetos, sala} = req.body
    if(sala>12 || sala<1){
        res.json({
            resultado: "sala não existe"
        })
        return
    }
    conn.query(`insert into sessões`)
})