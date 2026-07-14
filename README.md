# Sistema de Permutas entre Servidores Públicos

Sistema desenvolvido para **gerenciamento de pedidos de permuta entre servidores públicos**, permitindo o cadastro, visualização, edição e remoção de solicitações de troca de localização.

---
# Desenvolvedoras

Esse sistema foi desenvolvimento afim de averiguar os conhecimentos sobre a matéria de **Tópicos Espesiais de Sistemas de Informação (TESI)**, *especialmente sobre a prática do CRUD, do 4º ano do curso de Sistemas de Informação da Universidade Estadual de Mato Grosso do Sul (UEMS) - campus Dourados, ministrada pelo Prof. Jeferson*.
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
Buscar servidor por ID
Atualizar servidor
Excluir servidor

## 2. Permutas
Criar pedido de permuta
Listar permutas
Buscar permuta por ID
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
- JSON Web Tokens (JWT)
- Bcrypt
- MongoDB
- Mongoose
- Insomnia

---

# Rotas de API
- POST -> responsável pelo cadastro
- GET -> responsável por listar
- PUT -> responsável por atualizar
- DELETE -> responsável por deletar/apagar

---

# Tutorial de Instalação e Execução do Projeto

Este documento apresenta o passo a passo necessário para configurar o ambiente, executar a aplicação e realizar testes.

---

## 1. Pré-requisitos

Antes de iniciar, certifique-se de possuir os seguintes softwares instalados:

- Git
- Node.js (versão 18 ou superior)
- MongoDB Community Server ou MongoDB Compass
- Visual Studio Code (ou outra IDE)
- Insomnia (para testes da API)

---

## 2. Clonar o repositório

Abra o terminal e execute:

   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   ```

Entre na pasta do projeto:

   ```bash
   cd NOME_DO_PROJETO
   ```

---

## 3. Instalar as dependências

Execute o comando:

```bash
npm install express mongoose jsonwebtoken bcrypt dotenv
```

## 4. Criar o banco de dados

Abra o MongoDB Compass.

Clique em **Create Database**.

Preencha os seguintes campos:

**Database Name**

```text
permutacao
```

**Collection Name**

Pode ser qualquer nome, por exemplo:

```text
teste
```

Clique em **Create Database**.

> Observação: As coleções Servidores, Cidades e Permutas serão criadas automaticamente pela aplicação quando os primeiros registros forem inseridos.

---

## 5. Criar o arquivo .env

Na raiz do projeto, crie um arquivo chamado:

```text
.env
```

Dentro dele adicione:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/permutacao
```

---

## 6. Iniciar a aplicação

Execute:

```bash
npm run dev
```

Se tudo estiver correto, será exibida uma mensagem semelhante a:

```text
MongoDB conectado com sucesso.
Servidor rodando na porta 3000.
```

---

## 7. Testando a API

Abra o Insomnia.

Crie uma nova Collection chamada:

```text
Permutação API
```

Utilize a URL base:

```text
http://localhost:3000
```

---

### Cidades

#### Cadastrar cidade

**POST**

```http
http://localhost:3000/cidades
```

Body (JSON): dados podem ser retirados de dados.json

---

#### Listar cidades

**GET**

```http
http://localhost:3000/cidades
```

---

#### Buscar cidade por ID (GET) || Atualizar cidade (PUT) || Excluir cidade (DELETE)

```http
http://localhost:3000/cidades/{id}
```

---

### Servidores

#### Cadastrar servidor

**POST**

```http
http://localhost:3000/servidores
```

Body: dados podem ser retirados de dados.json

---

#### Listar servidores

**GET**

```http
http://localhost:3000/servidores
```

---

#### Buscar servidor por ID (GET) || Atualizar servidor (PUT) || Excluir servidor (DELETE)

```http
http://localhost:3000/servidores/{id}
```

---

### Permutas

#### Criar pedido de permuta

**POST**

```http
http://localhost:3000/permutas
```

Body:

```json
{
    "servidor1": "ID_DO_SERVIDOR",
    "servidor2": "ID_DO_SERVIDOR",
    "status": false
}
```

---

#### Listar permutas

**GET**

```http
http://localhost:3000/permutas
```

---

#### Buscar permuta por ID (GET) || Atualizar permuta (PUT) || Excluir permuta (DELETE)

```http
http://localhost:3000/permutas/{id}
```

---

### Coleção de Requisições

Para facilitar os testes da aplicação, o projeto disponibiliza na raiz do repositório o arquivo:

   ```text
   permutacao_API.json
   ```

Esse arquivo corresponde à coleção de requisições do **Insomnia**, contendo todas as rotas da API já configuradas, incluindo os métodos **GET**, **POST**, **PUT** e **DELETE** para os recursos **Servidores**, **Cidades** e **Permutas**.

#### Como importar a coleção

1. Abra o **Insomnia**.
2. Clique em **Create** → **Import**.
3. Selecione a opção **From File**.
4. Escolha o arquivo `permutacao_API.json` localizado na raiz do projeto.
5. Após a importação, todas as requisições estarão disponíveis e prontas para uso.

> **Observação:** 
   Antes de realizar os testes, certifique-se de que o servidor da aplicação esteja em execução e que o banco de dados MongoDB esteja conectado corretamente. 
   Além disso, algumas requisições necessitam de um "id" no final da sua URL, sendo informado com "{id}", modifique este campo para o "id" desejado, que pode ser visto na pesquisa de todos (ex.: todas as cidades).
   Para cadastro de permutas é necessário fazer login e salvar o código Token, ao ir em cadastrar permuta em "Auth" coloque o Token do usuário, e depois informe o segundo servidor e a cidade pelo ID.
   Os servidores devem ser cadastrados 1 a 1, no arquivo "dados.json" possui mais usuários pré-prontos.

---

## 8. Encerrar a aplicação

Para interromper a execução do servidor, pressione:

```text
CTRL + C
```

---

# Observações

- O banco de dados utilizado é o **MongoDB**.
- O projeto utiliza **Express.js** como framework para a API REST.
- O acesso ao banco de dados é realizado por meio do **Mongoose**.
- As credenciais de conexão são armazenadas no arquivo `.env`, garantindo maior segurança e facilitando a configuração do ambiente.
