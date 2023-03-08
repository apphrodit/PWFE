/*console.log(paragrafo.innerHTML);

paragrafo.innerHTML = "Novo Texto";*/

var paragrafo = document.querySelector("p");
var inpNome = document.querySelector("#nome");

var foto = document.querySelector("#foto");
var descricao = document.querySelector("#descricao");

function mostrarNome(){
    let valor = inpNome.value;

    let data = {
        "nome" : valor
    };

    paragrafo.innerHTML = JSON.stringify(data); //Stringfy recebe um objeto jason e transforma em string.
    paragrafo.innerHTML = data.nome; 
 }

 function atualizarDados(){
    let info = {
        "descricao" : "luffy.",
        "imagem" : [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7BSB0TsYjtpD7AFmv3NTihT0VDeZaKRY2w&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eV_9wN2_OrLolItrKbpa7Dapo1ibSBgcfA&usqp=CAU",
            "https://pbs.twimg.com/media/D3CP2VIUcAEygy_.jpg"
        ]
    };

    descricao.innerHTML = info.descricao;
    foto.src = info.imagem[gerarNumero()];
 }

 function gerarNumero(){
    let num = Math.floor(Math.random()*3);
    return num;
 }