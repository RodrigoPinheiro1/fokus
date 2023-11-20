const html = document.querySelector('html')

const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const imagenPlayPauseBt = document.querySelector('.app__card-primary-butto-icon')
const musicaInput = document.querySelector('#alternar-musica')
const startPauseBt = document.querySelector('#start-pause')
const startPauseSpanBt = document.querySelector('#start-pause span')
const tempoTela = document.querySelector('#timer')
// const startPauseImgBt = document.querySelector('#start-pause img')
const botoes = document.querySelectorAll('.app__card-button')


const musicaFundo = new Audio('sons/luna-rise-part-one.mp3')
const audioBeep = new Audio('sons/beep.mp3');
const audioPause = new Audio(`sons/pause.mp3`);
const audioPlay = new Audio(`sons/play.mp3`);


musicaFundo.loop = true;

let temporizadorEmSegundos = 1500;
let intervaloId = null;


musicaInput.addEventListener('change', () => {
    if (musicaFundo.paused) {
        musicaFundo.play();
    } else {
        musicaFundo.pause();
    }
});

function alterarContexto(valor) {

    mostrarTempo();
    html.setAttribute('data-contexto', `${valor}`)
    banner.setAttribute('src', `imagens/${valor}.png`)
    // botaoActive.setAttribute('data-contexto',`app__card-button--${valor}`)


    botoes.forEach(function (valor) {
        valor.classList.remove('active')
    })

    if (valor === "foco") {
        titulo.innerHTML = `Otimize sua produtividade,<br>
    <strong class="app__title-strong">mergulhe no que importa.</strong>`
    } else if (valor === "descanso-curto") {

        titulo.innerHTML = `Que tal dar uma respirada?
 <strong class="app__title-strong">faça uma pausa</strong>`
    } else if (valor === "descanso-longo") {

        titulo.innerHTML = `Hora de voltar da superficie
 <strong class="app__title-strong">faça uma pausa longa</strong>`
    }


}

focoBt.addEventListener('click', () => {
    temporizadorEmSegundos = 1500;

    alterarContexto('foco')
    focoBt.classList.add('active')
});
curtoBt.addEventListener('click', () => {
     temporizadorEmSegundos = 300;
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
});
longoBt.addEventListener('click', () => {
     temporizadorEmSegundos = 900;
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
});

const contagemRegressiva = () => {

    if (temporizadorEmSegundos <= 0) {
        audioBeep.play();
        alert('sem tempo')
        zerar();
        return
    }
    temporizadorEmSegundos -= 1;
    mostrarTempo();

}


startPauseBt.addEventListener('click', iniciar)

function iniciar() {

    if (intervaloId) {
        audioPlay.play();
        zerar()
        return;
    }


    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000) //milisegundos
    pausarComecar();


}

function pausarComecar() {

    if (startPauseSpanBt.textContent === "Pausar") {

        startPauseSpanBt.textContent = "Começar"
        imagenPlayPauseBt.setAttribute('src', 'imagens/play_arrow.png')

    } else {

        startPauseSpanBt.textContent = "Pausar"
        imagenPlayPauseBt.setAttribute('src', 'imagens/pause.png')

    }
}

function zerar() {
    audioPause.play();
    pausarComecar();
    clearInterval(intervaloId);
    intervaloId = null;
}


function mostrarTempo() {
    const tempo = new Date(temporizadorEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoTela.innerHTML = `${tempoFormatado}`
}


mostrarTempo();


