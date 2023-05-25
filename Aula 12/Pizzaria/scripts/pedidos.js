const tcorp = document.querySelector("#tcorpo");

const pedidos = json.parse(window.localStorage.getItem("pedidos")) || [];

function preencherCard() {
    pedidos.forEach((e, i) =>{
        const dataFormatada = `${new Date (e.data).toLocaleDateString()}`
        e.produtos.forEach((produto, index) => {
            const card = document.createElement("tr");
            const id = document.createElement("td");
            const data = document.createElement("td");
            const nome = document.createElement("td");
            const preco = document.createElement("td");
            const status = document.createElement("td");
            id.innerHTML = produto.id;
            nome.innerHTML = produto.nome;
            data.innerHTML = e.data;
            preco.innerHTML = produto.preco;
            status.innerHTML = "Pedido no forno!!!";
            card.appendChild(id);
            card.appendChild(data);
            card.appendChild(nome);
            card.appendChild(preco);
            card.appendChild(status);
            card.appendChild(card);
        })
    })
}

function limparDados(){
    let confirm = confirm("Limpar pedidos?")
    if(confirm == true){
        window.localStorage.removeItem("pedidos");
        window.location.reload();
    }
}