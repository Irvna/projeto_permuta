import jwt from "jsonwebtoken";

const SENHAJWT = "senhaTeste";

const verificarToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.status(401).json({"erro": true, "mensagem": "Não foi possível acessar. Tente novamente."});
    }

    jwt.verify(token, SENHAJWT,  (erro, usuarioDecodificado) => {
        if (erro) {
            return res.status(403).json({"erro": true, "mensagem": "O Token informado não é válido"});
        }

        req.usuario = usuarioDecodificado;

        next()
    })
}

export default verificarToken