// Operadores Booleanos

// IGUALDADE: == (ou ===)
// DESIGUALDADE: !=
// MAIOR QUE: >
// MAIOR OU IGUAL: >=
// MENOR QUE: <
// MENOR OU IGUAL: <=

const numero = 10

console.log(numero == 10)
console.log(numero > 20)

console.clear() // Limpa tudo o que foi em cima 

// Conjuções Lógicas
// AND => &&
let idade = 28
let tenhoCnh = true

const possoDirigir = idade >= 18 && tenhoCnh === true
console.log('Posso dirigir', possoDirigir)

console.clear

// OR => ||
idade = 30

const votoFacultativo = idade < 18 || idade >= 70
console.log('voto obrigatorio', votoFacultativo)

// NOT => !
 const estouGostandoDoCurso = false
 console.log(!estouGostandoDoCurso)