const btFechar = document.querySelector("#btFechar");
const detalhes = document.querySelector("#detalhes");
const tcorpo = document.querySelector("#tcorpo");
const precoTotalElement = document.querySelector("#precoTotal");

const produtos = JSON.parse(window.localStorage.getItem("produtos")) || [];

function backPag() {
  window.location.href = "cardapio.html";
}

function proxPag() {
  window.location.href = "pedidos.html";
}

btFechar.addEventListener("click", () => {
  detalhes.classList.toggle("oculto");
});

function preencherTabela() {
  produtos.forEach((e, i) => {
    const linha = document.createElement("tr");
    const id = document.createElement("td");
    const nome = document.createElement("td");
    const preco = document.createElement("td");
    const excluir = document.createElement("td");
    const enviar = document.createElement("td");
    const total = document.getElementById("precoTotal");
    id.innerHTML = e.id;
    nome.innerHTML = e.nome;
    preco.innerHTML = e.preco;
    excluir.innerHTML = `<button onclick="excluir(${i})">X</button>`;
    total.innerHTML = "Total: R$" + somarPrecoTotal()
    linha.appendChild(id);
    linha.appendChild(nome);
    linha.appendChild(preco);
    linha.appendChild(excluir);
    linha.appendChild(enviar);
    tcorpo.appendChild(linha);
  });

}

function excluir(i) {
  produtos.splice(i, 1);
  window.localStorage.setItem("produtos", JSON.stringify(produtos));
  window.location.reload();
}

function limparDados() {
  if (confirm("Tem certeza que quer limpar todos os dados?")) {
    window.localStorage.removeItem("produtos");
    window.localStorage.removeItem("pedidos");
    window.location.reload();
  }
}

function somarPrecoTotal() {
  var total = 0;

  produtos.forEach((produto) => {
    const precoTotal = parseFloat(produto.preco);
    total += precoTotal;
  });

  return total.toFixed(2)
}

function enviar() {
  if (confirm("Confirmar Pedido?")) {
    const pedido = {
      data: new Date().toLocaleDateString(),
      produtos: produtos,
      total : somarPrecoTotal()
    }
    const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || [];
    pedidos.push(pedido);
    window.localStorage.setItem("pedidos", JSON.stringify(pedidos));
    window.localStorage.removeItem("produtos");
    window.location.href = "../pages/pedidos.html";
  }
}
