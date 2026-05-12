import {Schema, model} from 'mongoose';

const PermutaSchema = new Schema({
    nome: {type: String, required: true},
    orgao: {type: String, required: true},
    cargo: {type: String, required: true},
    cidadeAtual:{type: mongoose.Schema.Types.ObjectId, ref: "Cidade"},
    cidadeDesejada:{type: mongoose.Schema.Types.ObjectId, ref: "Cidade"}
});

const Permuta = model('Permutas', PermutaSchema);

export default Permuta;