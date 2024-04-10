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
// const loggedIn = false

// if(loggedIn) {
//     console.log("Está autenticado");
// } else {
//     console.log("Não está autenticado");
// }

// const q = 10
// const w = 25

// if(q > 5 && w > 20) {
//     console.log("Números mais altos");
// } else {
//     console.log("Os números não são mais altos")
// }

// // Else if
// if(1 > 2) {
//     console.log("Teste")
// } else if(2 > 3) {
//     console.log("teste 2")
// } else if(5 > 1) {
//     console.log("teste 3")
// }

// const userName = "Regiane"
// const userAge = 28

// if(userName === "Lais") {
//     console.log("Bem vinda");
// } else if(userName === "Regiane" && userAge === 28) {
//     console.log("Olá, Regiane, você tem 28 anos");
// } else {
//     console.log("Nenhuma condição acima");
// } 

// Estruturas de repetição
// let p = 0

// while(p < 5) {
//     console.log(`Repetindo ${p}`);
//     p = p + 1;
// }

// // loop infinito
// let x = 10

// while(x > 5) {
//     console.log(`Imprimindo ${x}`);
// }

// do while
// let o = 10

// do {
//     console.log(`valor de o: ${o}`);
//     o--;
// } while (o > 1);

// for
// for(let t = 0; t < 10; t++) {
//     console.log("Repetindo algo...");
// }

// let r = 10;

// for (r; r > 0; r = r - 1) {
//     console.log(`O r está diminuindo: ${r}`);
// }

// identação
// for(let u = 0; u < 10; u++) {
//     if (u * 2 > 10) {
//         console.log(`Maior que 10! ${u}`);
//     } else {
//         if (u / 2 === 0) {
//             console.log(`deu 0`);
//         }
//     }
// }

// break
// for(let g = 20; g > 10; g--) {
//     console.log(`O valor de g é: ${g}`);

//     if (g === 15) {
//         console.log(`O g é 15!`);
//         break;
//     }
// }

// continue
// for (let s = 1; s < 11; s = s + 1) {
//     // operador resto = %
//     if (s % 2 === 0) {
//         console.log(`O número ${s} é par`);
//         continue;
//     }

//     console.log(s);
// }

// switch
const job = "Engenheiro";

switch (job) {
    case "Programador":
        console.log("Você é um programador!");
        break;
    case "Advogado":
        console.log("Você é um advogado!")
        break;
    case "Engenheiro":
        console.log("Você é um engenheiro!")
        break;
    default:
        console.log("Profissão não encontrada")
}

// switch errado (sem o break)
const l = 100;

switch(l) {
    case 200:
        console.log("L é 200");
    case 100:
        console.log("L é 100");
    case 10:
        console.log("L é 10");
    default:
        console.log("L não encontrado");
}

