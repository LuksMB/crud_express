var express = require('express');
var router = express.Router();
var loginService = require('../services/LoginService');

//Serviço adaptado para receber dados pelo body e comparar com o banco de dados do próprio service pelo express.
router.post(
    "/login",
    (req, res) => {
        const login = loginService.realizarLogin(req.body)
        return res.json(login)
    }
)

module.exports = router;