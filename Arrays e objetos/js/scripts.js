// // Arrays
// const lista = [1, 2, 3];

// console.log(lista);
// console.log(typeof lista);

// // mais sobre arrays
// const arr = ["a", "b", "c", "d"];
// console.log(arr[0]);


// // propriedades
// const numbers = [5, 3, 9]

// console.log(numbers.length); //quantidade de elementos em uma lista
// console.log(numbers.length);
// console.log(numbers["length"]);

// const myName = "Regiane";

// console.log(myName.length);

// // métodos
// const otherNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "algum texto";

// console.log(text.toUpperCase());

// console.log(text.indexOf("g"));

// // Objetos
// const person = {
//     name: "Regiane",
//     age: 28,
//     job: "programador"
// }

// console.log(person.name);
// console.log(person.age);
// console.log(person.job);
// console.log(person.name.length);

// Criando e deletando propriedades
// const car = {
//     motor: 2.0,
//     marca: "VW",
//     modelo: "Tiguana",
//     km: 20000,
// };

// console.log(car);

// car.portas = 4;

// console.log(car);

// delete car.km;

// console.log(car);


// // Mais sobre objetos
// const obj = {
//     a: "teste",
//     b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//     c: []
// }

// Object.assign(obj2, obj);

// console.log(obj2)

// // conhecendo melhor os objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));

// console.log(Object.entries(car));

// // Mutação
// const a = {
//     name: "Regiane"
// };

// const b = a

// console.log(a);
// console.log(b);

// console.log(a === b);

// a.age = 28;
// console.log(a);
// console.log(b);

// delete b.age
// console.log(a);
// console.log(b);

// Loops em arrays (listas)
// const users = ["Regi", "Vera", "Gleison", "Raquel"]

// for(let i = 0; i < users.length; i++) {
//     console.log(`Listando o usuário: ${users[i]}`)
// }

// // Métodos de array: push(adiciona um item no fim da lista) e pop(remove itens no fim da lista)
// const array = ["a", "b", "c"];

// array.push("d");

// console.log(array);

// console.log(array.length);

// array.pop()

// console.log(array);

// const itemRemovido = array.pop();

// console.log(itemRemovido);
// console.log(array);

// // Métodos array: shift e unshift
// const letras = ["a", "b", "c"];
// const letra = letras.shift();

// console.log(letra);
// console.log(letras);

// letras.unshift("p", "q", "t");
// letras.unshift("z");

// console.log(letras);

// // indexOf-encontra índice de um elemento lastindexOf-usado quando há repetições de elementos e precisamos do índice da última ocorrência
// const myElements = ["Uva", "Banana", "Melancia", "Kiwi", "Banana"];

// console.log(myElements.indexOf("Melancia"));
// console.log(myElements.indexOf("Banana"));

// console.log(myElements[1]);
// console.log(myElements[(myElements.indexOf("Banana"))]);

// console.log(myElements.lastIndexOf("Banana"))

// Slice

// const testeSlice = ["a", "b", "c", "d", "e", "f"]

// const subArray = testeSlice.slice(2, 4);

// console.log(subArray);
// console.log(testeSlice);

// const subArray2 = testeSlice.slice(2, 4 + 1);
// console.log(subArray2);

// //slice a partir do índice "2"
// const subArray3 = testeSlice.slice(2);
// console.log(subArray3)

// Método forEach - como for e while
// const nums = [1, 2, 3, 4, 5];

// nums.forEach((numero) => {
//     console.log(`O número é ${numero}`);
// });

// const posts = [
//     {title: "Primeiro post", category: "PHP"},
//     {title: "Segundo post", category: "JavaScript"},
//     {title: "Terceiro post", category: "Python"},
// ];

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
// });

// // Includes - verifica se na lista tem um elemento (true, false)
// const brands = ["BMW", "Fiat", "VW"];

// console.log(brands.includes("Fiat"))
// console.log(brands.includes("KIA"))

// if (brands.includes("BMW")) {
//     console.log(`Há carros da marca BMW`)
// }

// // Reverse - invete os elementos da lista
// const reverseTest = [1, 2, 3, 4, 5];

// reverseTest.reverse();
// console.log(reverseTest);

// // trim - retira os espaços em branco e caracteres invisíveis sem modificar a string original
// const trimTeste = "  testando \n   ";
// console.log(trimTeste);

// console.log(trimTeste.trim());

// // padStart - insere um texto no começo da string
// const testepadStart = "1";

// const newNumber = testepadStart.padStart(4, "0"); //4 digitos
// console.log(testepadStart);
// console.log(newNumber);

// const testpadEnd = newNumber.padEnd(10, "0"); // 10 digitos no final
// console.log(testpadEnd);


// Split - divide uma string em um array(lista)
// const frase = "O rato roeu a roupa do rei de Roma";

// const arrayDaFrase = frase.split(" ");

// console.log(arrayDaFrase);

// // join - une uma lista em um a string
// const fraseDeNovo = arrayDaFrase.join(" ");
// console.log(frase);

// const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

// const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`
// console.log(fraseDeCompra);

// repeat - repete um texto n vezes;
const palavra = "Testando ";
console.log(palavra.repeat(5));

// Rest Operator/ Rest Parameters ( ... )
// const somaInfinita = (...args) => {
//     let total = 0

//     for(let i = 0; i < args.length; i++) {
//         total += args[i]

//     }

//     return total
// }

// console.log(somaInfinita(1, 2, 3));
// console.log(somaInfinita(155, 5452, 352, 898, 555));

// for...of
// const somaInfinita2 = (...args) => {

//     let total = 0

//     for(num of args) {
//         total += num
//     }

//     return total;
// };

// console.log(somaInfinita2(1, 2, 4));
// console.log(somaInfinita2(15, 25, 84));


// // Destructuring em objetos
// const userDetails = {
//     fistName: "Regiane",
//     lastName: "Melo",
//     job: "Programador"
// }

// const {fistName, lastName, job} = userDetails

// console.log(fistName, lastName, job);

// // renomear variáveis
// const {fistName: primeiroNome} = userDetails;

// console.log(fistName);


// // Destructuring em arrays (lista)
// const myList = ["avião", "carro", "moto", "bicicleta"]

// const [veioculoA, veiculoB, veiculoC] = myList;

// console.log(veioculoA, veiculoB, veiculoC);


// // JSON - exemplo
// const myJson = '{"name": "Regiane", "age": 28}'

// // JSON para objeto e objeto para JSON
// const myObjeto = JSON.parse(myJson);

// console.log(myObjeto);

// console.log(myObjeto.name);

// console.log(typeof myObjeto);

// // json invalido
// const badJson = '{"name": Regiane, "age": 28}';
// //const myBadObjeto = JSON.parse(badJson);

