/*Arvore Dom*/
//Todas Elas Possuem Um Parâmetro()

//Buscar pelo id: getElementById(id)

//Buscar pela TagName: getElementsByTagName(tag)

//Buscar pela class: getElementsByClassName(class)

/*querySelector("")Define a busca assim como no css exemplo abaixo
#id
.class
tag
*/

//querySelectorAll("") Seleciona todos os elementos definidos, igual o query selector 

//innerHTML Mostraa uma string com os conteudos que estão dentro de alguma tag



//var titulo = document.getElementById("titulo");

//var titulos = document.getElementsByTagName("h1");

//var textos = document.getElementsByClassName("texto")

//var titulos = document.querySelectorAll(".texto");

/*var body = document.querySelector("body");

body.className = "dark";

var paragrafo = document.querySelector("p");
paragrafo.innerHTML = "A Info que eu quiser";

paragrafo.classList.remove("m1")
paragrafo.classList.add("m2");
console.log(paragrafo.classList)
//paragrafo.style.color ="RED"
//paragrafo.style.fontSize = "2rem"*/

/*var body = document.querySelector("body");

body.className = "dark jc df";

body.classList.add("m1");
body.classList.remove("jc");

body.classList.toggle("m2");
body.classList.toggle("m2");


console.log(body.className);
console.log(body.classList);*/

/*var dados = document.querySelectorAll("p");

for(let i = 0; i < dados.length; i++)
    console.log(dados[i].innerHTML);*/



 /*json   
    var pNome = document.querySelector("#nome");
    var pEndereco = document.querySelector("#endereco");
    var pTelefone = document.querySelector("#telefone");
    var pNascimento = document.querySelector("#nascimento");

//json
let dados = {
        "nome": pNome.innerHTML,
        "endereco" : pEndereco.innerHTML,
        "telefone" : pTelefone.innerHTML,
        "nascimento" : pNascimento.innerHTML
    }

console.log(dados);

//json
let info = {
    "nome" : "Fulano da Silva",
    "endereco" : "Avenida das Ruas",
    "telefone" : "16912345678",
    "nascimento" : "09/10/2011"
};

pNome.innerHTML = info.nome;
pEndereco.innerHTML = info.endereco;
pTelefone.innerHTML = info.telefone;
pNascimento.innerHTML = info.nascimento;*/



//ex1

var pNome = document.querySelector("#nome");
var pDescricao = document.querySelector("#descricao");
var pValor = document.querySelector("#valor");  

let dados = {
    "nome" : pNome.innerHTML,
    "descricao" : pDescricao.innerHTML,
    "valor" : pValor.innerHTML
}

console.log(dados)

let info = {
    "nome" : "Headset",
    "descricao" : "Headset Gamer HyperX Cloud -1",
    "valor" : "R$245,00"
};

pNome.innerHTML = info.nome;
pDescricao.innerHTML = info.descricao;
pValor.innerHTML = info.valor;