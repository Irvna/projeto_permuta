import express from "express"
import "./connection.js"
import Servidor from "./models/servidores.js"
import Cidade from "./models/cidades.js"
import Permuta from "./models/permutas.js"

const app = express();
app.use(express.json());

//CRUD, manipuçação de dados, criar, ler, atualizar e deletar de SERVIDORES
app.get('/servidores', async (req, res) => {
    try {
        const servidores = await Servidor.find()
        //status() serve para definir o status da resposta, nesse caso 201 que é o status de criado
        res.status(201).json(servidores)
    } catch (error) {
        //500 que é o status de erro interno do servidor
        res.status(500).send({error: "Erro ao buscar servidores"})
    }
});

app.get('/servidores/:id', async (req, res) => {
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

app.post('/servidores', async (req, res) => {
    try {
        const novoServidor = new Servidor(req.body)
        await novoServidor.save()
        res.send('Servidor adicionado com sucesso!')
    } catch (error) {
        res.status(500).send({error: "Erro ao criar servidores"})
    }
});

//CRUD, manipuçação de dados, criar, ler, atualizar e deletar de CIDADES
app.get('/cidades', async (req, res) => {
    try {
        const cidades = await Cidade.find()
        res.json(cidades)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

app.post('/cidades', async (req, res) => {
    try {
        const novCidade = new Cidade(req.body)
        await novCidade.save()
        res.send('Cidade adicionada com sucesso!')
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

//CRUD, manipuçação de dados, criar, ler, atualizar e deletar de PERMUTAS
app.get('/permutas', async (req, res) => {
    try {
        const permutas = await Permuta.find()
        res.json(permutas)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

app.post('/permutas', async (req, res) => {
    try {
        const novaPermuta = new Permuta(req.body)
        await novaPermuta.save()
        res.send('Permuta adicionada com sucesso!')
    } catch (error) {
        res.send(`Error: ${error}`)
    }
});

//Servidor vai rodar na porta 3000
app.listen(3000, ()=> {
    console.log("Servidor Rodando na porta 3000")
});