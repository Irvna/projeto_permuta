import { Router } from "express";
import { buscarTodasPermutas, buscarPermutaID, criarPermuta, alterarPermuta, excluirPermuta } from "./../controls/permutas.js";
import verificarToken from "../middleware/verificarToken.js";

const router = Router();

router.get('/permutas', buscarTodasPermutas);

router.get('/permutas/:id', buscarPermutaID);

router.post('/permutas', verificarToken, criarPermuta);

router.put('/permutas/:id', alterarPermuta);

router.delete('/permutas/:id', excluirPermuta);

export default router;