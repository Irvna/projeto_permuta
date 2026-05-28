import {Schema, model} from 'mongoose';

const PermutaSchema = new Schema({
    //required é para garantir que o campo seja preenchido
    nome: {type: String, required: true},
    orgao: {type: String, required: true},
    cargo: {type: String, required: true},
    cidadeAtual:{type: Schema.Types.ObjectId, ref: "Cidade"},
    cidadeDesejada:{type: Schema.Types.ObjectId, ref: "Cidade"}
});

const Permuta = model('Permutas', PermutaSchema);

export default Permuta;