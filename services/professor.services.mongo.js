const ProfessorModel = require('../models/professor.models.mongo')

class ProfessorService {
    
    static list(req, res) {
        ProfessorModel.find()
        .then(
            (professores) => {
                res.status(201).json(professores)
            }
        )
        .catch(
            (err)=>console.log(err)
        )
    }

    static register(req, res) {
        ProfessorModel.create(req.body)
        .then(
            (professor) => {
                res.status(201).json(professor)
            }
        )
        .catch(
            (err)=>console.log(err)
        )
    }

    static update(req, res){
        ProfessorModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(
            (professor) => {
                res.status(201).json(professor);
            }            
        )
        .catch(
            err=>console.log(err)
        )
    }

    static delete(req, res){
        ProfessorModel.findByIdAndRemove(req.params.id)
        .then(
            (professor) => {
                res.status(201).json(professor);
            }            
        )
        .catch(
            err=>console.log(err)
        )
    }

    static retrieve(req, res){
        ProfessorModel.findById(req.params.id)
        .then(
            (professor) => res.status(201).json(professor)
        )
        .catch(
            err=>console.log(err)
        )
    }

}

module.exports = ProfessorService;