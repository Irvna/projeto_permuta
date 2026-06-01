import { Router } from "express";
import Cidade from "../models/cidades.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const cidades = await Cidade.find()
        res.json(cidades)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

router.post('/', async (req, res) => {
    try {
        const novaCidade = new Cidade(req.body)
        await novaCidade.save()
        res.send('Cidade adicionada com sucesso!')
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

router.put('/:id', async (req, res) => {
    try {
            const {id} = req.params;
            const body = req.body;
            const cidadeAtualizada = await Cidade.findByIdAndUpdate(id, body, {new: true})

            if (!cidadeAtualizada) return res.status(404).send('Cidade não encontrada')

            res.status(200).json(cidadeAtualizada)
    } catch (error) {
        res.status(500).send({error: "Erro ao atualizar cidade"})
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const cidadeDeletada = await Cidade.findByIdAndDelete(id)
        
        if (!cidadeDeletada) return res.status(404).send({error: "Cidade não encontrada"})

        res.status(200).send({message: "Cidade deletada com sucesso!"})
    } catch (error) {
        res.status(500).send({error: "Erro ao deletar cidade"})
    }
});

export default router;