let games = document.querySelector(".games");

const modal = document.getElementById("myModal");


const modalContent = document.querySelector(".modal-content");
const modalContentImg = document.querySelector(".modal-content-imgs");
const inputPesquisa = document.querySelector(".inputPesquisa");

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

const options = {

    method: "GET",
}

fetch("http://localhost:8080/giggagames/v1", options)
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
            modalContent.innerHTML="";


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