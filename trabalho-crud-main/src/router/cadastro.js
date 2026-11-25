import { Router } from "express";
import bcrypt from "bcrypt";
import { conn } from "../database/conf.bd.js";

const cadastroRouter = Router();

cadastroRouter.post("/cadastro", async (req, res) =>{
    try {

        const {nome, email, senha} = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({
                erro: "Preencha todos os campos."
            });
        }

        const fator_custo = 10;
        const senhahash = await bcrypt.hash(senha, fator_custo);

        const comandobd = "INSERT INTO cadastro (nome, email, senha) VALUES (?, ?, ?)";

        conn.query(comandobd, [nome, email, senhahash], (falha, resultado) =>{
            if (falha) {
                console.error("Erro ao cadastrar usuário:", falha);

                return res.status(500).json({ 
                    erro: "Erro ao cadastrar usuário" 
                });
            }
            res.status(201).json({
                mensagem: "Usuário cadastrado", id: resultado.insertId 
            });
        });
        } catch (erro) {
        res.status(500).json({erro: "Erro interno no servidor" });
    }
});

export default cadastroRouter;