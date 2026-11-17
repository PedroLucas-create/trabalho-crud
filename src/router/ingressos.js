import { Router } from "express";
import { conn } from "../configbd.js"
import bcrypt from "bcrypt"

const ingreRouter = Router()

ingreRouter.post("/cadastrandoIngre", async (req, res)=>{
    const{ cliente, sessao, adicionais, quantidades }=req.body
    const pagamento = adicionais*5 + quantidades*40
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
ingreRouter.get("/mostrarIngre", (req, res)=>{
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
ingreRouter.delete("/deleteIngre",  async (req, res)=>{
    const{id}= req.body
    conn.query(`delete from ingressos where id = ${id}`,
        (err, result)=>{
            if(err){
                console.log("erro ao deletar ingresso")
            }else{
                res.json({
                    resultado: "deletado com sucesso"
                })
            }
        }
    ) 
})
ingreRouter.put("/mudarIngre", async (req, res)=>{
    const{id, cliente, sessao, adicionais, quantidades }=req.body
    const pagamento = adicionais*5 + quantidades*40
    conn.query(`update ingressos into cliente = '${cliente}', sessao = ${sessao}, adcionais = ${adicionais}, quantidadeas = ${quantidades}, pagamento = ${pagamento}`,
       (err, result)=>{
        if(err){
            console.log("erro ao atualizar ingresso")
        }else{
            res.json({
                resultado: `atualizado com sucesso: ${result}`
            })
        }
       } 
    )
})

export{ingreRouter}