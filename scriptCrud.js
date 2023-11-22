const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionar = document.querySelector(".app__form-add-task");


btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionar.classList.toggle('hidden')    //se nao tem tira se tem coloca classe hidden css

})