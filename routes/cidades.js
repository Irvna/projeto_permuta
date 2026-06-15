import { Router } from "express";
import {buscarTodasCidades, criarCidade, alterarCidade, excluirCidade} from "./../controls/cidades.js";

const router = Router();

router.get("/cidades", buscarTodasCidades);

router.post('/cidades', criarCidade);

router.put('/cidades/:id', alterarCidade);

router.delete('/cidades/:id', excluirCidade);

export default router;