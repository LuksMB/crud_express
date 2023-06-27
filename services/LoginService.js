const cadastrados = [
    {user: "camilabelmont", senha: "pikachu333"},
    {user: "lucasmbraga", senha: "biribinha"}

    //Aqui jaz o banco de dados pequeno para validação de login na primeira página
]


    //Aqui jaz a bendita classe que retorna o que a gente quer, true ou false dependendo da correspôndencia entre os dados passados e o do banquinho desse arquivo.
class LoginService {
    static realizarLogin(data){
        for (let i = 0; i < cadastrados.length; i++){
            if (data.user == cadastrados[i].user && data.senha == cadastrados[i].senha){
                return {"res" : true}
            }
        }
        return {"res" : false}
    }
}

module.exports = LoginService