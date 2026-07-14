import { Router } from "express";
import { criarPermuta, buscarTodasPermutas, buscarPermutasUsuario, buscarPermutaID, alterarPermuta, excluirPermuta } from "./../controllers/permutas.js";
import verificarToken from "../middleware/verificarToken.js";

const router = Router();

router.post('/permutas', verificarToken, criarPermuta);

router.get('/permutas', buscarTodasPermutas);

router.get('/permutas/usuario', verificarToken, buscarPermutasUsuario);

router.get('/permutas/:id', buscarPermutaID);

router.put('/permutas/:id', alterarPermuta);

router.delete('/permutas/:id', excluirPermuta);

export default router;