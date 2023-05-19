const btFechar = document.querySelector("#btFechar");
const detalhes = document.querySelector("#detalhes");
const tcorpo = document.querySelector("#tcorpo");



btFechar.addEventListener("click", () => {
    detalhes.classList.togglee("oculto");
})

function preencherTabela() {
    dados.forEach((e, i) =>{
        const linha = document.createElement("tr");
        const id = document.createElement("td");
        const nome = document.createElement("td");
        const detalhes = document.createElement("td");
        id.innerHTML = e.id;
        nome.innerHTML = e.nome;
        detalhes.innerHTML = `<button onclick="abrirModal('${i}')">Detalhes</button>`
        linha.appendChild(id)
        linha.appendChild(nome)
        linha.appendChild(detalhes)
        tcorpo.appendChild(linha)
    })
}

function abrirModal(i){
    detalhes.classList.toggle("oculto");
    document.querySelector("#id").value = dados[i].id;
    document.querySelector("#nome").value = dados[i].nome;
}
