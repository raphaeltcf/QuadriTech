# 🛍 QuadriTech

Um E-commerce de equipamentos Eletronicos feito utilizando os Frameworks RestJS no back e NextJS no Front, os dois com TypeScript e Banco de Dados feito em MongoDB.
Isso é uma colaboração que está sendo feita entre eu e Gabriel Feijo, onde eu estou produzindo o back e ele o front.

---

Tabelas de conteúdoqewq

1.  [Experimente](#expearimente)
2.  [Como ele é](#front)
3.  [Pré requisitos](#prerequisitos)
4.  [Pondo o E-commece para funcionar:](#funcionando)
5.  [(Login)]
6.  [(Register)]
7.  [(Compra)]
8.  [(Carrinho)]
9.  [Features](#features)
10. [Feito Utilizando](#built)

---

<div id='experimente'/>

## 👾 Experimente

Você pode Experimentar clianco aqui no [QuadriTech]().

---

<div id='front'/>

## 🖼 Como ele é:

---

<div id='prerequisitos'/>

## 🚀 Começo

Estas instruções permitirão que você obtenha uma cópia de trabalho do projeto em sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
[Git](https://git-scm.com),
[MongoDB](https://www.mongodb.com/),
[NodeJS](https://nodejs.org/en) e
[Docker](https://www.docker.com/).

Também é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---

<div id='funcionando'/>

### 🎲 Colocando o Chatbot para funcionar:

```bash
# Clone o repositorio
$ git clone https://github.com/raphaeltcf/QuadriTech
```

### No Windows:

```bash
# Back-End

# Acesse a pasta do projeto em terminal/cmd
$ cd QuadriTech

# Instale as dependencias
npm install

# Para funcionar:
$ npm start

# Front-End
Só abrir o arquivo index.html no seu browser

# Run the app in the Browser
```

### No Docker

```bash
# Acesse a pasta do projeto em terminal/cmd
$ cd QuadriTech


# Inicie o Docker
$ docker-compose up


```

### No Linux

```bash
# Acesse a pasta do projeto em terminal/cmd
$ cd QuadriTech


# Instale as bibliotecas:
$ sudo apt update
$ sudo apt install nodejs npm
$ node -v
$ npm -v
$ wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
$ sudo apt update
$ sudo apt install mongodb-org
$ sudo systemctl status mongod

# Para funcionar:
$ npm start

```

---

<div id='features'/>

### ✅ Features

- [x] Integrado com o banco de dados MongoDB
- [x] Responsivo
- [x] CRUD de itens
- [x] CRUD de usuarios
- [x] Verificação de CEP
- [x] Calculando os preços
- [x] Carrinho de compras
- [x] Executando em um contêiner Docker

---

<div id='built'/>

## 🛠️ Feito utilizando

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40" height="40" />
