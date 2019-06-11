const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
//import express from 'express'; //forma ES6
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

/**
 * https://cloud.mongodb.com/
 * banco de dados mongodb de graça!(512MB)
 */
const url_database =
  "mongodb+srv://davi:davi123@cluster0-y8mq2.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url_database, { useNewUrlParser: true });

// adiciona o socket.io em toda requisição
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());

// serve arquivos na url "localhost/files"
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

// usa as rotas definidas no arquivo routes.js
app.use(require("./routes"));

server.listen(8080);
