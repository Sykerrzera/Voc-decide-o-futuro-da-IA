const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de entrar em uma cidade onde eventos estranhos estão ocorrendo. Você encontra um homem misterioso que diz ser caçador de criaturas sobrenaturais. O que você faz?",
        alternativas: [
            {
                texto: "Fico desconfiado e tento entender mais sobre ele.",
                afirmacao: "Você decide acompanhar o caçador para saber mais sobre as criaturas que ele caça."
            },
            {
                texto: "Ignoro e sigo meu caminho, sem me envolver.",
                afirmacao: "Você ignora o caçador, mas logo se depara com uma criatura estranha."
            }
        ]
    },
    {
        enunciado: "Em um beco escuro, você encontra um demônio tentando invocar um ritual. O que você faz?",
        alternativas: [
            {
                texto: "Desafio o demônio e tento impedi-lo.",
                afirmacao: "Você invoca um feitiço para enfrentar o demônio, mas ele se prepara para atacar."
            },
            {
                texto: "Fico escondido e espero que o demônio vá embora.",
                afirmacao: "O demônio percebe sua presença, e algo sinistro começa a acontecer."
            }
        ]
    },
    {
        enunciado: "Você tem uma escolha crucial: salvar uma alma inocente ou destruir uma arma poderosa que pode destruir todos os monstros da Terra. O que você faz?",
        alternativas: [
            {
                texto: "Salvo a alma inocente, pois acredito que todos merecem uma chance.",
                afirmacao: "Você toma a decisão difícil de salvar a alma, sabendo que a guerra contra os monstros ainda está por vir."
            },
            {
                texto: "Destruo a arma poderosa, para que os monstros não dominem o mundo.",
                afirmacao: "Você destrói a arma, mas sabe que a luta contra os seres sobrenaturais continuará."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();

    // Adiciona efeito de transição para as perguntas com um clima mais misterioso.
    caixaPerguntas.style.opacity = 0;
    setTimeout(() => {
        caixaPerguntas.style.transition = "opacity 1s ease-in";
        caixaPerguntas.style.opacity = 1;
    }, 100);
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        
        // Adiciona animações de "glitch" aos botões, como se estivesse em uma dimensão distorcida.
        botaoAlternativas.style.transition = "box-shadow 0.3s ease-in-out";

        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);

        // Efeito de "sombra" e "glitch" para dar o toque sobrenatural.
        botaoAlternativas.addEventListener("mouseover", () => {
            botaoAlternativas.style.boxShadow = "0 0 15px rgba(158, 0, 0, 0.7)";
        });

        botaoAlternativas.addEventListener("mouseout", () => {
            botaoAlternativas.style.boxShadow = "none";
        });
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";

    // Efeito visual de "glitch" na tela, como se o mundo sobrenatural estivesse interferindo.
    caixaAlternativas.innerHTML = ""; // Limpa as alternativas anteriores
    caixaAlternativas.innerHTML = "<p class='efeito-glitch'>Você escolheu: " + opcaoSelecionada.texto + "</p>";

    // Música ou som de fundo relacionado a caçadores ou atmosfera sobrenatural.
    tocaSomSobrenatural();

    setTimeout(() => {
        atual++;
        mostraPergunta();
    }, 1000); // Aguarda 1 segundo para mostrar a próxima pergunta
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você está em um mundo onde o sobrenatural é real...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    textoResultado.style.color = "red"; // Usar vermelho para algo alarmante

    // Animação de revelação final com opacidade para dar um toque de tensão.
    textoResultado.style.opacity = 0;
    setTimeout(() => {
        textoResultado.style.transition = "opacity 2s ease-in";
        textoResultado.style.opacity = 1;
    }, 500);
}

// Função para simular um som ambiente de fundo com temática de *Supernatural*.
function tocaSomSobrenatural() {
    const audio = new Audio('https://www.freesoundslibrary.com/wp-content/uploads/2020/05/Suspense-Dark-Atmosphere.mp3');
    audio.loop = true;
    audio.volume = 0.1; // Som baixo para criar um clima, não muito alto
    audio.play();
}

// Começa o jogo
tocaSomSobrenatural();
mostraPergunta();
