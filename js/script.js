
import { prologo } from "./dialogues.js";
import { cenas } from "./scenes.js";
import { personagens } from "./characters.js";


/* ========================================
   ELEMENTOS DA TELA
======================================== */

const menu = document.getElementById("menu");
const game = document.getElementById("game");

const speakerElement = document.getElementById("speaker");
const dialogueElement = document.getElementById("dialogue");
const chapterTitle = document.getElementById("chapter-title");

const backgroundElement = document.getElementById("scene-background");
const characterSprite = document.getElementById("character-sprite");

const startButton = document.getElementById("start-button");
const continueButton = document.getElementById("continue-button");
const optionsButton = document.getElementById("options-button");
const nextButton = document.getElementById("next-button");


/* ========================================
   ESTADO DO JOGO
======================================== */

let cenaAtual = 0;
let falaAtual = 0;


/* ========================================
   MENU INICIAL
======================================== */

function iniciarJogo() {

    cenaAtual = 0;
    falaAtual = 0;

    menu.classList.add("hidden");
    game.classList.remove("hidden");

    mostrarCena();

}


/* ========================================
   MOSTRAR CENA
======================================== */

function mostrarCena() {

    const cena = prologo[cenaAtual];
    const configuracao = cenas[cena.id];

    chapterTitle.textContent = cena.titulo;

    backgroundElement.style.backgroundImage =
        `url("./assets/backgrounds/${configuracao.background}")`;

    mostrarDialogo();

}


/* ========================================
   MOSTRAR DIÁLOGO
======================================== */

function mostrarDialogo() {

    const cena = prologo[cenaAtual];
    const fala = cena.falas[falaAtual];

    speakerElement.textContent = fala.speaker;

    speakerElement.style.display =
        fala.speaker ? "block" : "none";

    dialogueElement.textContent = fala.text;

    mostrarPersonagem(fala.speaker);

}


/* ========================================
   MOSTRAR PERSONAGEM
======================================== */

function mostrarPersonagem(nome) {

    const personagem = personagens[nome];

    if (!personagem) {

        characterSprite.src = "";
        characterSprite.classList.add("hidden");

        return;

    }

    characterSprite.src = personagem.sprite;

    characterSprite.classList.remove("hidden");

}


/* ========================================
   AVANÇAR DIÁLOGO
======================================== */

function avancarDialogo() {

    if (game.classList.contains("hidden")) {
        return;
    }

    const cena = prologo[cenaAtual];

    falaAtual++;

    // Ainda existem falas nesta cena

    if (falaAtual < cena.falas.length) {

        mostrarDialogo();
        return;

    }

    // A cena terminou

    cenaAtual++;
    falaAtual = 0;

    // Todas as cenas terminaram

    if (cenaAtual >= prologo.length) {

        finalizarPrologo();
        return;

    }

    mostrarCena();

}


/* ========================================
   FINALIZAR PRÓLOGO
======================================== */

function finalizarPrologo() {

    speakerElement.style.display = "none";

    characterSprite.classList.add("hidden");

    chapterTitle.textContent = "CAPÍTULO 1";

    dialogueElement.textContent =
        "O primeiro dia começou.";

    nextButton.style.display = "none";

}


/* ========================================
   CONTINUAR E OPÇÕES
======================================== */

function continuarJogo() {

    alert("Nenhum jogo salvo encontrado.");

}


function abrirOpcoes() {

    alert("Menu de opções em desenvolvimento.");

}


/* ========================================
   CONECTAR BOTÕES
======================================== */

startButton.addEventListener("click", iniciarJogo);

continueButton.addEventListener("click", continuarJogo);

optionsButton.addEventListener("click", abrirOpcoes);

nextButton.addEventListener("click", avancarDialogo);


/* ========================================
   AVANÇAR CLICANDO NA CAIXA
======================================== */

document.querySelector(".dialogue-box")
    .addEventListener("click", avancarDialogo);


/* ========================================
   AVANÇAR PELO TECLADO
======================================== */

document.addEventListener("keydown", function(event) {

    if (
        event.code === "Space" ||
        event.code === "Enter"
    ) {

        if (!game.classList.contains("hidden")) {

            event.preventDefault();
            avancarDialogo();

        }

    }

});


/* ========================================
   INICIALIZAÇÃO
======================================== */

console.log("O Jantar. iniciado com sucesso.");
