import { Router } from "express"
import Servidores from "../models/permutas.js"

const router = Router();

//CRUD, manipuçação de dados, criar, ler, atualizar e deletar de PERMUTAS
router.get('/permutas', async (req, res) => {
    try {
        const permutas = await Permuta.find()
        res.json(permutas)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

router.post('/permutas', async (req, res) => {
    try {
        const novaPermuta = new Permuta(req.body)
        await novaPermuta.save()
        res.send('Permuta adicionada com sucesso!')
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

export default router;