import { Router } from "express";
import bcrypt from "bcrypt";
import { conn } from "../database/conf.bd.js";

const loginRouter = Router();

loginRouter.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({
                erro: "Preencha todos os campos"
            });
        }
    const comandobd = "SELECT * FROM cadastro WHERE email = ?";

        conn.query(comandobd, [email], async (falha, resultados) => {
            if (falha) {
                console.error("Erro ao buscar usuário:", falha);
                return res.status(500).json({ erro: "Erro interno no servidor" });
            }
            if (resultados.length === 0) {
                return res.status(401).json({ erro: "E-mail ou senha estão incorretos" });
            }

            const usuario = resultados[0];
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

            if (!senhaCorreta) {
                return res.status(401).json({ erro: "E-mail ou senha estão incorretos" });
            }
            res.status(200).json({
                mensagem: "Seu login foi realizado",
                nome: usuario.nome
            });
        });

    } catch (erro) {
        res.status(500).json({ erro: "Erro interno no servidor" });
    }
});

export default loginRouter;