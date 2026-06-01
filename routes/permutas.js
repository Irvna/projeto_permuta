import { Router } from "express";
import Permuta from "../models/permutas.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const permutas = await Permuta.find()
        res.json(permutas)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

router.post('/', async (req, res) => {
    try {
        const novaPermuta = new Permuta(req.body)
        await novaPermuta.save()
        res.send('Permuta adicionada com sucesso!')
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

router.put('/:id', async (req, res) => {
    try {
            const {id} = req.params;
            const body = req.body;
            const permutaAtualizada = await Permuta.findByIdAndUpdate(id, body, {new: true})

            if (!permutaAtualizada) return res.status(404).send('Permuta não encontrada')

            res.status(200).json(permutaAtualizada)
    } catch (error) {
        res.status(500).send({error: "Erro ao atualizar permuta"})
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const permutaDeletada = await Permuta.findByIdAndDelete(id)
        
        if (!permutaDeletada) return res.status(404).send({error: "Permuta não encontrada"})

        res.status(200).send({message: "Permuta deletada com sucesso!"})
    } catch (error) {
        res.status(500).send({error: "Erro ao deletar permuta"})
    }
});

export default router;