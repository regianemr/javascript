// Movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);


// // Encontrando elemento por tag - getElementsByTagName
const listItens = document.getElementsByTagName("li")

console.log(listItens)

// // Selecionando elementos por Id
const title = document.getElementById("title")

console.log(title);

// // Selecionando elementos por classe
const products = document.getElementsByClassName("product");

console.log(products);

// // Selecionando elementos por CSS (querySelectorAll)
const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// Alterando o HTML
// insertBefore
const p = document.createElement("p")

const header = title.parentElement;  // parentElement(elemento pai)

header.insertBefore(p, title) // parágrafo antes do título

const p2 = document.createElement("p")

const main = mainContainer.parentElement;

main.insertBefore(p, mainContainer)


// appendChild (adiciona um elemento dentro do outro)
const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")

navLinks.appendChild(li)




// replaceChild (trocar um elemento)
const h2 = document.createElement("h2")

h2.textContent = "Meu novo título"  // text.Content = conseguir colocar texto em tags

header.replaceChild(h2, title)

// Criando nós de texto
const myText = document.createTextNode("Agora vamos colocar mais um título")

console.log(myText)

const h3 = document.createElement("h3")

h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3)

// Trabalhando com atributos
const firstLink = navLinks.querySelector("a")

console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank") // abrindo em nova aba

// Altura e largura dos elementos - offsetWidth/offsetHeight e clientWidth/clientHeight para desconsiderar as bordas
const footer = document.querySelector("footer")

console.log(footer.offsetHeight)
console.log(footer.offsetWidth)

console.log(footer.clientHeight)
console.log(footer.clientWidth)

// Posição do elemento - getBoundingClientRect - consegue acessar todas as propriedades de posição de um elemento (x, y, altura, largura...)
const product1 = products[0]
console.log(product1.getBoundingClientRect())

// Estilos com JS
