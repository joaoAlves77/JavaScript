const input = require('readline-sync')

// o problema
const nota1 = Number(input.question('Informe a nota 1: '))
const nota2 = Number(input.question('Informe a nota 2: '))
const nota3 = Number(input.question('Informe a nota 3: '))

let media = (nota1 + nota2 + nota3) / 3

console.clear()

// acumulador

let acumulador = 0

acumulador += 10

acumulador++

console.log(acumulador)

console.clear()

// ESTRUTURA FOR

for (let i = 0; i <= 3; i++){
    console.log('repetição', i)
}