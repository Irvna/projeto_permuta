import { Router } from "express";
import {buscarTodosServidores, buscarServidorID, criarServidor, alterarServidor, excluirServidor} from "./../controls/servidores.js";

const router = Router();

router.get("/servidores", buscarTodosServidores);

router.get("/servidores/:id", buscarServidorID);

router.post('/servidores', criarServidor);

router.put('/servidores/:id', alterarServidor);

router.delete('/servidores/:id', excluirServidor);
export default router;