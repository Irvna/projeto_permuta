import { Router } from "express"
import Servidores from "../models/servidores.js"

const router = Router();

//CRUD, manipuçação de dados, criar, ler, atualizar e deletar de SERVIDORES
router.get('/servidores', async (req, res) => {
    try {
        const servidores = await Servidor.find()
        //status() serve para definir o status da resposta, nesse caso 201 que é o status de criado
        res.status(201).json(servidores)
    } catch (error) {
        //500 que é o status de erro interno do servidor
        res.status(500).send({error: "Erro ao buscar servidores"})
    }
});

router.get('/servidores/:id', async (req, res) => {
    try {
        const {id} = req.params
        const servidores = await Servidor.findById(id)
        //status() serve para definir o status da resposta, nesse caso 201 que é o status de criado
        res.status(201).json(servidores)
    } catch (error) {
        //500 que é o status de erro interno do servidor
        res.status(500).send({error: "Erro ao buscar servidores"})
    }
});

router.post('/servidores', async (req, res) => {
    try {
        const novoServidor = new Servidor(req.body)
        await novoServidor.save()
        res.send('Servidor adicionado com sucesso!')
    } catch (error) {
        res.status(500).send({error: "Erro ao criar servidores"})
    }
});

export default router;