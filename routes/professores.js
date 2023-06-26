var express = require('express');
var router = express.Router();
// var professorService = require("../services/professor.services")
var professorServiceMongo = require('../services/professor.services.mongo');
// const ProfessorModel = require('../models/professor.models.mongo');

router.get(
    "/listar",
    (req, res) => {
        professorServiceMongo.list(req, res)
    }
)

router.get(
    "/recuperar/:id",
    (req, res) => {
        professorServiceMongo.retrieve(req, res)
    }
)

router.post(
    "/registrar",
    (req, res) => {
        professorServiceMongo.register(req, res)
    }
)

router.put(
    "/atualizar/:id",
    (req, res) => {
        professorServiceMongo.update(req, res)
    }
)

router.delete(
    "/deletar/:id",
    (req, res) => {
        professorServiceMongo.delete(req, res)
    }
)

// router.get(
//     "/listar",
//     (req, res, next) => {
//         res.json(professorService.list())
//     }
// )

// router.get(
//     "/recuperar/:id",
//     (req, res, next) => {
//         const out = professorService.retrieve(req.params.id);
//         return res.json(out);
//     }
// )

// router.post(
//     "/registrar",
//     (req, res, next) => {
//         const professor = professorService.register(req.body);
//         res.json(professor)
//     }
// )

// router.put(
//     "/atualizar/:id",
//     (req, res, next) => {
//         const professor = professorService.update(req.params.id, req.body);
//         res.json(professor)
//     }
// )

// router.delete(
//     "/deletar/:id",
//     (req, res, next) => {
//         const ok = professorService.delete(req.params.id);
//         if (ok) {
//             return res.json({ "sucess": true })
//         } else {
//             return res.json({ "sucess": false })
//         }
//     }
// )

module.exports = router;
