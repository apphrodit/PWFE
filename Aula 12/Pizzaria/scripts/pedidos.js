const tcorpo = document.querySelector("#tcorpo");
const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || [];

function preencherTabela() {
  tcorpo.innerHTML = "";

  pedidos.forEach((pedido, index) => {
    const dataFormatada = pedido.data;
    const produtos = pedido.produtos;

    produtos.forEach((produto, i) => {
      const linha = document.createElement("tr");
      const ordem = document.createElement("td");
      const id = document.createElement("td");
      const data = document.createElement("td");
      const nome = document.createElement("td");
      const preco = document.createElement("td");
      const status = document.createElement("td");

      ordem.innerHTML = index + 1;
      id.innerHTML = produto.id
      data.innerHTML = dataFormatada;
      nome.innerHTML = produto.nome;
      preco.innerHTML = produto.preco;
      status.innerHTML = "Pedido no forno!!!";

      linha.appendChild(ordem);
      linha.appendChild(id);
      linha.appendChild(data);
      linha.appendChild(nome);
      linha.appendChild(preco);
      linha.appendChild(status);

      tcorpo.appendChild(linha);
    });

    if (index < pedidos.length - 1) {
      // Adiciona uma linha horizontal entre os pedidos
      const linhaSeparadora = document.createElement("tr");
      const colunaSeparadora = document.createElement("td");
      colunaSeparadora.colSpan = 6;
      colunaSeparadora.innerHTML = "<hr class='linha-separadora'>";
      linhaSeparadora.appendChild(colunaSeparadora);
      tcorpo.appendChild(linhaSeparadora);
    }
  });
}

function limparDados() {
  if (confirm("Tem certeza que quer cancelar o pedido?")) {
    window.localStorage.removeItem("pedidos");
    window.location.reload();
  }
}

preencherTabela();
