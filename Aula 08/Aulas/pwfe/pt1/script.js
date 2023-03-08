const arr = [5, 8, 7, 10, 2, 6]

//for each é um metodo q pertence a um tipo de vetor, não é necessário informar o indice no foreach
// é uma forma resumida do "for" 


const body = document.querySelector("body");

arr.forEach((item,indice) => {
    let calc = item * 2;

    let texto = document.createElement("p");


    //padrão
    //texto.innerHTML = item + " x 2 = " + calc;
    
    //concatenado
    texto.innerHTML = `${item} x 2 = ${calc}`;

    body.appendChild(texto);
});

//map,filter,find

//map retorna o vetor com os dados modificados

let novoArr = arr.map((item,indice) =>{
    let calc = item * 2;
    let texto = document.createElement("h3");
    texto.innerHTML = calc;

    return texto;
});

//filter 



let filterArr = arr.filter((item,indice) =>{
    return item >= 8
    //condição dupla
    //return ( (item >= 5) && (item <= 10 ));
});


//find
//retorna 1 item só (se existir + de 1 do mesmo, ele retorna o primeiro que encontrar) 

let data = arr.find((item,indice) =>{
    return item == 50;
});

let info = [
    {
        "nome": "Fulano da Silva",
        "matricula": 1789472,
        "vendas": 15
    },
    {
        "nome": "Beltrano",
        "matricula": 1234578,
        "vendas": 53
    },
    {
        "nome": "Pulano da Silva",
        "matricula": 1325578,
        "vendas": 123
    }
];

let metaVendas = 7;

let vendedores = info.filter((valor, i ) =>{
    return valor.vendas >= 7;
});

let vendedor = info.find((data) =>{
    return data.matricula == 1234578
})

console.log(vendedor.nome);