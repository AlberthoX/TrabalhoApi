let games = document.querySelector(".games");
const modal = document.getElementById("myModal");
const modalContent = document.querySelector("#modalContentInfo");
const modalContentImg = document.querySelector(".modal-content-imgs");
const inputPesquisa = document.querySelector(".inputPesquisa");
const content = document.querySelector(".content");
const close = document.querySelector(".close");
const modalAdicionar = document.querySelector("#modalAdicionar");
const modalRemover = document.querySelector("#modalRemover");
const botaoAdicionarJogo = document.querySelector("#botaoAdicionarJogo");
const botaoRemoverJogo = document.querySelector("#botaoRemoverJogo");



close.addEventListener('click', (event)=>{
    modal.style.display = 'none';
});



botaoAdicionarJogo.addEventListener('click', (event)=>{
    modalAdicionar.style.display = 'block';
    window.onclick = function(event) {
        if (event.target === modalAdicionar) {
            modalAdicionar.style.display = "none";
        }
      }
});

botaoRemoverJogo.addEventListener('click', (event)=>{
    modalRemover.style.display = 'block';

    window.onclick = function(event) {
        if (event.target === modalRemover) {
            modalRemover.style.display = "none";
        }
      }
});

const optionsGET = {
    method: "GET",
}

fetch("http://localhost:8080/giggagames/v1", optionsGET)
.then(response => response.json())
.then(data => {
    console.log(data)

    for (let index = 0; index < data.length; index++) {
        let eachGame = document.createElement("div");
        eachGame.className = "eachGame";

        let capaJogo = document.createElement("img");
        let nomeJogo = document.createElement("h1");
        let capaWidescreen = document.createElement("img");
        let descricao = document.createElement("h2");
        let plataforma = document.createElement("h3");

        capaJogo.src = data[index].capa;
        capaJogo.addEventListener("click", () => {
            modalContent.innerHTML = "";


            window.onclick = function(event) {
                if (event.target === modal) {
                  modal.style.display = "none";
                }
            }

            let divImgModal = document.createElement("div")
            divImgModal.className = "divImgModal"

            let divScreenshot = document.createElement("div");
            divScreenshot.className = "divScreenshot"

            nomeJogo.textContent = data[index].nome;
            modal.style.display = "flex";
            capaWidescreen.src = data[index].capaWidescreen;

            descricao.textContent = data[index].descricao;
            plataforma.textContent = "Plataformas: " + data[index].plataforma;
    
            modalContent.appendChild(nomeJogo)
            divImgModal.appendChild(capaWidescreen)
            modalContent.appendChild(divImgModal)

            for (let index2 = 0; index2 < data[index].screenshotsGame.length; index2++) {
                let screenshots = document.createElement("img");
                screenshots.className = "screenshots"
                screenshots.src = data[index].screenshotsGame[index2];
                divScreenshot.appendChild(screenshots);
                modalContent.appendChild(divScreenshot);
            }
            modalContent.appendChild(descricao)
            modalContent.appendChild(plataforma)
        })
        eachGame.appendChild(capaJogo);
        games.appendChild(eachGame);
    }
})

const jogoadicionado = {
    nome: "Grand Theft Auto 6",
    descricao: "GTA V é um jogo de ação e aventura em mundo aberto que se passa na fictícia cidade de Los Santos. Os jogadores controlam três protagonistas — Michael, Franklin e Trevor — em uma narrativa cheia de crimes, perseguições e reviravoltas.",
    plataforma: "PC/PS3/X-360/X-ONE/PS4/PS5/X-SX/X-SS",
    capa: "https://s2-techtudo.glbimg.com/emive1thVR6x2SyhvaOZ5_kR-EY=/0x0:300x371/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/9/8cOmg9TkaB2PgkS1sUjQ/2013-04-02-gta5-capa-rockstar-.jpg",
    capaWidescreen: "https://www.igta5.com/images/official-artwork-blitz-play.jpg",
    preco: 30.0,
    screenshotsGame: [
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_bb2ee3b9b48a60857873192cfff10546e01d4a86.jpg?t=1726606628",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_43e9c59d968e7f99f1eef065af85b3e542100366.jpg?t=1726606628"
    ]
}

const optionsPOST = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json' // Define que o corpo da requisição é JSON
    },
    body: JSON.stringify(jogoadicionado),
}



fetch("http://localhost:8080/giggagames/v1", optionsPOST)
.then(response => response)
.then(data => {
    console.log(data);
})
  







