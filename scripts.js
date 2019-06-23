const modal = document.querySelector('#modal');
const modalBotao = document.querySelector('#botao1');
const closeBotao = document.querySelector('.close');
const modal2 = document.querySelector('#modal2');
const modalBotao2 = document.querySelector('#botao2');
const closeBotao2 = document.querySelector('.close2');

modalBotao.addEventListener('click', abrirLogin);
closeBotao.addEventListener('click', fecharLogin);
window.addEventListener('click', cliqueForaLogin);
modalBotao2.addEventListener('click', abrirCadastro);
closeBotao2.addEventListener('click', fecharCadastro);


function abrirLogin() {
    modal.style.display = 'block';
}

function fecharLogin() {
    modal.style.display = 'none';
}

function cliqueForaLogin(e) {
    if (e.target == modal || e.target == modal2) {
        modal.style.display = 'none';
        modal2.style.display = 'none';
    }
}
function abrirCadastro() {
    modal2.style.display = 'block';
}

function fecharCadastro() {
    modal2.style.display = 'none';
}