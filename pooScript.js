// Objetos e Orientação a Objetos
// classes: construtor, this e instâncias
class Personagem {
    constructor(nome, idade, poder) {
        this.nome = nome;
        this.idade = idade;
        this.poder = poder;
    }
}
console.log(new Personagem('joao', 20, 'força')); // instância

// classes: action
class Person {

    age = 0;
    steps = 0;

    constructor(name) {
        this.name = name;
    }

    takeAstep() {
        this.steps++;
    }

    setAge(age) {
        if(typeof age == 'number') { // verificar se é um número
            this.age = age;
        } else {
            console.log('A idade deve ser um número');
        }
    }
}

let p1 = new Person('João');
let p2 = new Person('Maria');
let p3 = new Person('José');

p1.takeAstep();
console.log(`${p1.name} deu ${p1.steps} passos`);

// Classes: Getter e Setter, forma de usar get e set

    // get fullName() {
    //     return `${this.firstName} ${this.LastName}`;
    // }

// Classes: Herança
class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    sayHello() {
        super.takeAstep();
    }
}
let p6 = new Student('Maria', 'Engenharia');
p6.sayHello();
console.log(`${p6.name} deu ${p6.steps} passos`);
