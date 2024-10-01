let games = document.querySelector(".games");
const modal = document.getElementById("myModal");
const modalContent = document.querySelector("#modalContentInfo");
const modalContentImg = document.querySelector(".modal-content-imgs");
const inputPesquisa = document.querySelector(".inputPesquisa");
const content = document.querySelector(".content");
const modalAdicionar = document.querySelector("#modalAdicionar");
const modalRemover = document.querySelector("#modalRemover");
const modalLoading = document.querySelector("#modalLoading");

const botaoAdicionarJogo = document.querySelector("#botaoAdicionarJogo");
const botaoRemoverJogo = document.querySelector("#botaoRemoverJogo");

const tabelaAllJogos = document.querySelector("#tabelaAllJogos");
const inputRemoverJogo = document.querySelector("#inputRemoverJogo");


botaoAdicionarJogo.addEventListener("click", (event) => {
  modalAdicionar.style.display = "block";
  window.onclick = function (event) {
    if (event.target === modalAdicionar) {
      modalAdicionar.style.display = "none";
    }
  };
});

botaoRemoverJogo.addEventListener("click", (event) => {
  modalRemover.style.display = "block";
  window.onclick = function (event) {
    if (event.target === modalRemover) {
      modalRemover.style.display = "none";
    }
  };
});


//METODO GET
const optionsGET = {
  method: "GET",
};

fetch("http://localhost:8080/giggagames/v1", optionsGET)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

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

        window.onclick = function (event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        };

        let divImgModal = document.createElement("div");
        divImgModal.id = "divImgModal";

        let divScreenshot = document.createElement("div");
        divScreenshot.className = "divScreenshot";

        nomeJogo.textContent = data[index].nome;
        modal.style.display = "flex";
        capaWidescreen.src = data[index].capaWidescreen;

        descricao.textContent = data[index].descricao;
        plataforma.textContent = "Plataformas: " + data[index].plataforma;

        modalContent.appendChild(nomeJogo);
        divImgModal.appendChild(capaWidescreen);
        modalContent.appendChild(divImgModal);

        for (
          let index2 = 0;
          index2 < data[index].screenshotsGame.length;
          index2++
        ) {
          let screenshots = document.createElement("img");
          screenshots.className = "screenshots";
          screenshots.src = data[index].screenshotsGame[index2];
          divScreenshot.appendChild(screenshots);
          modalContent.appendChild(divScreenshot);
        }
        modalContent.appendChild(descricao);
        modalContent.appendChild(plataforma);
      });

      eachGame.appendChild(capaJogo);
      games.appendChild(eachGame);

      let tr = document.createElement("tr");
      let tdId = document.createElement("td");
      let tdNome = document.createElement("td");

      

      tdId.textContent = data[index].id;
      tdNome.textContent = data[index].nome;
      inputRemoverJogo.addEventListener("input", () => {
        if (inputRemoverJogo.value == tdId.textContent) {
            tr.style.backgroundColor = "#B81829"
            tr.style.borderRadius = "10px"
    
        }
        else{
            tr.style.backgroundColor = "#303134"
        }
      })
        

      tr.appendChild(tdId);
      tr.appendChild(tdNome);
      tabelaAllJogos.appendChild(tr);
    }
  });

const botaoSalvar = document.querySelector(".botaoSalvar");
const inputNomeJogo = document.querySelector("#inputNomeJogo");
const inputDescricaoJogo = document.querySelector("#inputDescricaoJogo");
const inputPlataformaJogo = document.querySelector("#inputPlataformaJogo");
const inputPosterJogo = document.querySelector("#inputPosterJogo");
const inputPrecoJogo = document.querySelector("#inputPrecoJogo");
const inputScreenshot1Jogo = document.querySelector("#inputScreenshot1Jogo");
const inputScreenshot2Jogo = document.querySelector("#inputScreenshot2Jogo");
const imgCapa = document.querySelector("#imgCapa");
const inputCapaJogo = document.querySelector("#inputCapaJogo");
inputCapaJogo.addEventListener("change", uploadImg);

function uploadImg() {
  imgCapa.src = inputCapaJogo.value;
}

botaoSalvar.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    inputNomeJogo.value.trim() === "" ||
    inputDescricaoJogo.value.trim() === "" ||
    inputCapaJogo.value.trim() === "" ||
    inputPosterJogo.value.trim() === "" ||
    inputPrecoJogo.value.trim() === "" ||
    inputPlataformaJogo.value.trim() === "" ||
    inputScreenshot1Jogo.value.trim() === "" ||
    inputScreenshot2Jogo.value.trim() === ""
  ) {
    alert("Por favor, preencha todos os campos antes de salvar.");
    return;
  }

  let jogoAdicionado = {
    nome: inputNomeJogo.value,
    descricao: inputDescricaoJogo.value,
    capa: inputCapaJogo.value,
    capaWidescreen: inputPosterJogo.value,
    preco: inputPrecoJogo.value,
    plataforma: inputPlataformaJogo.value,
    screenshotsGame: [inputScreenshot1Jogo.value, inputScreenshot2Jogo.value],
  };

  console.log(JSON.stringify(jogoAdicionado));

    //METODO POST
  const optionsPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jogoAdicionado),
  };

  fetch("http://localhost:8080/giggagames/v1", optionsPOST)
    .then((response) => response)
    .then((data) => {
      console.log(data);
    });

  modalLoading.style.display = "block";
  modalAdicionar.style.display = "none";

  setTimeout(() => {
    window.location.reload();
    modalLoading.style.display = "none";
  }, 1500);
});



//METODO DELETE
const optionsDELETE = {
  method: "DELETE",
};

const botaoExcluir = document.querySelector("#botaoExcluir");




botaoExcluir.addEventListener("click", () => {

    if (inputRemoverJogo.value.trim() === "") {
        alert("Por favor, preencha o campo de ID antes de salvar.");
    }
    else{
        fetch(
            "http://localhost:8080/giggagames/v1/" + inputRemoverJogo.value,
            optionsDELETE
          )
            .then((response) => response)
            .then((data) => {
              console.log(data);
            });
        
          modalRemover.style.display = "none";
          modalLoading.style.display = "block";
        
          setTimeout(() => {
            window.location.reload();
            modalLoading.style.display = "none";
          }, 1500);
    }

  
});



