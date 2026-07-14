import { Router } from "express";
import { criarCidade, buscarTodasCidades, buscarCidadeID, alterarCidade, excluirCidade } from "./../controls/cidades.js";

const router = Router();

router.post('/cidades', criarCidade);

router.get('/cidades', buscarTodasCidades);

router.get('/cidades/:id', buscarCidadeID);

router.put('/cidades/:id', alterarCidade);

router.delete('/cidades/:id', excluirCidade);

export default router;