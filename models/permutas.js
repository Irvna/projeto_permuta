import {Schema, model} from 'mongoose';

const PermutaSchema = new Schema({
    //required é para garantir que o campo seja preenchido
    servidor1: {type: Schema.Types.ObjectId, ref: "Servidor"},
    servidor2: {type: Schema.Types.ObjectId, ref: "Servidor"},
    status: {type: Boolean, default: false},
    cidadeTroca:{type: Schema.Types.ObjectId, ref: "Cidade"}
});

const Permuta = model('Permutas', PermutaSchema);

export default Permuta;