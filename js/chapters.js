
export const capitulos = [

    /* ========================================
       DIA 1 — O COSTUME
    ======================================== */

    {
        id: "dia1",
        titulo: "DIA 1 — O COSTUME",
        background: "Sala de Jantar.jpg",

        falas: [
            {
                speaker: "",
                text: "Acordei com o som de passos no corredor. Por um instante, não reconheci o quarto."
            },
            {
                speaker: "",
                text: "Sobre a mesa havia uma lista de compras, escrita com uma caligrafia que parecia familiar."
            },
            {
                speaker: "Margaret",
                text: "O jantar de hoje precisa ser preparado com antecedência."
            },
            {
                speaker: "Alma",
                text: "Há comida suficiente na despensa."
            },
            {
                speaker: "Margaret",
                text: "Não o bastante para todos."
            },
            {
                speaker: "",
                text: "Olhei para a lista. As quantidades pareciam exageradas."
            }
        ],

        escolhas: [
            {
                pergunta: "A lista de compras está sobre a mesa. O que você faz?",
                opcoes: [
                    {
                        texto: "Conferir o que já existe na despensa.",
                        pontos: -10,
                        resposta: "Alguns ingredientes ainda estavam fechados. Não havia necessidade de comprar mais."
                    },
                    {
                        texto: "Comprar tudo novamente para garantir.",
                        pontos: 10,
                        resposta: "A despensa já estava cheia. Ainda assim, novas compras foram feitas."
                    }
                ]
            },

            {
                pergunta: "Margaret pergunta quanto deve preparar para o jantar.",
                opcoes: [
                    {
                        texto: "Preparar porções de acordo com o número de pessoas.",
                        pontos: -10,
                        resposta: "Margaret pareceu insatisfeita, mas anotou a quantidade."
                    },
                    {
                        texto: "Preparar comida em excesso, como de costume.",
                        pontos: 10,
                        resposta: "As travessas foram preenchidas até a borda."
                    }
                ]
            }
        ]
    },


    /* ========================================
       DIA 2 — AS SOBRAS
    ======================================== */

    {
        id: "dia2",
        titulo: "DIA 2 — AS SOBRAS",
        background: "Cômodo Extra.jpg",

        falas: [
            {
                speaker: "",
                text: "O cheiro da refeição anterior ainda permanecia na casa."
            },
            {
                speaker: "",
                text: "Encontrei pratos esquecidos e recipientes espalhados pela cozinha."
            },
            {
                speaker: "Clara",
                text: "Você pode me ajudar a guardar tudo?"
            },
            {
                speaker: "Alma",
                text: "Isso ainda pode ser aproveitado?"
            },
            {
                speaker: "Clara",
                text: "Algumas coisas, sim. Outras já passaram do ponto."
            },
            {
                speaker: "",
                text: "Havia alimentos que poderiam ter sido conservados corretamente. Agora, estavam estragados."
            }
        ],

        escolhas: [
            {
                pergunta: "Você encontra alimentos esquecidos na despensa.",
                opcoes: [
                    {
                        texto: "Separar os alimentos e verificar suas condições de conservação.",
                        pontos: -10,
                        resposta: "Os alimentos ainda próprios para consumo foram organizados e armazenados corretamente."
                    },
                    {
                        texto: "Deixar tudo como está.",
                        pontos: 10,
                        resposta: "O tempo passou. Alguns alimentos já não poderiam ser consumidos."
                    }
                ]
            },

            {
                pergunta: "Há sobras da refeição anterior. O que fazer?",
                opcoes: [
                    {
                        texto: "Reaproveitar as sobras que foram armazenadas com segurança.",
                        pontos: -10,
                        resposta: "Parte da refeição foi aproveitada sem colocar ninguém em risco."
                    },
                    {
                        texto: "Preparar uma refeição completamente nova.",
                        pontos: 10,
                        resposta: "As sobras foram esquecidas novamente."
                    }
                ]
            }
        ]
    },


    /* ========================================
       DIA 3 — O APODRECIMENTO
    ======================================== */

    {
        id: "dia3",
        titulo: "DIA 3 — O APODRECIMENTO",
        background: "Porão.jpg",

        falas: [
            {
                speaker: "",
                text: "O porão estava mais cheio do que eu lembrava."
            },
            {
                speaker: "",
                text: "Caixas, sacos e recipientes ocupavam quase todo o espaço."
            },
            {
                speaker: "Yelan",
                text: "Engraçado, não acha?"
            },
            {
                speaker: "Alma",
                text: "O quê?"
            },
            {
                speaker: "Yelan",
                text: "Toda essa comida. E ainda assim, parece que nunca temos o suficiente."
            },
            {
                speaker: "",
                text: "Encontrei registros antigos de compras. Muitos produtos haviam sido adquiridos em quantidades muito maiores do que o necessário."
            },
            {
                speaker: "",
                text: "Ao lado dos registros, havia anotações sobre água, energia, transporte e trabalho envolvidos na produção dos alimentos."
            }
        ],

        escolhas: [
            {
                pergunta: "Os registros mostram compras excessivas. O que você faz?",
                opcoes: [
                    {
                        texto: "Usar os registros para planejar compras futuras.",
                        pontos: -10,
                        resposta: "Pela primeira vez, as quantidades começaram a fazer sentido."
                    },
                    {
                        texto: "Ignorar os registros e manter a rotina.",
                        pontos: 10,
                        resposta: "As mesmas quantidades foram anotadas para a próxima compra."
                    }
                ]
            },

            {
                pergunta: "Você encontra alimentos estragados no porão.",
                opcoes: [
                    {
                        texto: "Identificar o que foi perdido e evitar novas compras desnecessárias.",
                        pontos: -10,
                        resposta: "O desperdício não poderia ser desfeito, mas talvez pudesse ser evitado novamente."
                    },
                    {
                        texto: "Descartar tudo sem investigar o motivo.",
                        pontos: 10,
                        resposta: "As caixas foram esvaziadas. Outras logo ocupariam seu lugar."
                    }
                ]
            }
        ]
    },


    /* ========================================
       DIA 4 — O ÚLTIMO JANTAR
    ======================================== */

    {
        id: "dia4",
        titulo: "DIA 4 — O ÚLTIMO JANTAR",
        background: "Sala de Jantar.jpg",

        falas: [
            {
                speaker: "",
                text: "A mesa estava posta novamente."
            },
            {
                speaker: "",
                text: "As mesmas travessas. Os mesmos pratos. A mesma quantidade absurda de comida."
            },
            {
                speaker: "Edgar",
                text: "Sente-se, Alma."
            },
            {
                speaker: "Alma",
                text: "Não precisamos preparar tudo isso."
            },
            {
                speaker: "Margaret",
                text: "Sempre foi assim nesta casa."
            },
            {
                speaker: "Alma",
                text: "E quantas vezes tudo isso terminou no lixo?"
            },
            {
                speaker: "",
                text: "Ninguém respondeu. A cadeira vazia continuava à mesa."
            },
            {
                speaker: "???",
                text: "Você finalmente percebeu?"
            }
        ],

        escolhas: [
            {
                pergunta: "A mesa está cheia. O que você decide fazer?",
                opcoes: [
                    {
                        texto: "Interromper o excesso e servir apenas o necessário.",
                        pontos: -10,
                        resposta: "Pela primeira vez, a mesa não estava coberta por travessas desnecessárias."
                    },
                    {
                        texto: "Aceitar o jantar exatamente como foi preparado.",
                        pontos: 10,
                        resposta: "As travessas foram colocadas diante de você, uma após a outra."
                    }
                ]
            },

            {
                pergunta: "Antes de terminar a noite, você precisa decidir o que fazer com a rotina da casa.",
                opcoes: [
                    {
                        texto: "Planejar as próximas refeições e evitar novas compras em excesso.",
                        pontos: -10,
                        resposta: "A lista de compras foi reescrita. Dessa vez, havia apenas o necessário."
                    },
                    {
                        texto: "Deixar tudo como está e repetir o ritual.",
                        pontos: 10,
                        resposta: "A lista permaneceu intacta. Amanhã, tudo começaria novamente."
                    }
                ]
            }
        ]
    }

];
