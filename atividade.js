let nome = "Ferrari"
console.log(nome);

let cidade = "Brasilia"
console.log(cidade);


let x = 10;
let y = 5;
console.log (x > y);

let preco = 45.3;
if (preco <= 40.3) {
    console.log("barato")
} else {
    console.log("caro")
}

function calcPct(n1, n2) {
    return (n2 / n1) * 100;
}
let n1 = 50;
let n2 = 20;
let pct = calcPct(n1, n2);
console.log(`${pct}% de ${n1} é ${n2}`)


function calcuLarImovel (metragem, quartos) {
    let m2 = 3.000;
    let preco2 = 0;

    switch (quartos){
        case 1:
        default:
            preco2 = metragem * m2;
            break
        case 2:
            preco2 = metragem * (m2 * 1.2);
            break
        case 3:
            preco2 = metragem * (m2 * 1.5);
            break
    }
    return preco2;
}

let metragem = 123;
let quartos = 2;
let preco2 = calcuLarImovel(metragem, quartos);
console.log(`a casa custa R$ ${preco2}`);

function userPassoword(user, password) {
    if (user === 'João' && password === 123) {
        return true;
    } else {
        return false;
    }
}

let user = 'pedro';
let password = 321;
let validação = userPassoword(user, password);
if (validação) {
    console.log("Acesso concedido");
} else {
    console.log('Acesso negado');
}

// 1. No array abaixo, qual o numero que pega a ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x2 = 1;
console.log('1. ' + carros[x]);

// 2. Troque a Ferrari por audi
carros[1] = 'Audi';
console.log(`2. lista com Audi: ${carros}` );
console.log(carros);

//3 adicione volvo na lista
carros.push('Volvo');
console.log(carros);

//4. exiba quantos itens tem no array
console.log(`Total de items: ${carros.length}`);