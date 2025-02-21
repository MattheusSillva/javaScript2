// 1 - Movendo-se pelo DOM
console.log(document.body);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - Selecionando por tags
const listItens = document.getElementsByTagName("li")
console.log(listItens);

// 3 - Selecionando por id
const title = document.getElementById("title");
console.log(title);

// 4 - Selecionando por classe
const products = document.getElementsByClassName("product");
console.log(products);

// 5 - Selecionando por css
const productQuery = document.querySelectorAll(".product");
console.log(productQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// 6 - insertBefore
const p = document.createElement("p");
const header = title.parentElement;

header.insertBefore(p, title);

// 7 - appendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li");

navLinks.appendChild(li);

// 8 - replacechild
const h2 = document.createElement("h2");

h2.textContent = "Meu novo título";

header.replaceChild(h2, title);

// 9 - createTextNode
const myText = document.createTextNode("Agora vamos colocar mais um título");

const h3 = document.createElement("h3");
h3.appendChild(myText);

mainContainer.appendChild(h3);

// 10 - Trabalhando com atributos
const firstLink = navLinks.querySelector("a");

firstLink.setAttribute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"));
firstLink.setAttribute("target", "_blank");

// 11 - Altura e largura
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12 - Posição do elemento
const product1 = products[0];
console.log(product1.getBoundingClientRect());

// 13 - CSS com JS
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

// 14 - Alterando estilos de vários elementos
for(const li of listItens){
    li.style.backgroundColor = "red";
}