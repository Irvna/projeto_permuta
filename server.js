import express from "express";
import routerServidores from "./routes/servidores.js";
import routerCidade from "./routes/cidades.js";
import routerPermuta from "./routes/permutas.js";

import "./connection.js"

const app = express();
app.use(express.json());

//Rotas
app.use("/", routerServidores);
app.use("/", routerCidade);
app.use("/", routerPermuta);

//Servidor vai rodar na porta 3000
app.listen(3000, ()=> {
    console.log("Servidor Rodando na porta 3000")
});