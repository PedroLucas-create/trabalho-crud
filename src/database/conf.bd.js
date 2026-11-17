import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const conn = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

conn.connect((err)=>{
    if(err){
        console.log("errou ao conectar ao Banco de Dados")
        return;
    }
    else{
    console.log("conectado ao Banco de Dados")}
})

export{conn}