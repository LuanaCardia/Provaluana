let res = document.querySelector('section#result')
let computador = 90
let jogador = 0

function sortear() {
let min = 1 
let max = 100
let dif = max - min
let aleatorio = Math.trunc(dif * aleatorio)

}

function jogar() {
    jogador = Number(window.prompt('qual é seu palpite?'))
if (jogador < computador) {
    res.innerHTML += `<p> você falou ${jogador}. meu número é <strong>Maior</strong></p.`
}  else if (jogador > computador) {
    res.innerHTML += `<p> você falou ${jogador}. meu número é <strong>Menor</strong></p.`

} 

else if (jogador == computador) {
    res.innerHTML += `<p><strong>parabens</strong> vc acertou! eu tinha sorteado o valor ${computador}</p>`
document.getElementById('botao').style.visibility = 'hidden'
}
}