var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var professores = require('./routes/professores')
var alunos = require('./routes/alunos')
var login = require('./routes/login')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

require('./db/mongo.connection')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

app.use('/api/v1/users', users);
app.use('/professor/', professores);
app.use('/aluno/', alunos);
app.use('/conta/', login)

module.exports = app;
