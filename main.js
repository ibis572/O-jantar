// =========================================================================
// GERENCIAMENTO DO MENU INICIAL
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
    const botaoContinuar = document.querySelector('a[href="prologo.html"]:nth-child(2)');
    
    // 1. VERIFICAÇÃO DE JOGO SALVO (SISTEMA DE PREVENT)
    // Verifica se existe um progresso salvo no navegador (localStorage)
    const temProgressoSalvo = localStorage.getItem("jogo_salvo_progresso");

    if (!temProgressoSalvo) {
        // Se não houver progresso, o botão Continuar fica visualmente desabilitado
        botaoContinuar.style.opacity = "0.3";
        botaoContinuar.style.cursor = "not-allowed";
        botaoContinuar.style.pointerEvents = "none"; 
    }

    // 2. FUNÇÃO PARA INICIAR NOVO JOGO
    const botaoComecar = document.querySelector('a[href="prologo.html"]:nth-child(1)');
    botaoComecar.addEventListener("click", (fator) => {
        // Reseta o save antigo caso o jogador clique em "Começar"
        localStorage.setItem("jogo_salvo_progresso", "inicio");
    });
});
