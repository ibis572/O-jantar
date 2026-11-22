
import { prologo } from "./dialogues.js";
import { cenas } from "./scenes.js";
import { capitulos } from "./chapters.js";


/* ========================================
   ELEMENTOS DA TELA
======================================== */

const menu = document.getElementById("menu");
const game = document.getElementById("game");

const speakerElement = document.getElementById("speaker");
const dialogueElement = document.getElementById("dialogue");
const chapterTitle = document.getElementById("chapter-title");

const backgroundElement = document.getElementById("scene-background");

const startButton = document.getElementById("start-button");
const continueButton = document.getElementById("continue-button");
const optionsButton = document.getElementById("options-button");
const nextButton = document.getElementById("next-button");

const dialogueBox = document.querySelector(".dialogue-box");

const choiceArea = document.getElementById("choice-area");
const choiceQuestion = document.getElementById("choice-question");
const choiceOptions = document.getElementById("choice-options");

const continueIndicator = document.getElementById("continue-indicator");


/* ========================================
   ESTADO DO JOGO
======================================== */

let etapa = "prologo";

let cenaAtual = 0;
let falaAtual = 0;

let capituloAtual = 0;
let escolhaAtual = 0;

let pontuacao = 50;


/* ========================================
   INICIAR JOGO
======================================== */

function iniciarJogo() {

    etapa = "prologo";

    cenaAtual = 0;
    falaAtual = 0;

    capituloAtual = 0;
    escolhaAtual = 0;

    pontuacao = 50;

    menu.classList.add("hidden");
    game.classList.remove("hidden");

    nextButton.style.display = "block";

    mostrarCenaPrologo();

}


/* ========================================
   CENÁRIOS
======================================== */

function trocarCenario(nomeArquivo) {

    backgroundElement.style.backgroundImage =
        `url("./assets/backgrounds/${nomeArquivo}")`;

}


/* ========================================
   PRÓLOGO
======================================== */

function mostrarCenaPrologo() {

    const cena = prologo[cenaAtual];

    if (!cena) {
        iniciarCapitulos();
        return;
    }

    const configuracao = cenas[cena.id];

    if (configuracao) {
        trocarCenario(configuracao.background);
    }

    chapterTitle.textContent = cena.titulo;

    mostrarFalaPrologo();

}


function mostrarFalaPrologo() {

    const cena = prologo[cenaAtual];
    const fala = cena.falas[falaAtual];

    speakerElement.textContent = fala.speaker;

    speakerElement.style.display =
        fala.speaker ? "block" : "none";

    dialogueElement.textContent = fala.text;

}


/* ========================================
   INICIAR CAPÍTULOS
======================================== */

function iniciarCapitulos() {

    etapa = "capitulos";

    capituloAtual = 0;
    escolhaAtual = 0;
    falaAtual = 0;

    mostrarCapitulo();

}


function mostrarCapitulo() {

    const capitulo = capitulos[capituloAtual];

    if (!capitulo) {
        finalizarJogo();
        return;
    }

    trocarCenario(capitulo.background);

    chapterTitle.textContent = capitulo.titulo;

    mostrarFalaCapitulo();

}


function mostrarFalaCapitulo() {

    const capitulo = capitulos[capituloAtual];
    const fala = capitulo.falas[falaAtual];

    speakerElement.textContent = fala.speaker;

    speakerElement.style.display =
        fala.speaker ? "block" : "none";

    dialogueElement.textContent = fala.text;

}


/* ========================================
   MOSTRAR ESCOLHAS
======================================== */

function mostrarEscolha() {

    const capitulo = capitulos[capituloAtual];
    const escolha = capitulo.escolhas[escolhaAtual];

    etapa = "escolha";

    speakerElement.style.display = "none";

    dialogueElement.textContent = "";

    choiceArea.classList.remove("hidden");

    choiceQuestion.textContent = escolha.pergunta;

    choiceOptions.innerHTML = "";

    continueIndicator.classList.add("hidden");
    nextButton.style.display = "none";

    escolha.opcoes.forEach((opcao) => {

        const botao = document.createElement("button");

        botao.textContent = opcao.texto;

        botao.addEventListener("click", function(event) {

            event.stopPropagation();

            registrarEscolha(opcao);

        });

        choiceOptions.appendChild(botao);

    });

}


/* ========================================
   REGISTRAR ESCOLHA
======================================== */

function registrarEscolha(opcao) {

    pontuacao += opcao.pontos;

    pontuacao = Math.max(0, Math.min(100, pontuacao));

    etapa = "resposta";

    choiceArea.classList.add("hidden");

    dialogueElement.textContent = opcao.resposta;

    speakerElement.style.display = "none";

    continueIndicator.classList.remove("hidden");
    nextButton.style.display = "block";

}


/* ========================================
   AVANÇAR JOGO
======================================== */

function avancarJogo() {

    if (game.classList.contains("hidden")) {
        return;
    }

    if (etapa === "prologo") {

        avancarPrologo();
        return;

    }

    if (etapa === "capitulos") {

        avancarFalaCapitulo();
        return;

    }

    if (etapa === "resposta") {

        avancarAposResposta();
        return;

    }

}


/* ========================================
   AVANÇAR PRÓLOGO
======================================== */

function avancarPrologo() {

    const cena = prologo[cenaAtual];

    falaAtual++;

    if (falaAtual < cena.falas.length) {

        mostrarFalaPrologo();
        return;

    }

    cenaAtual++;
    falaAtual = 0;

    if (cenaAtual >= prologo.length) {

        iniciarCapitulos();
        return;

    }

    mostrarCenaPrologo();

}


/* ========================================
   AVANÇAR FALAS DOS CAPÍTULOS
======================================== */

function avancarFalaCapitulo() {

    const capitulo = capitulos[capituloAtual];

    falaAtual++;

    if (falaAtual < capitulo.falas.length) {

        mostrarFalaCapitulo();
        return;

    }

    mostrarEscolha();

}


/* ========================================
   AVANÇAR APÓS UMA ESCOLHA
======================================== */

function avancarAposResposta() {

    const capitulo = capitulos[capituloAtual];

    escolhaAtual++;

    if (escolhaAtual < capitulo.escolhas.length) {

        etapa = "capitulos";
        mostrarEscolha();
        return;

    }

    capituloAtual++;
    escolhaAtual = 0;
    falaAtual = 0;

    if (capituloAtual >= capitulos.length) {

        finalizarJogo();
        return;

    }

    etapa = "capitulos";

    mostrarCapitulo();

}


/* ========================================
   FINAIS
======================================== */

function finalizarJogo() {

    etapa = "final";

    choiceArea.classList.add("hidden");

    speakerElement.style.display = "none";

    continueIndicator.classList.add("hidden");
    nextButton.style.display = "none";

    trocarCenario("Sala de Jantar.jpg");

    chapterTitle.textContent = "FIM";

    if (pontuacao <= 33) {

        dialogueElement.textContent =
            "O BANQUETE — Alma finalmente interrompeu o ciclo. A mesa estava menor, mas ninguém precisava sair dela com fome. Talvez uma mesa menor seja suficiente, desde que ninguém precise sair dela com fome.";

    } else if (pontuacao <= 66) {

        dialogueElement.textContent =
            "O COSTUME — Alma percebeu o desperdício, mas não conseguiu mudar completamente a rotina. Uma nova lista de compras foi escrita. As mesmas quantidades de sempre.";

    } else {

        dialogueElement.textContent =
            "O EXCESSO — A comida apodrecia sobre a mesa. A casa permanecia em silêncio, exceto por uma voz. “Termine sua refeição, Alma.”";

    }

    console.log("Pontuação final:", pontuacao);

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
   EVENTOS DOS BOTÕES
======================================== */

startButton.addEventListener("click", iniciarJogo);

continueButton.addEventListener("click", continuarJogo);

optionsButton.addEventListener("click", abrirOpcoes);

nextButton.addEventListener("click", avancarJogo);


dialogueBox.addEventListener("click", function(event) {

    if (
        event.target.closest(".choice-options")
    ) {
        return;
    }

    avancarJogo();

});


/* ========================================
   CONTROLES DO TECLADO
======================================== */

document.addEventListener("keydown", function(event) {

    if (
        event.code === "Space" ||
        event.code === "Enter"
    ) {

        if (!game.classList.contains("hidden")) {

            if (etapa === "escolha") {
                return;
            }

            event.preventDefault();

            avancarJogo();

        }

    }

});


/* ========================================
   INICIALIZAÇÃO
======================================== */

console.log("O Jantar. iniciado com sucesso.");
