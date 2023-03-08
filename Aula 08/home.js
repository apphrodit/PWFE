const {id, nome}  = JSON.parse(localStorage.getItem("usuario"));

const body = document.querySelector("body");

const saudacao = document.querySelector("#saudacao");

saudacao.innerHTML += nome;

const base = [
    {
        "id" :4,
        "tarefas" : [
            {
                "data" : "16/01/2023",
                "descricao" : "Sei lá",
                "status" : 1
            },
            {
                "data" : "31/12/2023",
                "descricao" : "cabô",
                "status" : 0
            },
            {
                "data" : "25/12/2023",
                "descricao" : "Natal uhul",
                "status" : 0
            },
        ]
    },
    {
        "id" :5,
        "tarefas" : [
            {
                "data" : "15/03/2023",
                "descricao" : "Mudancinha",
                "status" : 1
            },
            {
                "data" : "20/03/2023",
                "descricao" : "Entrega de Demanda",
                "status" : 1
            },
            {
                "data" : "01/03/2023",
                "descricao" : "Nada",
                "status" : 0
            },
        ]
    },
    {
        "id" :6,
        "tarefas" : [
            {
                "data" : "15/04/2023",
                "descricao" : "Dia do Pagamento",
                "status" : 1
            },
            {
                "data" : "20/04/2023",
                "descricao" : "Pagar Contas",
                "status" : 0
            },
            {
                "data" : "01/04/2023",
                "descricao" : "Nada",
                "status" : 0
            },
        ]
    },
]

const data = base.find(item => {
    return item.id == id 
})

if(data != undefined){
    data.tarefas.forEach((tarefa)=>{
        criarTarefa(tarefa.data, tarefa.descricao, tarefa.status);
    })

}

function criarTarefa(data, descricao, status){
    let card = document.createElement("div")
    let pdata = document.createElement("p")
    let pdescricao = document.createElement("p")

    pdata.innerHTML = data;
    pdescricao.innerHTML = descricao

    if (status == 1){
        card.style.backgroundColor = "green";
    }

    card.appendChild(pdata);
    card.appendChild(pdescricao);

    body.appendChild(card);
}
//json.parse transforma a stringify em json e o stringify transforma o json em string