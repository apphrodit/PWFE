const btFechar = document.querySelector("#btFechar");
const detalhes = document.querySelector("#detalhes");
const tcorpo = document.querySelector("#tcorpo");


const produtos = JSON.parse(window.localStorage.getItem("produtos")) || []
function backPag(){
    window.location.href = "cardapio.html";
}
    
function proxPag(){
    window.location.href = "pedidos.html";
  }

btFechar.addEventListener("click", () => {
    detalhes.classList.togglee("oculto");
})

function preencherTabela() {
    produtos.forEach((e, i) =>{
        const linha = document.createElement("tr");
        const id = document.createElement("td");
        const nome = document.createElement("td");
        const preco = document.createElement("td");
        const excluir = document.createElement("td");
        const enviar = document.createElement("td");
        id.innerHTML = e.id;
        nome.innerHTML = e.nome;
        preco.innerHTML = e.preco;
        excluir.innnerHTML = `<button onclick="limparDados('${i}')">Limpar</button>`;
        linha.appendChild(id)
        linha.appendChild(nome)
        linha.appendChild(preco)
        linha.appendChild(excluir)
        linha.appendChild(enviar)
        tcorpo.appendChild(linha)
    })
}

function excluir(i){
    produtos.splice(i, 1)
    window.localStorage.setItem("produtos", JSON.stringify("produtos")) || []
    window.location.reload();
}
function limparDados(){
    window.localStorage.removeItem("produtos");
    window.location.reload();
}
function enviar(i){
    if (confirm == true) {
        const pedido = {
            data : new Date().toLocaleDateString(),
            produtos : produtos,
        }
        pedido = JSON.parse(window.localStorage.getItem("pedidos")) || []
        pedido.push(pedido)
        window.localStorage.setItem("pedidos", JSON.stringify(pedido))
        window.localStorage.setItem("produtos", JSON.stringify(produtos))
        window.location.href= "../pages/pedidos.html"
        window.location.reload();
    }
}