function interromperAcao(event) {
    event.preventDefault();
}

window.onload = function () {
    let botao = document.getElementById("botao");
    botao.addEventListener("click", interromperAcao);

}