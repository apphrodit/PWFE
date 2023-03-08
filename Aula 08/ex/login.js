const inpEmail = document.querySelector("#email");
const inpSenha = document.querySelector("#senha");

function autenticar(){
    let email = inpEmail.value;
    let senha = inpSenha.value;
    
    let usuario = base.find((user) =>{
        return ((user.email == email) && (user.senha == senha))
    })

    if(usuario != undefined){
        let info = {
            "id" : usuario.id,
            "nome" : usuario.nome
        }
        localStorage.setItem("usuario", JSON.stringify(info));

        window.location.href = "./home.html";
    }else{
        alert("Usuário e/ou Senha Inválidos")
    }
}
