import Permuta from "./../models/permutas.js";

const buscarTodasPermutas = async (req, res) => {
    try {
        const permutas = await Permuta.find()
        res.status(201).json(permutas)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar permutas." })
    }
};

const buscarPermutaID = async (req, res) => {
    try {
        const { id } = req.params
        const permutas = await Permuta.findById(id)
        if (!permutas) {
            res.status(200).json("Permuta não encontrado.")
        }
        res.status(201).json(permutas)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar permuta." })
    }
}

const criarPermuta = async (req, res) => {

    const novaPermuta = new Permuta(req.body)
    await novaPermuta.save()
    res.status(201).json(
        {
            "erro": false,
            "mensagem": "Permuta criado com sucesso!"
        }
    )
};

const alterarPermuta = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const permutaAtualizada = await Permuta.findByIdAndUpdate(id, body, { new: true })

        if (!permutaAtualizada) {
            res.status(404).json({ error: "Permuta não encontrado." })
        }
        res.status(200).json(permutaAtualizada)
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar permuta." })
    }
};

const excluirPermuta = async (req, res) => {
    try {
        const { id } = req.params;
        const permutaDeletada = await Permuta.findByIdAndDelete(id)

        if (!permutaDeletada){
            return res.status(404).json({ error: "Permuta não encontrada." })
        }

        res.status(200).json({ message: "Permuta deletada com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar permuta." })
    }
};

export {buscarTodasPermutas, buscarPermutaID, criarPermuta, alterarPermuta, excluirPermuta};