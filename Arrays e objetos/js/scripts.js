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
const users = ["Regi", "Vera", "Gleison", "Raquel"]

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`)
}

// Métodos de array: push(adiciona um item no fim da lista) e pop(adiciona no inicio da lista)
const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop()

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);
console.log(array);