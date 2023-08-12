let arr = ['João', 18, 1.80, true]

console.log(arr)

// como acessar os elementos do array

console.log('Primeiro elemento:', arr[0])
console.log('Segundo elemento:', arr[1])
console.log('Terceiro elemento:', arr[2])
console.log('Quarto elemento:', arr[3])

// como obter o tamanho do array
console.log('tamanho da array:', arr.length)

// percorrendo arrays
console.clear()

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

console.clear()

for(let elemento of arr){
    console.log(elemento)
}

console.clear()

for (let indice in arr){
    console.log(indice, arr[indice])
}

