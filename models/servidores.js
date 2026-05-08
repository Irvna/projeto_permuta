import {Schema, model} from 'mongoose';

const ServidorSchema = new Schema({
    nome: {type: String, required: true},
    orgao: {type: String, required: true},
    cargo: {type: String, required: true},
    //cidadeAtual:{type: mongoose.Schema.Types.ObjectId, ref: "Cidade"}
    //cidadeDesejada:{type: mongoose.Schema.Types.ObjectId, ref: "Cidade"}
});

const Servidor = model('Servidores', ServidorSchema);

export default Servidor;