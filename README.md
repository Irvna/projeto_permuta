# Sistema de Permutas entre Servidores Públicos

Sistema desenvolvido para **gerenciamento de pedidos de permuta entre servidores públicos**, permitindo o cadastro, visualização, edição e remoção de solicitações de troca de localização.

---
# Desenvolvedoras

Esse sistema foi desenvolvimento afim de averiguar os conhecimentos sobre a matéria de **Tópicos Espesiais de Sistemas de Informação (TESI)**, *especialmente sobre a prática do CRUD, do 4º do curso de Sistema de Informação da Universidade Estadual de Mato Grosso do Sul (UEMS) - campus Dourados, ministrada pelo Prof. Jeferson*.
Sendo **desenvolvido pelas alunas**:
   - Amanda Salvino da Costa - rgm49900
   - Irvna Maria Costa Soares - rgm49115

---

# Objetivo

O projeto tem como objetivo facilitar o cadastro e consulta de pedidos de permuta entre servidores públicos, permitindo que usuários informem sua cidade atual e a cidade desejada para transferência.

---

# Funcionalidades

## 1. Servidores
Cadastrar servidor
Listar servidores
Atualizar servidor
Excluir servidor

## 2. Permutas
Criar pedido de permuta
Listar permutas
Atualizar permuta
Excluir permuta

## 3. Cidades
Cadastro de cidades
Excluir cidade
Atualizar cidade
Associação de cidade atual e cidade desejada

---

# Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Insomnia

---

# Rotas de API
   POST -> responsável pelo cadastro
   GET -> responsável por listar
   PUT -> responsável por atualizar
   DELETE -> responsável por deletar/apagar

---

# Instalação

## 1. Clone o repositório
   git clone https://github.com/Irvna/projeto_permuta.git

## 2. Acesse a pasta do projeto
   cd projeto-permuta

## 3. Instale as dependências
   npm install express mongoose3

## 4. Inicie o servidor
   node server.js
