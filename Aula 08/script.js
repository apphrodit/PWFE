const inpEmail = document.querySelector("#email");
const inpSenha = document.querySelector("#senha");

const base = [
    {
        "email" : "teste@gmail.com",
        "senha" : "4321",
        "nome" : "Teste Testador",
        "id" : 4
    },
    {
        "email" : "beltrano@gmail.com",
        "senha" : "9876",
        "nome" : "Zé Beltrano",
        "id" : 5
    },
    {
        "email" : "ciclano@gmail.com",
        "senha" : "0123",
        "nome" : "Ciclano Da Silva 4 ",
        "id" : 6
    }
]

function autenticar(){
    let email = inpEmail.value;
    let senha = inpSenha.value

    let usuario = base.find((user)=>{
        return ((user.email == email) && (user.senha  == senha))
    })

    if(usuario != undefined){
        let info = {
            "id" : usuario.id,
            "nome":usuario.nome
        }
        localStorage.setItem("usuario", JSON.stringify(info));

        window.location.href = "./home.html";
    }else{
        alert("Rala.")
    }

   /* let infoUusario = {
        "email" : email,
        "senha" : senha
    }

    let options = {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json"
        },
        "body" : JSON.stringify(infoUsuario) 
    };

    fetch("http://hostapi.com:3000/login", options)
    .then(resp => {return resp.json()})
    .then(data => {
        data = {
            "id" : 1,
            "username" : "Fulano",
            "role" : "Gerente"
        }
        console.log(data);
    })*/

    //if((email == "fulano@gmail.com") && (senha == "12345")){
        //let info ={
            //"username" : "Fulano da Silva",
           // "userId" :5
       // }
       // localStorage.setItem("userdata", JSON.stringify(info));

       // window.location.href = "./home.html"
   // }else{
       // alert("Login Invalido");
//}
}
//local storage, fica vinculado ao sistema e    
//Utilizar o post para criar o login (mais seguro).
