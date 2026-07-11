import Cidade from "./../models/cidades.js";

const buscarTodasCidades = async (req, res) => {
    try {
        const cidades = await Cidade.find();
        res.status(201).json(cidades);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar cidades." });
    }
};

const buscarCidadeID = async (req, res) => {
    try {
        const { id } = req.params;
        const cidade = await Cidade.findById(id);

        if (!cidade) {
            return res.status(404).json({ error: "Cidade não encontrada." });
        }

        res.status(200).json(cidade);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar cidade." });
    }
};

const criarCidade = async (req, res) => {
    try {
        //cse array, permite criar varias cidades de uma só vez [{},{},{}]
        if (Array.isArray(req.body)) {
            const cidades = await Cidade.insertMany(req.body);
            return res.status(201).json({ message: "Cidades cadastradas com sucesso!" });
        }

        const novaCidade = new Cidade(req.body);
        await novaCidade.save();
        res.status(201).json({ message: "Cidade cadastrada com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar cidade." });
    }
};

const alterarCidade = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const cidadeAtualizada = await Cidade.findByIdAndUpdate(id, body, { returnDocument: 'after' });

        if (!cidadeAtualizada) {
            return res.status(404).json({ error: "Cidade não encontrada." });
        }

        res.status(200).json(cidadeAtualizada);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar cidade." });
    }
};

const excluirCidade = async (req, res) => {
    try {
        const { id } = req.params;
        const cidadeDeletada = await Cidade.findByIdAndDelete(id);

        if (!cidadeDeletada) {
            return res.status(404).json({ error: "Cidade não encontrada." });
        }

        res.status(200).json({ message: "Cidade deletada com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar cidade." });
    }
};

export { buscarTodasCidades, criarCidade, alterarCidade, excluirCidade };