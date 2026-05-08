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

app.listen(3000, ()=> {
    console.log("Servidor Rodando na porta 3000")
});