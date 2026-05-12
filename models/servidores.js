import {Schema, model} from 'mongoose';

const ServidorSchema = new Schema({
    servidor1: {type: moongoose.Schema.Types.Schema.Types.ObjectId, ref: "Servidor"},
    servidor2: {type: moongoose.Schema.Types.Schema.Types.ObjectId, ref: "Servidor"},
    status: {type: Boolean, default: false},
    cidadeTroca:{type: mongoose.Schema.Types.ObjectId, ref: "Cidade"}
});

const Servidor = model('Servidores', ServidorSchema);

export default Servidor;