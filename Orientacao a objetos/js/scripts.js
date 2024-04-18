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
// class CachorroClasse {
//     constructor(nome, raca) {
//         this.nome = nome;
//         this.raca = raca;

//     }
// }

// const jeff = new CachorroClasse("Jeff", "Labrador");
// console.log(jeff);

// console.log(Object.getPrototypeOf(jeff));

// // Mais sobre classes
// class Caminhao {
//     constructor(eixos, cor) {
//         this.eixos = eixos;
//         this.cor = cor;
//     }

//     descreverCaminhao() {
//         console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);

//     }
// }

// const scania = new Caminhao(6, "Vermelha")
// console.log(scania)
// scania.descreverCaminhao()

// const c2 = new Caminhao(4, "branca")
// console.log(c2)
// c2.descreverCaminhao()
// console.log(c2.motor)
// Caminhao.prototype.motor = 4.0;

// const c3 = new Caminhao(6, "Preto");
// console.log(c3.motor)

// // Override
// class Humano {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }

// }

// const regiane = new Humano("Regiane", 28);
// console.log(regiane);

// Humano.prototype.idade = "Não definida"
// console.log(regiane.idade);

// console.log(Humano.prototype.idade);

// Symbols em Classes - parar criar uma propriedade única e imutável
// class Aviao {
//     constructor(marca, turbina) {
//         this.marcar = marca;
//         this.turbina = turbina;
//     }
// }

// const asas = Symbol()
// const pilotos = Symbol()

// Aviao.prototype[asas] = 2;
// Aviao.prototype[pilotos] = 3;

// const boeing = new Aviao("Boeing", 10);

// console.log(boeing);

// console.log(boeing[asas]);
// console.log(boeing[pilotos]);

// // Getters(exibir valor) e Setters (alterar valor)
// class Post {
//     constructor(titulo, descricao, tags) {
//         this.titulo = titulo;
//         this.descricao = descricao;
//         this.tags = tags;
//     }

//     get exibirTitulo() {
//         return `Você está lendo ${this.titulo}.`;
//     }

//     set adicionarTags(tags) {
//         const tagsArray = tags.split(", ")
//         this.tags = tagsArray;
//     }
// }

// const myPost = new Post("Algum post", "É um post sobre programação");

// console.log(myPost)

// console.log(myPost.exibirTitulo);

// myPost.adicionarTags = "programação, javascript, js";
// console.log(myPost);

 // Herança
//  class Mamifero {
//     constructor(patas) {
//     this.patas = patas
//     }
//  }

//  class Lobo extends Mamifero {
//     constructor(patas, nome) {
//     super(patas, patas)
//     this.nome = nome
//     }

//  }

//  const shark = new Lobo(4, "Shark")
//  console.log(shark);

// // Instanceof - verifica se um objeto é pai de outro
// console.log(shark instanceof Lobo);
// console.log(Lobo instanceof Mamifero);
// console.log(new Lobo(4, "teste") instanceof Mamifero);
