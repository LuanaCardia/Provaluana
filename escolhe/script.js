function calc() {
    let n1 = Number(prompt('primeiro valor:'))
    let n2 = Number(prompt('segundo valor:'))
    let op = Number(prompt(`valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] somar \n[2]subtrair \n[3]multiplicar \n[4] dividir`))
    
    
    let saida = document.getElementById('saida')
    saida.innerHTML = `<h2>calculando..</h2>`
    switch (op) {
    case 1:
        saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
        break
    case 2:
        saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
        break
    case 3:
        saida.innerHTML += `<p>${n1} x ${n2} = <strong>${n1*n2}</strong></p>`
    break
    case 4:
        saida.innerHTML += `<p>${n1} / ${n2} = <strong>${(n1/n2).toLocaleString('pt-Br')}</strong></p>`
    break
        default:
        saida.innerHTML += `<p>OPÇÃO INVALIDA!vc digitou ${n1} e ${n2}, mas não sei oq fazer com eles</p>`
    break
    
    }
    }