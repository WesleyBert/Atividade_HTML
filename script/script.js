
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
// let assunto = document.querySelect('#assunto');

function validaNome() {
    let txt = document.querySelector('#nomeTxt')
    if (nome.value.length < 3) {
        txt.innerHTML = "Nome Inválido"
        txt.style.color = 'red'

    } else {
        txt.innerHTML = ""
        nomeOk = true
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#emailTxt')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = 'red'
        txtEmail.style.display = 'block'
    } else {
        txtEmail.innerHTML = ""
        txtEmail.style.display = 'block'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#assuntoTxt')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "<p>Texto muito grande, no maximo 100 caracteres</p>"
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}


function validarEnviar() {
    if (nomeOk === true && emailOk === true && assuntoOk === true) {
        alert("Formulario enviado com sucesso!")
    } else {
        alert("Preencha o formulario corretamente!")
    }
}