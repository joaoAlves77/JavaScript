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
function nomeCompleto(nome, sobrenome) {
    console.log (`${nome} ${sobrenome}`);
}
nomeCompleto("joao", "santana")

// Return
function teste (x) {
    return x * x
}

let resultado2 = teste(10);
console.log(resultado2)

// Função com retorno condicional
function teste2 (idade10) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}
let idade10 = 17;
let verificar = teste2(idade10);

if (verificar){
    console.log("Maior de idade")
} else {
    console.log("Menor de idade");
}

// Arrow Function
const somar = (x, y) => x + y;

console.log(somar(10, 5));

//exemplo de função dentro de função:
function addSquares(a, b) {
    const square = (x) => x * x;
    
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

// Array
// Contagem dos arrays sempre começa do zero
let colors = ['blue', 'red', 'green'];
console.log(colors[1]);

//Operações basicas do array
let ingredientes = ['ovo', 'massa', 'leite', 'farinha'];
ingredientes.push('agua');
ingredientes.pop();
ingredientes.shift();
console.log(`total de ingredientes: ${ingredientes.length}`);

// objetos
let personagem = {
    nome: 'João',
    idade: 19,
    pais: 'Brasil',
    olhos: ['Preto', 'azul'],
    poderes: {
        forca: 10,
        magia: 5,
        stamina: 10
    }
}
console.log(`${personagem.nome} tem ${personagem.idade} mora em ${personagem.pais}`);
console.log(`Cor do olho: ${personagem.olhos[0]}`);
console.log(`força: ${personagem.poderes.forca} magia: ${personagem.poderes.magia} e stamina: ${personagem.poderes.stamina}`);

// Acessando e alterando objetos
let personagem2 = {
    nome: 'joao',
    idade: '20',
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ]
}
console.log(personagem2.carros[0].modelo);

// Função dentro de objetos
let pessoa = {
    nome: 'Joao',
    sobreNome: 'Santana',
    nomeCompleto: function () {
        return `${nome} ${sobreNome}`; 
    }
}
console.log(pessoa.nomeCompleto());

//O loop for
for(let n = 1; n <= 5; n++) {
    console.log('Frase qualquer' + n);
}

// Dando loop em arrays
let cores = [
    { nome: 'olho', cor: 'azul'}
];

for (let i in cores) {
    console.log(cores[i].nome);
}

// Loop while 
let numero = 0;
while (numero <= 10) {
    console.log(`Numero: ${numero}`);
    numero++;
}

// Ordenação de array
let jogos = ['gta', 'fifa', 'good'];
jogos.sort();
jogos.reverse();
console.log(jogos);

// Interação com array
let fruits2 = ['Banana', 'Pera', 'Maça', 'laranha'];
let bigFruits = fruits2.filter((item) => {
    return item.length > 4;
})

console.log(bigFruits);

// Eventos de clique
// pode ser assim: <button class="botao" onclick="clicou()">teste</button>
function clicou() {
    console.log('Clicou no botão')
}
// or
let botao = document.querySelector(".botao");
botao.addEventListener("click", clicou);