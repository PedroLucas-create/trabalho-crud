import mysql from "mysql2"
import "dontenv/config"

const conn = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.en
})

conn.connect((err)=>{
    if(err){
        console.log("errou ao conectar ao Banco de Dados")
        return;
    };
    console.log("conectado ao Banco de Dados")
})

export{conn}