// // Criando uma função
// function minhaFuncao() {
//     console.log("Testando");
// }

// minhaFuncao();

// //Colocando uma função em uma variável
// const minhaFuncaoEmVariavel = function () {
//     console.log("Função em variável");
// }

// minhaFuncaoEmVariavel();

// // Criando função com parâmetros
// function funcaoComParametro(txt) {
//     console.log(`Imprindo: ${txt}`);
// }

// funcaoComParametro("Imprimindo alguma coisa");
// funcaoComParametro("Outra função");

// // return
// const a = 10
// const b = 30
// const c = 50
// const d = 80
// const e = 90

// function soma(n1, n2) {
//     return n1 + n2;
// }

// const resultado = soma(a, b)
// console.log(resultado);
// console.log(soma(c, e));

// // Escopo da função
// let y = 10

// function testandoEscopo() {
//     let y = 20
//     console.log(`Y dentro da função é ${y}`)
// }

// testandoEscopo();

// console.log(`Y fora da função é ${y}`)

// // Escopo aninhado
// let m = 10

// function escopoAninhado() {
//     let m = 20

//     if(true) {
//         let m = 30

//         if(true) {
//             let m = 40
//             console.log(m)
//         }

//         console.log(m)
        
//     }

//     console.log(m)
// }

// escopoAninhado();
// console.log(m);

// // arrow function (função anônima)
// const testArrow = () => {
//     console.log("Esta é uma arrow function");
// };

// testArrow();

// const parOuImpar = (n) => {
//     if(n % 2 === 0) {
//         console.log("Par")
//         return;
//     }

//     console.log("ímpar");
// };

// parOuImpar(5);
// parOuImpar(10);


// // mais sobre arrow functions
// const raizQuadrada = (x) => {
//     return x * x;
// }

// console.log(raizQuadrada(8));
// console.log(raizQuadrada(25));


// const raizQuadrada2 = (x) => x * x;
// console.log(raizQuadrada2(8));

// const helloWord = () => console.log("Hello Word");
// helloWord();

// // Parametro opcional
// const multiplication = function(m, n) {

//     if(n === undefined) {
//         return m * 2
//     } else {
//         return m * n;
//     }
// }

// console.log(multiplication(5));
// console.log(multiplication(6, 8));

// // caso real
// const greeting = (name) => {

//     if(!name) {
//         console.log("olá")
//         return
//     }

//     console.log(`Olá, ${name}`)
// }

// greeting();
// greeting("Regiane");

// valor default
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Regiane"));
console.log(customGreeting("Gleison", "Boa tarde!"));

const repeatText = (text, repeat = 2) => {

    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
};

repeatText("Testando");

repeatText("Agora repete 5 vezes", 5);

// Closure
function someFunction() {
    let txt = "Alguma coisa"

    function display() {
        console.log(txt)
    }

    display();
}

someFunction();

// Mais sobre closure
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);
console.log(c1(5));
console.log(c2(10));

// Recursão
const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar!")
    } else {
        const x = n - m;

        console.log(x);

        untilTen(x, m);
    };
};

untilTen(100, 7);