//Hello world;
let hello = "Hello world";
console.log(hello);


// Tipos de declaração de variaveis
// let e const. 'var' também mas não é mais utilizada.
// Variaveis
    let nome = "joao";
    let idade = 10;
    const sobreNome = "santana";

//Tipo de dados
    // string, number, boolean, array e object
    let nome2 = "joao"
    let idade2 = 19
    let certo = true
    let lista = ["tomate", "macarrão", "arroz"]
    let NomeIdade = { nome:"joao", idade: 20}
    console.log(typeof nome2) // typeof para saber qual é o tipo da variavel

// Operações em variaveis
    let x = 1;
    let y = 0;
    let resultado = x + y;
    console.log(resultado);

    let primeiro = "joao";
    let segundo = "santana";
    let completo = primeiro + " " + segundo;
    console.log(completo);

// Template string
    let nome3 = 'joão';
    let sobreNome3 = 'santana alves';
    let completo3 = `${nome3} ${sobreNome3}`
    console.log(completo3);

// Condicional if/ else
    let idade4 = 90;
    if(idade4 >= 18) {
        console.log('Maior de idade');
    } else {
        console.log('Menor de idade');
    }

// Mult-Condicionais && or ||
    let idade5 = 14;
    if(idade5 >= 18 && idade5 < 60) {
        console.log("Voce é um adulto.")
    }

// Condicional dupla
    let idade6 = 14;
    if(idade6 = 18 ) {
        console.log("Voce é um adole...");
    } else if(idade6 >= 18 && idade6 < 60) {
        console.log("Voce é um adulto");
    } else {
        console.log("Voce não é nada");
    }

// Condicional Ternário
let isMember = false;
let shipping = (isMember ? 2 : 10);

console.log(isMember ? "deu certo" : "error");
console.log("Frente: " + shipping)

// Switch
let profissao = "";
switch (profissao) {
    case 'pm':
        console.log('BIXO BOM');
        break;
    case 'bomb': 
        console.log('fogo');
        break;
    case 'samu': 
        console.log('vida');
        break;
    default: 
        console.log('Nenhuma');
        break;
}

//Declarando uma função
function gravidade() {
    console.log('a gravidade do planeta e:');
    console.log(9.9);
}
gravidade(); // chamando a função

//Passando parâmetros em funções
