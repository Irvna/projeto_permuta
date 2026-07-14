import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

//realiza conexão com o banco de dados MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Sucesso ao conectar com o MongoDB');
    })
    .catch((error) => {
        console.log('Falha ao conectar com o MongoDB: ', error);
    });

export default mongoose;