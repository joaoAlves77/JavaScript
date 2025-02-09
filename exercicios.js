// Escreva uma função, coloque dois números como argumentos e retorne o número maior!
function numbers(number1, number2) {
    if(number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}
console.log(numbers(9, 8));

// Fazer um função para saber a imagem esta na horizontal ou vertical
function isHorizontal(width, height) {
    if(width > height){
        return true;
    } else {
        return false;
    }
}

let result = isHorizontal(500, 300);
console.log(result);