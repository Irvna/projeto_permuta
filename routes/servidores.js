import { Router } from "express";
import Servidor from "../models/servidores.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const servidores = await Servidor.find()
        res.json(servidores)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

router.post('/', async (req, res) => {
    try {
        const novoServidor = new Servidor(req.body)
        await novoServidor.save()
        res.send('Servidor adicionado com sucesso!')
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

router.put('/:id', async (req, res) => {
    try {
            const {id} = req.params;
            const body = req.body;
            const servidorAtualizado = await Servidor.findByIdAndUpdate(id, body, {new: true})

            if (!servidorAtualizado) return res.status(404).send('Servidor não encontrado')

            res.status(200).json(servidorAtualizado)
    } catch (error) {
        res.status(500).send({error: "Erro ao atualizar servidor"})
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const servidorDeletado = await Servidor.findByIdAndDelete(id)
        
        if (!servidorDeletado) return res.status(404).send({error: "Servidor não encontrado"})

        res.status(200).send({message: "Servidor deletado com sucesso!"})
    } catch (error) {
        res.status(500).send({error: "Erro ao deletar servidor"})
    }
});

export default router;