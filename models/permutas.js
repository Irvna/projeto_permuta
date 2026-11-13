import { Schema, model } from "mongoose";

const PermutaSchema = new Schema({
    servidor1: { type: Schema.Types.ObjectId, ref: 'Servidores', required: true },
    servidor2: { type: Schema.Types.ObjectId, ref: 'Servidores' },
    status: {
        type: String,
        enum: ['solicitada', 'aceita', 'recusada', 'cancelada', 'concluida'],
        default: 'solicitada'
    },
    cidadeTroca: { type: Schema.Types.ObjectId, ref: 'Cidades', required: true },
    justificativa: { type: String, required: true },
    observacoes: { type: String }
});

const Permuta = model('Permutas', PermutaSchema);

export default Permuta;