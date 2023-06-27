const ProfessorModel = require("../models/professor.models")

let professores = [
    { id: 0, nome: "Camila Belmont", curso: "SI", titulo: "MEST", ai: {es: true, al: false, ds: true, mc: false} },
    { id: 1, nome: "Vitin do Iôiô", curso: "SI", titulo: "DOUT", ai: {es: false, al: false, ds: false, mc: false}},
    { id: 2, nome: "Abner Gripe", curso: "SI", titulo: "GRAD", ai: {es: false, al: false, ds: false, mc: false} },
    { id: 3, nome: "Geovane", curso: "ES", titulo: "GRAD", ai: {es: false, al: false, ds: false, mc: false} },
    { id: 4, nome: "Vito Corleone", curso: "EC", titulo: "DOUT", ai: {es: false, al: false, ds: false, mc: false} }
]

let id = 5;

class ProfessorService {

    static list(){
        return professores;
    }

    static register(data) {
        let professor = new ProfessorModel(
            id++,
            data.nome,
            data.curso,
            data.titulo,
            data.ai
        );
        professores.push(professor);
        return professor;
    }

    static update(id, data){
        for(let professor of professores){
            if (professor.id == id){
                professor.nome = data.nome;
                professor.curso = data.curso;
                professor.titulo = data.titulo;
                professor.ai = data.ai;
                return professor;
            }
        }
        return null;
    }

    static delete(id){
        for (let i = 0; i < professores.length; i++) {
            if(professores[i].id == id){
                professores.splice(i, 1)
                return true;
            }
            
        }
        return false;
    }

    static retrieve(id){
        for (let i = 0; i < professores.length; i++) {
            if(professores[i].id == id){
                return professores[i];
            }
        }
        return false;
    }
}

module.exports = ProfessorService