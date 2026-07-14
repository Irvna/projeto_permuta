import { Schema, model } from "mongoose";

const ServidorSchema = new Schema({
    nome: { type: String, required: true },
    orgao: { type: String, required: true },
    cargo: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,

        validate: {
            validator: function(email) {
                /*
                    ^: Indica o início da linha
                    [a-zA-Z0-9._%+-]+: Permite letras, números e caracteres.
                    @: Obriga a presença do símbolo de arroba.
                    [a-zA-Z0-9.-]+: Exige caracteres pontos para o nome do domínio 
                    \.: Obriga a presença de um ponto 
                    [a-zA-Z]{2,}: Exige que a extensão do domínio (como ".com", ".com.br") 
                */
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(email);
            },

            message: "E-mail inválido."
        }
    },
    senha: { type: String, required: true },
    cidadeAtual: { type: Schema.Types.ObjectId, ref: 'Cidades' },
    cidadeDesejada: { type: Schema.Types.ObjectId, ref: 'Cidades' }
});

const Servidor = model('Servidores', ServidorSchema);

export default Servidor;