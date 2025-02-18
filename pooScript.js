// Objetos e Orientação a Objetos
// classes: construtor e this

class Personagem {
    constructor(nome, idade, poder) {
        this.nome = nome;
        this.idade = idade;
        this.poder = poder;
    }
}

console.log(new Personagem('joao', 20, 'força'));