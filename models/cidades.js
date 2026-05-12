import {Schema, model} from 'mongoose';

const CidadeSchema = new Schema({
    nomeCidade: {type: String, required: true},
    estado: {type: [String], required: true}
});

const Cidade = model('Cidades', CidadeSchema);

export default Cidade;