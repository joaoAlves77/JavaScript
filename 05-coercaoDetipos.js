// COERÇÃO (CONVERSÃO) DE TIPOS

// 1. Coerção Explicita (Manual)
const numero = 10

console.log(numero, typeof numero)

const numeroEmFormaDeString = String(numero)
console.log(numeroEmFormaDeString, typeof numeroEmFormaDeString)

console.clear()

// 2. Coerção Implicita (Automatica)
console.log('10' + 1)
console.log('10' - 1)
console.log(10 * '30')
console.log(10 - 'asasa')