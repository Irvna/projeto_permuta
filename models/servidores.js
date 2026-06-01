import {Schema, model} from 'mongoose';

const ServidorSchema = new Schema({
    //required é para garantir que o campo seja preenchido
    nome: {type: String, required: true},
    orgao: {type: String, required: true},
    cargo: {type: String, required: true},
    cidadeAtual:{type: Schema.Types.ObjectId, ref: "Cidade"},
    cidadeDesejada:{type: Schema.Types.ObjectId, ref: "Cidade"}
});

const Servidor = model('Servidores', ServidorSchema);

export default Servidor;