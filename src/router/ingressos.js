import { Router } from "express";
import { conn } from "../configbd.js"
import bcrypt from "bcrypt"

const ingreRouter = Router()

ingreRouter.post("cadastrandoIngre", async (req, res)=>{
    const{ cliente, pagamento, sessao, adicionais, quantidades }=req.body
    conn.query(`insert into ingressos (cliente, pagamento, sessao, adicionais, quantidades) values ('${cliente}', ${pagamento}, ${sessao}, ${adicionais}, ${quantidades})`,
        (err, result)=>{
            if(err){
                console.log("erro ao adiconar");
            }else{
                res.json({
                    resultado: `Ingresso adcionado ao BD: ${result}`
                })
            }
        }
    )

})
ingreRouter.get("mostrarIngre", (req, res)=>{
    const{id, sessao}=req.body
    conn.query(`select * from ingresso where id = '${id}' && sessao = ${sessao}`,
        (err, result)=>{
            if(err){
                console.log("erro ao achar o id e/ou sessâo");
            }else{
                res.json({
                    resultado: result
                })
            }
        }
    )
})
ingreRouter.delete("deleteIngre", (req, res)=>{
    const{id}= req.body
    
})