var mexer = document.getElementById('descer')
mexer.addEventListener('mouseenter', entrar)
mexer.addEventListener('mouseout', sair)

function entrar(){
    mexer.style.paddingTop = '2000px'
}

function sair(){
    mexer.style.paddingBottom = "20px"
}