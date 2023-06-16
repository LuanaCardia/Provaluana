function contagem() {
    let saida = document.getElementById('saida')
let n1 = Number(document.getElementById('fn1').value)
let n2 = Number(document.getElementById('fn2').value)
let cont

saida.innerHTML += `<h2>contando de ${n1} ate ${n2} </h2>`
if (n1<n2) {
    cont = n1
    while (cont <= n2) {
        saida.innerHTML += `${cont}`
        cont ++
    }
} else if (n1<n2) {
    cont = n1
    while (cont >=n2){
        saida.innerHTML += `${cont}`
        cont --
    
    }
} else {
    saida.innerHTML += `não é possivel contar, pois os numeros sao iguais`
}



}