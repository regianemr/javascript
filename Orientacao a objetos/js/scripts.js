// Métodos
const animal = {
    nome: "Fred",
    latir: function() {
        console.log("au au");
    },
};

console.log(animal.nome);

animal.latir();

// Aprofundando em métodos
const pessoa = {
    nome: "Regiane",

    getNome: function () {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome;
    },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Maria");

console.log(pessoa.getNome());
