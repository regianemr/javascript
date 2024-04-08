// Variáveis
// let nome = "Regiane";
// console.log(nome);

// nome = "Regiane Melo"

// console.log(nome);

// const idade = 28;

// console.log(idade);

// //idade = 29;
// //console.log(idade);

// console.log(typeof idade);

// let a = 10,
// b = 20,
// c = 30;

// console.log(a, b, c);

// const nomecompleto = "Regiane Melo";

// const nomeCompleto = "Regiane Melo";

// console.log(nomecompleto);
// console.log(nomeCompleto);

// let _test = "ok";

// let $teste = "ok";

// console.log(_test, $teste);

// Funções
//prompt
// const age = prompt("Digite sua idade: ");
// console.log(`Você tem ${age} anos.`);

//Alert
//  alert("Testando");

//  const z = 10;
//  alert(`O número é ${z}.`);
  
// // Math
// console.log(Math.max(5, 2, 3, 6, 10));

// console.log(Math.floor(5.15));

// console.log(Math.ceil(5.15));

// Console
// console.log("teste!");
// console.error("Erro");
// console.warn("aviso");

// If
// const m = 10;

// if(m > 5) {
//     console.log("M é maior que 5!");
// }

// const user = "João"

// if (user === "João") {
//     console.log("Olá, João!");
// }

// if (user === "Maria") {
//     console.log("Olá Maria");
// }

// Else
const loggedIn = false

if(loggedIn) {
    console.log("Está autenticado");
} else {
    console.log("Não está autenticado");
}

const q = 10
const w = 25

if(q > 5 && w > 20) {
    console.log("Números mais altos");
} else {
    console.log("Os números não são mais altos")
}

// Else if
if(1 > 2) {
    console.log("Teste")
} else if(2 > 3) {
    console.log("teste 2")
} else if(5 > 1) {
    console.log("teste 3")
}

const userName = "Regiane"
const userAge = 28

if(userName === "Lais") {
    console.log("Bem vinda");
} else if(userName === "Regiane" && userAge === 28) {
    console.log("Olá, Regiane, você tem 28 anos");
} else {
    console.log("Nenhuma condição acima");
}