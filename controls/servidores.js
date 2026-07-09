import Servidor from "./../models/servidores.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const SENHAJWT = "senhaTeste";
const RANDOM_PASSWORD = 12;

const criarServidor = async (req, res) => {
    if (!req.body.email || !req.body.senha) {
        return res.status(400).json({
            "erro": true,
            "mensagem": "Email e senha são obrigatórios."
        })
    }

    const servidoresExistentes = await Servidor.findOne({ email: req.body.email })

    if (servidoresExistentes) {
        return res.status(400).json({
            "erro": true,
            "mensagem": "Email já cadastrado."
        })
    }

    const senhaCriptografada = await bcrypt.hash(req.body.senha, RANDOM_PASSWORD)
    const novoServidor = new Servidor({ ...req.body, senha: senhaCriptografada })

    await novoServidor.save()

    res.status(201).json(
        {
            "erro": false,
            "mensagem": "Servidor salvo com sucesso!"
        }
    )
};

const loginServidor = async (req, res) => {
    const { email, senha } = req.body;

    const usuarioTeste = {
        id: 1,
        nome: "Usuário Teste",
        orgao: "Faculdade de Educação",
        cargo: "Professor",
        email: "teste",
        senha: "123"
    }

    //caso o email ou senha informada não seja igual a senha do servidor
    if (!email || !senha) {
        return res.status(400).json({
            erro: true,
            mensagem: "Email ou senha inválidos."
        });
    }

    const usuario = await Servidor.findOne({ email });

    if (!usuario) {
        return res.status(400).json({
            erro: true,
            mensagem: "Email ou senha inválidos."
        });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
        return res.status(400).json({
            erro: true,
            mensagem: "Email ou senha inválidos."
        });
    }

    //caso o email e senha informada seja igual a senha do servidor
    const token = jwt.sign({ id: usuario._id, nome: usuario.nome }, SENHAJWT, { expiresIn: '1h' })

    return res.status(200).json({
        "erro": false,
        "mensagem": "Usuários logado com sucesso",
        "token": token
    })
}

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

        if (!servidorDeletada) {
            return res.status(404).json({ error: "Servidor não encontrada." })
        }

        res.status(200).json({ message: "Servidor deletado com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar servidor." })
    }
};

export { criarServidor, loginServidor, buscarTodosServidores, buscarServidorID, alterarServidor, excluirServidor };