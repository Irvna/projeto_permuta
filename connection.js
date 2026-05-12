import mongoose from 'mongoose';
import express from 'express';

//realiza conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/permutacao')
    .then(
        () => {
            console.log('Sucesso ao conectar com o MongoDB')
        })
    .catch(
        (error) => {
            console.log('Falha ao conectar com o MongoDB: ', error)
        })

export default mongoose;