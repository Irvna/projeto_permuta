import { Router } from "express";
import {criarServidor, loginServidor, buscarTodosServidores, buscarServidorID, alterarServidor, excluirServidor} from "./../controls/servidores.js";

const router = Router();

router.post('/servidores', criarServidor);

router.post("/servidores/login", loginServidor);

router.get("/servidores", buscarTodosServidores);

router.get("/servidores/:id", buscarServidorID);

router.put('/servidores/:id', alterarServidor);

router.delete('/servidores/:id', excluirServidor);
export default router;