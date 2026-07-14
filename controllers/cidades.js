import Cidade from "./../models/cidades.js";

const criarCidade = async (req, res) => {
    try {
        //cse array, permite criar varias cidades de uma só vez [{},{},{}]
        if (Array.isArray(req.body)) {
            //ordered: false faz o Mongo tentar inserir todos os documentos,
            //ignorando os que derem erro de duplicidade, em vez de parar no primeiro erro
            try {
                await Cidade.insertMany(req.body, { ordered: false });
                return res.status(201).json({ message: "Cidades cadastradas com sucesso!" });
            } catch (error) {
                //insertMany com ordered:false lança um erro mesmo inserindo os válidos
                if (error.code === 11000 || error.writeErrors) {
                    const duplicadas = (error.writeErrors || [])
                        .filter(e => e.code === 11000)
                        .map(e => e.err?.op || e.op);

                    return res.status(207).json({
                        message: "Algumas cidades foram cadastradas, mas outras já existiam.",
                        duplicadas
                    });
                }
                throw error;
            }
        }

        const novaCidade = new Cidade(req.body);
        await novaCidade.save();
        res.status(201).json({ message: "Cidade cadastrada com sucesso!" });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                error: "Já existe uma cidade cadastrada com esse nome nesse estado."
            });
        }
        res.status(500).json({ error: "Erro ao criar cidade." });
    }
};

const buscarTodasCidades = async (req, res) => {
    try {
        const cidades = await Cidade.find();
        res.status(200).json(cidades);
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

export { criarCidade, buscarTodasCidades, buscarCidadeID, alterarCidade, excluirCidade };