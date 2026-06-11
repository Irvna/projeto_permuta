import express from "express"
<<<<<<< Updated upstream
import routerServidores from "./rotas/servidores.js"
import routerCidade from "./rotas/cidades.js"
import routerPermuta from "./rotas/permutas.js"

import "./connection.js"

const app = express();
app.use(express.json());

//Rotas
app.use("/servidores", routerServidores);
app.use("/cidades", routerCidade);
app.use("/permutas", routerPermuta);
=======
import connection from "./connection.js"
import servidoresRouter from "./routes/servidores.js"
import cidadesRouter from "./routes/cidades.js"
import permutasRouter from "./routes/permutas.js"

const app = express();
app.use(express.json());

app.use('/', servidoresRouter);
app.use('/', cidadesRouter);
app.use('/', permutasRouter);
>>>>>>> Stashed changes

//Servidor vai rodar na porta 3000
app.listen(3000, ()=> {
    console.log("Servidor Rodando na porta 3000")
});