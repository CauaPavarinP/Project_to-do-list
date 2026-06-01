const express = require("express");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Project_ToDoList"
});

connection.connect((err) => {

    if(err){
        console.log("Erro ao conectar");
        return;
    }

    console.log("Conectado ao MySQL!");
});

app.listen(3000, () => {
    console.log("Servidor rodando");
});