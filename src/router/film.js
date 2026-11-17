import express, { Router } from "express"
import "dotenv/config";
import { conn } from "../database/conf.bd.js"

const film = Router()

film.get("/filmes", (req, res)=>{
    const show =`
    SELECT * FROM filmes
`
    conn.query(show,
    (err, result)=>{
        if (err){
            return res.json(err.message)
        }
        res.json({result})
    })
})  

export {film}