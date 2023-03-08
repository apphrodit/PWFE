/*Ex1 
let nomes = ["Pedro", "Luiz", "Jorge", "Thiago", "Cesar", "Amanda", "Junior", "Alana","Vitor", "Rodrigo"]
console.log(nomes)
console.log(Math.floor(Math.random()*10))
console.log(nomes[Math.floor(Math.random()*10)])   
*/


//Ex2
var i = 0
var nomes = []
for(var i = 0; i < 10; i++){
    nomes.push(prompt("Digite o nome"))
}

let qtd = prompt("Informe a quantidade de sorteados")
for(var i = 0; i < qtd; i++){
    let aleatorio = Math.floor(Math.random()*10)
    console.log(nomes[aleatorio])
}