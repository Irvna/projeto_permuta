import { Router } from "express"
import Servidores from "../models/cidades.js"

const router = Router();

//CRUD, manipuçação de dados, criar, ler, atualizar e deletar de CIDADES
router.get('/cidades', async (req, res) => {
    try {
        const cidades = await Cidade.find()
        res.json(cidades)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

router.post('/cidades', async (req, res) => {
    try {
        const novCidade = new Cidade(req.body)
        await novCidade.save()
        res.send('Cidade adicionada com sucesso!')
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

export default router;