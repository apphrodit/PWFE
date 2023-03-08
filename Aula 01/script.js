/*alert("Olá, Mundo!");
console.log("teste");
parseInt("oi");
console.log(parseInt("oi"));

let a = "10";
console.log(a==10);
console.log(a ===10);*/

/*let opcao = prompt("1 a 3");

switch (opcao) {
    case "1":
        console.log("Escolheu a op. 1");
        break;

    case "2":
        console.log("Escolheu a op. 2");
        break;

    case "3":
        console.log("Escolheu a op. 3");
        break;

    default:
        console.log("Opção Inválida");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);

}
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let num = 0;
do {
    num = prompt("diferente 10");
    console.log(num);
} while (num != 10);
*/

/*let  nome = (prompt("Digite um nome"));
let nomes = ["Fulano", "Beltrano", "Ciclano"];

let loc = false;

for (let i = 0; i <= nomes.length; i++){
    if(nomes[i] == nome){
        alert("achamo");
        console.log(nomes[i]);
        loc = true;
    }
}

if (loc == false){
    console.log("tem nada aqui não")
}
*/

function somar (a,b){
    let res = a+b;
    return res;
}

console.log(somar(5,"a"));

function somar (a,b){
    if (typeof(a)!= "number"|| typeof(b)!="number")return false;
    return a+b;
}

console.log(somar(5,"a"));
