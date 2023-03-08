var tbody = document.querySelector("tbody");

const levantamento = [
    {
        "funcionario": "Vitoria da Cruz",
        "matricula": "010203",
        "setor": "Eletronico",
        "comissao": 5,
        "vendas": [
            {
                "data": "03/02/2023",
                "valor": 1250.00
            },
            {
                "data": "03/02/2023",
                "valor": 899.00
            },
            {
                "data": "04/02/2023",
                "valor": 5999.90
            }
        ]
    },
    {
        "funcionario": "Cecilia Martins",
        "matricula": "124578",
        "setor": "Eletronico",
        "comissao": 5,
        "vendas": [
            {
                "data": "15/01/2023",
                "valor": 3290.90
            },
            {
                "data": "16/01/2023",
                "valor": 1320.99
            },
            {
                "data": "16/02/2023",
                "valor": 990.90
            }
        ]
    },
    {
        "funcionario": "Joaquim Souza",
        "matricula": "124578",
        "setor": "Moveis",
        "comissao": 12,
        "vendas": [
            {
                "data": "08/01/2023",
                "valor": 4500.00
            },
            {
                "data": "08/01/2023",
                "valor": 599.99
            },
            {
                "data": "09/01/2023",
                "valor": 259.90
            }
        ]

    }
]
for (let i = 0; i < levantamento.length; i++) {
    var total = 0;
    var valor = 0;

    let td_func = document.createElement("td");
    let td_Matricula = document.createElement("td");
    let td_setor = document.createElement("td");
    let td_com = document.createElement("td");
    let td_total = document.createElement("td");
    let tr = document.createElement("tr");

    for (let v = 0; v < levantamento[i].vendas.length; v++) {
        total += levantamento[i].vendas[v].valor;
    }
    ComV = total / 100 * levantamento[i].comissao;

    td_func.innerHTML = levantamento[i].funcionario;
    td_Matricula.innerHTML = levantamento[i].matricula;
    td_setor.innerHTML = levantamento[i].setor;
    td_com.innerHTML = ComV.toFixed(2);
    td_total.innerHTML = total.toFixed(2);

    tr.appendChild(td_func);
    tr.appendChild(td_Matricula);
    tr.appendChild(td_setor);
    tr.appendChild(td_com);
    tr.appendChild(td_total);
    tbody.appendChild(tr);
}

function add(){
    var matricula = document.querySelector("#matricula");
    var data = document.querySelector("#data");
    var valor = document.querySelector("#valor");
    
    let novo = {
        "data" : data.value,
        "valor": Number(valor.value)
    };

    for(let l = 0; l < levantamento.length; i++){
        if (matricula = levantamento[i].matricula ) 
            matricula[i].vendas.push(add)
    }
}