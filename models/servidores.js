import { Schema, model } from "mongoose";

const ServidorSchema = new Schema({
    nome: { type: String, required: true },
    orgao: { type: String, required: true },
    cargo: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    cidadeAtual: { type: Schema.Types.ObjectId, ref: 'Cidades' },
    cidadeDesejada: { type: Schema.Types.ObjectId, ref: 'Cidades' }
});

const Servidor = model('Servidores', ServidorSchema);

export default Servidor;