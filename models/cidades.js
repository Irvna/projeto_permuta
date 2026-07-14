import { Schema, model } from "mongoose";

const CidadeSchema = new Schema({
    //o required é para garantir que o campo seja preenchido
    //o trim é para remover espaços em branco no início e no final do valor
    //o uppercase é para garantir que o valor seja armazenado em maiúsculas
    nomeCidade: { type: String, required: true, trim: true, uppercase: true },
    estado: { type: String, required: true, trim: true, uppercase: true }
});

// Nome e o Estado devem ser únicos
CidadeSchema.index(
    { nomeCidade: 1, estado: 1 },
    { unique: true }
);

const Cidade = model('Cidades', CidadeSchema);

export default Cidade;