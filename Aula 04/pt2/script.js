var banner = document.querySelector(".banner");
var destino = document.querySelector("#destino");
var descricao = document.querySelector("#descricao");

var body = document.querySelector()

var destinos =  [
    {
        "imagem":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/be/60/2d/osasco.jpg?w=700&h=500&s=1",
        "destino":"Osasco",
        "descricao":"Planos a partir de 1782 Kwanzas " 
    },
    {
        "imagem":"https://a.cdn-hotels.com/gdcs/production165/d100/5e0a7326-4dd3-40cc-9eb7-3af978f69b3d.jpg",
        "destino":"Ipanema",
        "descricao":"Seja assaltado novamente!" 
    },
    {
        "imagem":"https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/londres-big-ben.jpeg?quality=70&strip=info&w=1024&resize=1200,800",
        "destino":"Londres",
        "descricao":"Vá no enterro da Rainha Beth" 
    }
]

let indice = gerarNumero(destinos.length);

destino.innerHTML = destinos[indice].destino;
descricao.innerHTML = destinos[indice].descricao;
banner.style.backgroundImage = `url(${destinos[indice].imagem})`;
//banner.style.backgroundImage = "url(" + destinos[1].imagem +")";

function gerarNumero(size) {
    let num = Math.floor(Math.random()*size);
    return num;
}