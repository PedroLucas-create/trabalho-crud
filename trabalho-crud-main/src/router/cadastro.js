import express, { Router } from "express";
import bcrypt from "bcrypt";
import { conn } from "../database/conf.bd.js";

const router = Router();

router.post("/cadastro", async (req, res) =>{
    const {nome, email, senha} = req.body;
    try {
        const saltRounds = 10;
        const senhaHash = await bcrypt.hash(senha, saltRounds);
        const query = "INSERT INTO cadastro (nome, email, senha) VALUES (?, ?, ?)";

        conn.query(query, [nome, email, senhaHash], (falha, result) =>{
            if (falha) {
                console.error("Erro ao cadastrar usuário:", falha);
                return res.status(500).json({ erro: "Erro ao cadastrar usuário. E-mail já pode estar em uso." });
            }
            res.status(201).json({mensagem: "Usuário cadastrado com sucesso!", id: result.insertId });
        });
        } catch (erro) {
        res.status(500).json({erro: "Erro interno no servidor" });
    }
});

export default router;