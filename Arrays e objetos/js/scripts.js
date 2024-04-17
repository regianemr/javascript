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
const car = {
    motor: 2.0,
    marca: "VW",
    modelo: "Tiguana",
    km: 20000,
};

console.log(car);

car.portas = 4;

console.log(car);

delete car.km;

console.log(car);
