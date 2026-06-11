import {Schema, model} from 'mongoose';

const CidadeSchema = new Schema({
    //o required é para garantir que o campo seja preenchido
    nomeCidade: {type: String, required: true},
    estado: {type: String, required: true}
});

const Cidade = model('Cidades', CidadeSchema);

export default Cidade;