
import { prologo } from "./dialogues.js";
import { cenas } from "./scenes.js";
import { capitulos } from "./chapters.js";

//elementos da tela

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


//configurações do save

const SAVE_KEY = "ojantar_save_v1";


//estado do jogo

let etapa = "prologo";

let cenaAtual = 0;
let falaAtual = 0;

let capituloAtual = 0;
let escolhaAtual = 0;

let pontuacao = 50;

let respostaAtual = "";


//save automático

function salvarProgresso() {

    if (etapa === "final") {
        return;
    }

    const dados = {
        etapa: etapa,
        cenaAtual: cenaAtual,
        falaAtual: falaAtual,
        capituloAtual: capituloAtual,
        escolhaAtual: escolhaAtual,
        pontuacao: pontuacao,
        respostaAtual: respostaAtual
    };

    try {

        localStorage.setItem(
            SAVE_KEY,
            JSON.stringify(dados)
        );

    } catch (erro) {

        console.error("Não foi possível salvar o jogo:", erro);

    }

}


function carregarProgresso() {

    try {

        const dados = localStorage.getItem(SAVE_KEY);

        if (!dados) {
            return null;
        }

        return JSON.parse(dados);

    } catch (erro) {

        console.error("Erro ao carregar o salvamento:", erro);

        return null;

    }

}


function apagarSalvamento() {

    localStorage.removeItem(SAVE_KEY);

}


//iniciar

function iniciarJogo() {

    etapa = "prologo";

    cenaAtual = 0;
    falaAtual = 0;

    capituloAtual = 0;
    escolhaAtual = 0;

    pontuacao = 50;
    respostaAtual = "";

    choiceArea.classList.add("hidden");
    continueIndicator.classList.remove("hidden");

    menu.classList.add("hidden");
    game.classList.remove("hidden");

    nextButton.style.display = "block";

    mostrarCenaPrologo();

    salvarProgresso();

}


//cenários

function trocarCenario(nomeArquivo) {

    backgroundElement.style.backgroundImage =
        `url("./assets/backgrounds/${nomeArquivo}")`;

}


//prólogo

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


//iniciar caps

function iniciarCapitulos() {

    etapa = "capitulos";

    capituloAtual = 0;
    escolhaAtual = 0;
    falaAtual = 0;

    mostrarCapitulo();

    salvarProgresso();

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


//mostrar escolhas

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

    salvarProgresso();

}


//registrar escolha

function registrarEscolha(opcao) {

    pontuacao += opcao.pontos;

    pontuacao = Math.max(0, Math.min(100, pontuacao));

    etapa = "resposta";

    respostaAtual = opcao.resposta;

    choiceArea.classList.add("hidden");

    dialogueElement.textContent = respostaAtual;

    speakerElement.style.display = "none";

    continueIndicator.classList.remove("hidden");
    nextButton.style.display = "block";

    salvarProgresso();

}


//avançar

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


// avançar prol.

function avancarPrologo() {

    const cena = prologo[cenaAtual];

    falaAtual++;

    if (falaAtual < cena.falas.length) {

        mostrarFalaPrologo();

        salvarProgresso();

        return;

    }

    cenaAtual++;
    falaAtual = 0;

    if (cenaAtual >= prologo.length) {

        iniciarCapitulos();
        return;

    }

    mostrarCenaPrologo();

    salvarProgresso();

}


//avançar caps.

function avancarFalaCapitulo() {

    const capitulo = capitulos[capituloAtual];

    falaAtual++;

    if (falaAtual < capitulo.falas.length) {

        mostrarFalaCapitulo();

        salvarProgresso();

        return;

    }

    mostrarEscolha();

}


//avançar após escolha

function avancarAposResposta() {

    const capitulo = capitulos[capituloAtual];

    respostaAtual = "";

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

    salvarProgresso();

}


//restaurar partida

function continuarJogo() {

    const dados = carregarProgresso();

    if (!dados) {

        alert("Nenhum jogo salvo encontrado.");

        return;

    }

    // Verificar se o salvamento é válido

    const etapasValidas = [
        "prologo",
        "capitulos",
        "escolha",
        "resposta"
    ];

    if (
        !etapasValidas.includes(dados.etapa) ||
        !Number.isInteger(dados.pontuacao) ||
        dados.pontuacao < 0 ||
        dados.pontuacao > 100
    ) {

        alert("O salvamento está inválido. Inicie uma nova partida.");

        apagarSalvamento();

        return;

    }

    // Recuperar os dados salvos

    etapa = dados.etapa;

    cenaAtual = dados.cenaAtual;
    falaAtual = dados.falaAtual;

    capituloAtual = dados.capituloAtual;
    escolhaAtual = dados.escolhaAtual;

    pontuacao = dados.pontuacao;

    respostaAtual = dados.respostaAtual || "";


    // Validar a posição salva no prólogo

    if (etapa === "prologo") {

        if (
            !Number.isInteger(cenaAtual) ||
            cenaAtual < 0 ||
            cenaAtual >= prologo.length ||
            !Number.isInteger(falaAtual) ||
            falaAtual < 0 ||
            falaAtual >= prologo[cenaAtual].falas.length
        ) {

            alert("Não foi possível recuperar essa posição do jogo.");

            apagarSalvamento();

            return;

        }

    }


    // Validar a posição salva nos capítulos

    if (etapa !== "prologo") {

        if (
            !Number.isInteger(capituloAtual) ||
            capituloAtual < 0 ||
            capituloAtual >= capitulos.length
        ) {

            alert("Não foi possível recuperar essa posição do jogo.");

            apagarSalvamento();

            return;

        }

        const totalFalas = capitulos[capituloAtual].falas.length;

        const falaValida =
            etapa === "capitulos"
                ? falaAtual >= 0 && falaAtual < totalFalas
                : falaAtual === totalFalas;

        if (
            !Number.isInteger(falaAtual) ||
            !falaValida
        ) {

            alert("Não foi possível recuperar essa posição do jogo.");

            apagarSalvamento();

            return;

        }

    }


    // Validar a escolha salva

    if (
        etapa === "escolha" ||
        etapa === "resposta"
    ) {

        if (
            !Number.isInteger(escolhaAtual) ||
            escolhaAtual < 0 ||
            escolhaAtual >= capitulos[capituloAtual].escolhas.length
        ) {

            alert("Não foi possível recuperar essa escolha.");

            apagarSalvamento();

            return;

        }

    }


    // Abrir o jogo

    menu.classList.add("hidden");
    game.classList.remove("hidden");


    // Recuperar o prólogo

    if (etapa === "prologo") {

        choiceArea.classList.add("hidden");

        continueIndicator.classList.remove("hidden");
        nextButton.style.display = "block";

        mostrarCenaPrologo();

    } else {

        const capitulo = capitulos[capituloAtual];

        trocarCenario(capitulo.background);

        chapterTitle.textContent = capitulo.titulo;


        // Recuperar diálogo

        if (etapa === "capitulos") {

            choiceArea.classList.add("hidden");

            continueIndicator.classList.remove("hidden");
            nextButton.style.display = "block";

            mostrarFalaCapitulo();

        }


        // Recuperar tela de escolha

        if (etapa === "escolha") {

            mostrarEscolha();

        }


        // Recuperar resposta após escolha

        if (etapa === "resposta") {

            choiceArea.classList.add("hidden");

            speakerElement.style.display = "none";

            dialogueElement.textContent = respostaAtual;

            continueIndicator.classList.remove("hidden");
            nextButton.style.display = "block";

        }

    }

    // Atualizar salvamento

    salvarProgresso();

}


//finais

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

    // A partida terminou: não manter um salvamento antigo

    apagarSalvamento();

    console.log("Pontuação final:", pontuacao);

}


//botões

//botões

startButton.addEventListener("click", iniciarJogo);

continueButton.addEventListener("click", continuarJogo);

nextButton.addEventListener("click", avancarJogo);


dialogueBox.addEventListener("click", function(event) {

    if (
        event.target.closest(".choice-options")
    ) {
        return;
    }

    avancarJogo();

});


//teclado

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


//iniciar
console.log("O Jantar. iniciado com sucesso.");