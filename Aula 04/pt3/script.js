var body = document.querySelector("body");

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

for(let i = 0; i < destinos.length; i++){
    let destino = destinos[i];

    let banner = document.createElement("div");
    banner.className = "banner";
    banner.style.backgroundImage = `url(${destino.imagem})`;

    let dest = document.createElement("p");
    dest.innerHTML = destino.destino;

    let desc = document.createElement("p");
    desc.innerHTML = destino.descricao;

    body.appendChild(banner);

    banner.appendChild(dest);
    banner.appendChild(desc);
    
    console.log(banner);
}