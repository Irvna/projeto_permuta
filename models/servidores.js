import {Schema, model} from 'mongoose';

const ServidorSchema = new Schema({
    nome: {type: String, required: true},
    orgao: {type: String, required: true},
    cargo: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: Number, required: true},
    cidadeAtual:{type: Schema.Types.ObjectId, ref: "Cidade"},
    cidadeDesejada:{type: Schema.Types.ObjectId, ref: "Cidade"}
});

const Servidor = model('Servidores', ServidorSchema);

export default Servidor;