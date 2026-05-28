import express from "express"
import "./connection.js"
import Servidor from "./models/servidores.js"

const app = express();
app.use(express.json());

app.get('/servidores', async (req, res) => {
    try {
        const servidores = await Servidor.find()
        res.json(servidores)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

app.post('/servidores', async (req, res) => {
    try {
        const novoServidor = new Servidor(req.body)
        await novoServidor.save()
        res.send('Servidor adicionado com sucesso!')
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

app.put('/servidores/:id', async (req, res) => {
    try {
            const {id} = req.params;
            const {body} = req;
            const servidorAtualizado = await Servidor.findByIdAndUpdate(id, body, {new: true})

            if (!servidorAtualizado) return res.status(404).send('Servidor não encontrado')

            res.status(200).json(servidorAtualizado)
    } catch (error) {
        res.status(500).send({error: "Erro ao atualizar servidor"})
    }
});

app.delete('/servidores/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const servidorDeletado = await Servidor.findByIdAndDelete(id)
        
        if (!servidorDeletado) return res.status(404).json({error: "Servidor não encontrado"})

        res.status(200).json({message: "Servidor deletado com sucesso!"})
    } catch (error) {
        res.status(500).json({error: "Erro ao deletar servidor"})
    }
});

app.listen(3000, ()=> {
    console.log("Servidor Rodando na porta 3000")
});