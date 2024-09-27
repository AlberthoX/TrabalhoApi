let games = document.querySelector(".games");
const modal = document.getElementById("myModal");
const modalContent = document.querySelector("#modalContentInfo");
const modalContentImg = document.querySelector(".modal-content-imgs");
const inputPesquisa = document.querySelector(".inputPesquisa");
const content = document.querySelector(".content");
const close = document.querySelector(".close");
const modalAdicionar = document.querySelector("#modalAdicionar");
const modalRemover = document.querySelector("#modalRemover");









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



const botaoSalvar = document.querySelector(".botaoSalvar");
const inputNomeJogo = document.querySelector("#inputNomeJogo")
const inputDescricaoJogo = document.querySelector("#inputDescricaoJogo")
const inputCapaJogo = document.querySelector("#inputCapaJogo")
const inputPosterJogo = document.querySelector("#inputPosterJogo")
const inputPrecoJogo = document.querySelector("#inputPrecoJogo")
const inputScreenshot1Jogo = document.querySelector("#inputScreenshot1Jogo")
const inputScreenshot2Jogo = document.querySelector("#inputScreenshot2Jogo")






botaoSalvar.addEventListener('click', () => {

    let jogoadicionado = {
        nome: inputNomeJogo.value,
        descricao: inputDescricaoJogo.value,
        capa: "sadsadasd",
        capaWidescreen: inputPosterJogo.value,
        preco: inputPrecoJogo.value,
        screenshotsGame: [
            inputScreenshot1Jogo.value,
            inputScreenshot2Jogo.value,
        ]
    }
    console.log(JSON.stringify(jogoadicionado))
    const optionsPOST = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogoadicionado),
    }
    

    fetch("http://localhost:8080/giggagames/v1", optionsPOST)
    .then(response => response)
    .then(data => {
        console.log(data);
    })


})






  







