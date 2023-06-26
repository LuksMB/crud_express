const AlunoModel = require('../models/aluno.models.mongo')

class AlunoService {
    
    static list(req, res) {
        AlunoModel.find()
        .then(
            (alunos) => {
                res.status(201).json(alunos)
            }
        )
        .catch(
            (err)=>console.log(err)
        )
    }

    static register(req, res) {
        AlunoModel.create(req.body)
        .then(
            (aluno) => {
                res.status(201).json(aluno)
            }
        )
        .catch(
            (err)=>console.log(err)
        )
    }

    static update(req, res){
        AlunoModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(
            (aluno) => {
                res.status(201).json(aluno);
            }            
        )
        .catch(
            err=>console.log(err)
        )
    }

    static delete(req, res){
        AlunoModel.findByIdAndRemove(req.params.id)
        .then(
            (aluno) => {
                res.status(201).json(aluno);
            }            
        )
        .catch(
            err=>console.log(err)
        )
    }

    static retrieve(req, res){
        AlunoModel.findById(req.params.id)
        .then(
            (aluno) => res.status(201).json(aluno)
        )
        .catch(
            err=>console.log(err)
        )
    }

}

module.exports = AlunoService;