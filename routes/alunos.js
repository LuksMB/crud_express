var express = require('express');
var router = express.Router();
var alunoServiceMongo = require('../services/aluno.services.mongo');

router.get(
    "/listar",
    (req, res) => {
        alunoServiceMongo.list(req, res)
    }
)

router.get(
    "/recuperar/:id",
    (req, res) => {
        alunoServiceMongo.retrieve(req, res)
    }
)

router.post(
    "/registrar",
    (req, res) => {
        alunoServiceMongo.register(req, res)
    }
)

router.put(
    "/atualizar/:id",
    (req, res) => {
        alunoServiceMongo.update(req, res)
    }
)

router.delete(
    "/deletar/:id",
    (req, res) => {
        alunoServiceMongo.delete(req, res)
    }
)

module.exports = router;
