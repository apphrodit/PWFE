const pesquisar = document.querySelector("#pesquisar");
const res = document.getElementById("res");

function buscar() {
  api.get(`/current.json?key=d2ac83ff15544d1cb72115726231004&q=${pesquisar.value}`)
    .then((resp) => {
      const clima = resp.data.current.temp_c;
      const condicao = resp.data.current.condition.text;
      const condicon = resp.data.current.condition.icon;
      res.innerText = `${pesquisar.value} ${clima}°C Condição ${condicao} ${condicon}.`;
    })
    .catch((error) => {
      res.innerText = "Erro";
    });
}
