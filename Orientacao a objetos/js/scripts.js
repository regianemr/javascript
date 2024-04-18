// // Métodos
// const animal = {
//     nome: "Fred",
//     latir: function() {
//         console.log("au au");
//     },
// };

// console.log(animal.nome);

// animal.latir();

// // Aprofundando em métodos
// const pessoa = {
//     nome: "Regiane",

//     getNome: function () {
//         return this.nome;
//     },

//     setNome: function(novoNome) {
//         this.nome = novoNome;
//     },
// };

// console.log(pessoa.nome);
// console.log(pessoa.getNome());

// pessoa.setNome("Maria");

// console.log(pessoa.getNome());

// Prototype - espécie de herança - cadeia
// const text = "abc"

// console.log(Object.getPrototypeOf(text)) // conhecendo o ancestral do texto

// const bool = true

// console.log(Object.getPrototypeOf(bool));

// const arr = []

// console.log(Object.getPrototypeOf(arr));

// // Mais sobre prototype
// const myObject = {
//     a: "b"
// };

// console.log(Object.getPrototypeOf(myObject));

// const mySecondObject = Object.create(myObject);
// console.log(mySecondObject);

// Classes Básicas
// const cachorro = {
//     raca: null,
//     patas: 4,
// };

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "Pastor Alemão";

// console.log(pastorAlemao);
// console.log(pastorAlemao.patas);

// const bulldog = Object.create(cachorro);
// bulldog.raca = "Bulldog";
// console.log(bulldog);
// console.log(bulldog.patas);

// // Funções construtoras - quando a função vira uma classe
// function criarCachorro(nome, raca) {
//     const cachorro = Object.create({});

//     cachorro.nome = nome;
//     cachorro.raca = raca;

//     return cachorro;
// }

// const fred = criarCachorro("Fred", "poodle");
// console.log(fred)

// const meg = criarCachorro("Meg", "husky");
// console.log(meg);

// // Mais funções construtoras - new - inicia um novo objeto
// function Cachorro(nome, raca) {
//     this.nome = nome;
//     this.raca = raca;
// }

// const husky = new Cachorro("Bil", "Husky");
// console.log(husky)

// // Métodos em funções construtoras
// Cachorro.prototype.uivar = function() {
//     console.log("Auuuuuu!")
// }

// console.log(Cachorro.prototype)
// husky.uivar();

// Classes em JavaScripts - Classes ES6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;

    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// Mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);

    }
}

const scania = new Caminhao(6, "Vermelha")
console.log(scania)
scania.descreverCaminhao()

const c2 = new Caminhao(4, "branca")
console.log(c2)
c2.descreverCaminhao()
console.log(c2.motor)
Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Preto");
console.log(c3.motor)