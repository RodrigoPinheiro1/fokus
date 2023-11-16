const html = document.querySelector('html')

const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')


function alterarContexto(valor) {

    html.setAttribute('data-contexto', `${valor}`)
    banner.setAttribute('src', `imagens/${valor}.png`)
    // botaoActive.setAttribute('data-contexto',`app__card-button--${valor}`)


    botoes.forEach(function (valor){
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
    alterarContexto('foco')
    focoBt.classList.add('active')
});
curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
});
longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
});