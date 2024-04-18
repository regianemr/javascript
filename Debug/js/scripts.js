// Strict
// "use strict";

// //opa = "teste";

// const opa = "teste"

// Método debug: console.log
let a = 1
let b = 2

if(a==1) {
    a = b + 2;
}

console.log(a);

for(let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a);
}

// debugger
let c = 1;
let d = 2;

if (c == 1) {
    c = d + 2;
}

//debugger;

for(let i = 0; i < d; i++) {
    c = c + 2
}

console.log("Executou o loop");

//debugger;

if (c > 5) {
    c = 25;
}

// tratamento de dados
function checkNumber(n) {
    const result = Number(n)

    if(Number.isNaN(result)) {
        console.log("Valor incorreto");
        return;
    }

    console.log("Valor correto!");
    return result;
}

checkNumber(5);
checkNumber("10");
checkNumber("teste");

// Exceptions - erros que nós geramos no programa
let x = 10

if(x != 11) {
    throw new Error("O valor de x não pode ser diferente de 11")
}
