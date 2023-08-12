// ESTRUTURAS DE REPETIÇÃO

const input = require('readline-sync')

const numero_sorteado = 5

let numero = Number(input.question('qual numero voce escolhe? '))

while (numero !== numero_sorteado){
    console.log('voce errou o numero. Tente novamente')
    numero = Number(input.question('qual numero voce escolhe? '))
}
console.log('Voce acertou')