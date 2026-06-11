import Servidor from "./../models/servidores.js";

const buscarTodosServidores = async (req, res) => {
    try {
        const servidores = await Servidor.find()
        res.status(201).json(servidores)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar servidores." })
    }
};

const buscarServidorID = async (req, res) => {
    try {
        const { id } = req.params
        const servidores = await Servidor.findById(id)
        if (!servidores) {
            res.status(200).json("Servidor não encontrado.")
        }
        res.status(201).json(servidores)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar servidor." })
    }
}

const criarServidor = async (req, res) => {

    const novaServidor = new Servidor(req.body)
    await novaServidor.save()
    res.status(201).json(
        {
            "erro": false,
            "mensagem": "Servidor salvo com sucesso!"
        }
    )
};

const alterarServidor = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const servidorAtualizada = await Servidor.findByIdAndUpdate(id, body, { new: true })

        if (!servidorAtualizada) {
            res.status(404).json({ error: "Servidor não encontrado." })
        }
        res.status(200).json(servidorAtualizada)
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar servidor." })
    }
};

const excluirServidor = async (req, res) => {
    try {
        const { id } = req.params;
        const servidorDeletada = await Servidor.findByIdAndDelete(id)

        if (!servidorDeletada){
            return res.status(404).json({ error: "Servidor não encontrada." })
        }

        res.status(200).json({ message: "Servidor deletada com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar servidor." })
    }
};

export {buscarTodosServidores, buscarServidorID, criarServidor, alterarServidor, excluirServidor};