import express from "express"
import "./connection.js"
import servidoresRouter from "./routes/servidores.js"
import cidadesRouter from "./routes/cidades.js"
import permutasRouter from "./routes/permutas.js"


const app = express();
app.use(express.json());

app.use('/servidores', servidoresRouter);
app.use('/cidades', cidadesRouter);
app.use('/permutas', permutasRouter);

app.listen(3000, ()=> {
    console.log("Servidor Rodando na porta 3000")
});