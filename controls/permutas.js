import Permuta from "./../models/permutas.js";
import verificarToken from "../middleware/verificarToken.js";

const buscarTodasPermutas = async (req, res) => {
    try {
        const permutas = await Permuta.find();

        res.status(201).json(permutas);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar permutas." });
    }
};

const buscarPermutaID = async (req, res) => {
    try {
        const { id } = req.params;
        const permuta = await Permuta.findById(id);

        if (!permuta) {
            return res.status(404).json("Permuta não encontrada.");
        }

        res.status(201).json(permuta);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar permuta." });
    }
}

const criarPermuta = async (req, res) => {
    try {
        const servidor1 = req.usuario.id;
        const { servidor2, cidadeTroca } = req.body;

        const novaPermuta = new Permuta({
            servidor1,
            servidor2,
            cidadeTroca
        });

        await novaPermuta.save();
        
        res.status(201).json(
            {
                "erro": false,
                "mensagem": "Permuta criada com sucesso!"
            }
        );
    } catch (error) {
       res.status(500).json(
            {
                "erro": true,
                "mensagem": "Erro ao criar permuta."
            }
       );
    }
};

const alterarPermuta = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const permutaAtualizada = await Permuta.findByIdAndUpdate(id, body, { returnDocument: 'after' });

        if (!permutaAtualizada) {
            return res.status(404).json({ error: "Permuta não encontrada." });
        }

        res.status(200).json(permutaAtualizada);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar permuta." });
    }
};

const excluirPermuta = async (req, res) => {
    try {
        const { id } = req.params;
        const permutaDeletada = await Permuta.findByIdAndDelete(id);

        if (!permutaDeletada) {
            return res.status(404).json({ error: "Permuta não encontrada." });
        }

        res.status(200).json({ message: "Permuta deletada com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar permuta." });
    }
};

export { buscarTodasPermutas, buscarPermutaID, criarPermuta, alterarPermuta, excluirPermuta };