
/* ELEMENTOS DA TELA */


/* ========================================
   ELEMENTOS DA TELA
======================================== */

const menu = document.getElementById("menu");
const game = document.getElementById("game");

const speakerElement = document.getElementById("speaker");
const dialogueElement = document.getElementById("dialogue");
const chapterTitle = document.getElementById("chapter-title");

const startButton = document.getElementById("start-button");
const continueButton = document.getElementById("continue-button");
const optionsButton = document.getElementById("options-button");


/* ========================================
   ROTEIRO DO PRÓLOGO
======================================== */

const prologo = [

    // 1. A CHEGADA

    { speaker: "", text: "Eu não me lembro de quando vi esta casa pela primeira vez. Mas me lembro de nunca ter gostado dela." },
    { speaker: "", text: "A chuva caía sobre os jardins. Apenas uma janela da mansão permanecia iluminada." },
    { speaker: "", text: "Por um instante, uma silhueta apareceu atrás da janela." },
    { speaker: "", text: "Quando pisquei, ela havia desaparecido." },
    { speaker: "Alma", text: "Ilya?" },
    { speaker: "", text: "Abri a porta e entrei." },


    // 2. MARGARET

    { speaker: "Margaret", text: "Está atrasada." },
    { speaker: "Alma", text: "Desculpe." },
    { speaker: "Margaret", text: "Eu não pedi desculpas." },
    { speaker: "Margaret", text: "Seu quarto está como deixou." },
    { speaker: "Alma", text: "Eu não lembro." },
    { speaker: "Margaret", text: "Não?" },
    { speaker: "Alma", text: "Não." },
    { speaker: "Margaret", text: "Então talvez seja melhor começar a lembrar." },
    { speaker: "Alma", text: "Quem é aquela pessoa?" },
    { speaker: "Margaret", text: "Uma família." },
    { speaker: "Alma", text: "Qual família?" },
    { speaker: "Margaret", text: "A sua." },
    { speaker: "Margaret", text: "Não toque." },


    // 3. LYDIA

    { speaker: "Lydia", text: "Você voltou." },
    { speaker: "Alma", text: "Voltei." },
    { speaker: "Lydia", text: "Eu sabia." },
    { speaker: "Alma", text: "Como?" },
    { speaker: "Lydia", text: "A Eleanor disse." },
    { speaker: "Alma", text: "Ela sempre sabe." },
    { speaker: "Lydia", text: "Você cresceu." },
    { speaker: "Alma", text: "Você também." },
    { speaker: "Lydia", text: "Ela não gosta de ficar sozinha." },
    { speaker: "Alma", text: "Ela é só uma boneca." },
    { speaker: "Lydia", text: "Eu sei. Ela também sabe." },


    // 4. ELEANOR

    { speaker: "Eleanor", text: "Você demorou." },
    { speaker: "Alma", text: "Todo mundo está dizendo isso." },
    { speaker: "Eleanor", text: "Talvez você realmente tenha demorado." },
    { speaker: "Alma", text: "Aconteceu alguma coisa?" },
    { speaker: "Eleanor", text: "Nesta casa sempre acontece alguma coisa." },
    { speaker: "Alma", text: "Isso não respondeu." },
    { speaker: "Eleanor", text: "Eu sei." },
    { speaker: "Eleanor", text: "Você está diferente." },
    { speaker: "Alma", text: "Todo mundo está dizendo isso." },
    { speaker: "Eleanor", text: "Eu não disse que era ruim." },


    // 5. CLARA

    { speaker: "Clara", text: "Você demorou demais!" },
    { speaker: "Alma", text: "Senti sua falta também." },
    { speaker: "Clara", text: "Você vai ficar?" },
    { speaker: "Alma", text: "Vou." },
    { speaker: "Clara", text: "Promete?" },
    { speaker: "Alma", text: "Prometo." },
    { speaker: "Clara", text: "Então está tudo bem." },
    { speaker: "", text: "Clara sorriu. Por algum motivo, não consegui sorrir de volta." },


    // 6. YELAN

    { speaker: "Yelan", text: "Finalmente." },
    { speaker: "Alma", text: "Estava me esperando?" },
    { speaker: "Yelan", text: "Estava contando quanto tempo você levaria." },
    { speaker: "Alma", text: "Para quê?" },
    { speaker: "Yelan", text: "Para lembrar onde fica a saída." },
    { speaker: "Alma", text: "Por quê?" },
    { speaker: "Yelan", text: "Por nada." },
    { speaker: "Yelan", text: "Só não confie em todas as portas." },


    // 7. EDGAR

    { speaker: "Edgar", text: "Então voltou." },
    { speaker: "Edgar", text: "Desta vez pretende ficar?" },
    { speaker: "Alma", text: "Pretendo." },
    { speaker: "Edgar", text: "Veremos." },
    { speaker: "", text: "Sobre a mesa havia uma fotografia antiga. Duas crianças estavam lado a lado. O rosto de uma delas estava parcialmente coberto." },
    { speaker: "Alma", text: "Quem é?" },
    { speaker: "", text: "Edgar virou a fotografia para baixo." },
    { speaker: "Edgar", text: "Ninguém." },
    { speaker: "Alma", text: "Pai..." },
    { speaker: "Edgar", text: "Vá jantar." },


    // 8. O JANTAR

    { speaker: "", text: "Todos estavam sentados à mesa." },
    { speaker: "Yelan", text: "Quanto tempo até acontecer de novo?" },
    { speaker: "Edgar", text: "Não comece." },
    { speaker: "Eleanor", text: "Yelan." },
    { speaker: "Margaret", text: "Existem assuntos que não precisam ser discutidos durante o jantar." },
    { speaker: "Alma", text: "Acontecer o quê?" },
    { speaker: "", text: "Ninguém respondeu." },
    { speaker: "Lydia", text: "Você não lembra?" },
    { speaker: "Alma", text: "Não." },
    { speaker: "Eleanor", text: "Não é importante." },
    { speaker: "Yelan", text: "Ainda." },


    // 9. A OITAVA PESSOA

    { speaker: "", text: "Olhei novamente para a mesa." },
    { speaker: "", text: "Por uma fração de segundo, havia alguém sentado na cadeira vazia." },
    { speaker: "", text: "Um rapaz de cabelos avermelhados." },
    { speaker: "", text: "Pisquei. A cadeira estava vazia novamente." },
    { speaker: "Clara", text: "O que foi?" },
    { speaker: "Alma", text: "Nada." },
    { speaker: "", text: "O relógio continuou a marcar as horas." },


    // 10. MEIA-NOITE

    { speaker: "", text: "23:59." },
    { speaker: "", text: "O relógio parou." },
    { speaker: "", text: "Alguém bateu à porta." },
    { speaker: "Alma", text: "Quem é?" },
    { speaker: "", text: "Nenhuma resposta." },
    { speaker: "", text: "Outra batida." },
    { speaker: "", text: "Abri a porta. O corredor estava vazio." },
    { speaker: "", text: "No chão, havia uma pequena engrenagem de metal." },
    { speaker: "", text: "Peguei o objeto." },
    { speaker: "???", text: "Você ainda está aqui?" },
    { speaker: "", text: "Soltei a engrenagem." },
    { speaker: "", text: "00:00." },
    { speaker: "", text: "DIA 1" }

];


/* ========================================
   CONTROLE DO DIÁLOGO
======================================== */

let dialogoAtual = 0;


/* ========================================
   INICIAR JOGO
======================================== */

function iniciarJogo() {

    dialogoAtual = 0;

    menu.classList.add("hidden");
    game.classList.remove("hidden");

    mostrarDialogo();
}


/* ========================================
   MOSTRAR DIÁLOGO
======================================== */

function mostrarDialogo() {

    // Verifica se o prólogo terminou

    if (dialogoAtual >= prologo.length) {
        finalizarPrologo();
        return;
    }

    // Busca a fala atual

    const cena = prologo[dialogoAtual];

    // Atualiza o nome do personagem

    speakerElement.textContent = cena.speaker;

    // Esconde o nome durante narrações

    speakerElement.style.display =
        cena.speaker === "" ? "none" : "block";

    // Atualiza o texto

    dialogueElement.textContent = cena.text;

}


/* ========================================
   AVANÇAR DIÁLOGO
======================================== */

function avancarDialogo() {

    // Impede avançar se o jogo estiver no menu

    if (game.classList.contains("hidden")) {
        return;
    }

    // Impede avançar depois do fim do prólogo

    if (dialogoAtual >= prologo.length) {
        return;
    }

    dialogoAtual++;

    mostrarDialogo();

}


/* ========================================
   FINALIZAR PRÓLOGO
======================================== */

function finalizarPrologo() {

    speakerElement.style.display = "none";

    chapterTitle.textContent = "CAPÍTULO 1";

    dialogueElement.textContent =
        "O primeiro dia começou.";

}


/* ========================================
   BOTÕES DO MENU
======================================== */

function continuarJogo() {

    alert("Nenhum jogo salvo encontrado.");

}


function abrirOpcoes() {

    alert("Menu de opções em desenvolvimento.");

}


/* CONECTAR BOTÕES */

startButton.addEventListener("click", iniciarJogo);

continueButton.addEventListener("click", continuarJogo);

optionsButton.addEventListener("click", abrirOpcoes);

/* ========================================
   CONECTAR BOTÕES
======================================== */

startButton.addEventListener("click", iniciarJogo);

continueButton.addEventListener("click", continuarJogo);

optionsButton.addEventListener("click", abrirOpcoes);


/* ========================================
   AVANÇAR CLICANDO NA CAIXA
======================================== */

document.querySelector(".dialogue-box")
    .addEventListener("click", avancarDialogo);


document.querySelector(".next-button")
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

console.log("JAVASCRIPT CARREGADO!");

console.log("Botão iniciar:", startButton);
