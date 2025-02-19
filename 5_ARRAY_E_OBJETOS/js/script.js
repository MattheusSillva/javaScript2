// 1 - arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof(lista));

const itens = ["Matheus", true, 2, 4.12, []];

console.log(itens);

// 2 - mais sobre arrays

const arr = ["a", "b", "c", "d", "d"]

console.log(arr[2])

console.log(arr[83])

// 2 - propriedades
const numbers = [5, 3, 4];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Matheus";

console.log(myName.length);

// 4 - Métodos
const othersNumbers = [1, 2, 3];

const allNumbers = numbers.concat(othersNumbers);

console.log(allNumbers);

const text = "Algum texto";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5 Objetos

const person = {
    name: "Matheus",
    age: 31,
    job: "Programador"
}

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6 - Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "Vw",
    model: "Tinguan",
    km: 20000
}

console.log(car);

car.portas = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - Mais sobre objetos
const obj = {
    a: "Teste",
    b: true
}

console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign(obj2, obj);

console.log(obj2);

console.log(obj);

// 8 - Conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(obj));

// 9 - Mutaçoes de objetos
const a = {
    name: "Matheus"
}

const b = a;

console.log(a);
console.log(b);
console.log(a === b);

a.age = 31;
console.log(b)

delete b.age;

console.log(a);

// 10 - Loop em array
const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++){
    console.log(`Listando o usuário ${users[i]}`)
}

// 11 - push e pop
const array = ["a", "b", "c"];

array.push("d");

console.log(array);
console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);
console.log(array);

array.push("z", "x", "y");

console.log(array);

// 12 - shift e unshift
const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("p", "q", "r")
letters.unshift("z");

console.log(letters);

// 13 - indexOf e lastIndexOf

const myElements = ["Morango", "Maca", "Abacate", "pera", "Abacate"];

console.log(myElements.indexOf("Maca"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);

console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));
console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// 14 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// 15 - Foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`)
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"}
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`)
})

// 16 - Includes
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW!");
}

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// 18 = trim
const trimTest = "   Testando \n  "
console.log(trimTest);
console.log(trimTest.trim());
console.log(trimTest.length)
console.log(trimTest.trim().length);

// 19 - padstart
const testPadStart = "1";
const newNumber = testPadStart.padStart(4, "0");
console.log(testPadStart);
console.log(newNumber);

const padEnd = newNumber.padEnd(10, "0");
console.log(padEnd);

// 20 - split
const frase = "O rato roeu a roupa do rei de Roma";
const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

// 21 - Join
const fraseDenovo = arrayDaFrase.join(" ");
console.log(fraseDenovo);

const intensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar ${intensParaComprar.join(", ")}.`
console.log(fraseDeCompra);

// 22 - Repeat
const palavra = "Testando "
console.log(palavra.repeat(5))

// 23 - Rest Operator

const somaIfinita = (...args) => {
    let total = 0;

    for (let i = 0; i<args.length; i++){
        total += args[i]
    }

    return total;
}

console.log(somaIfinita(1, 2, 3));

console.log(somaIfinita(1, 20, 34, 3424, 128812, 12723, 12, 23, 54, 12));

// 24 - for of
const somaIfinita2 = (...args) => {
    let total = 0;
    
    for (num of args) {
        total += num
    }

    return total;
}

console.log(somaIfinita(1, 2, 4))

// 25 - Destructuring em objetos
const userDetails = {
    firstName: "Matheus",
    lastName: "Silva",
    job: "Programador"
}

const {firstName, lastName, job} = userDetails;

console.log(firstName, lastName, job);

// renomear as variveis
const {firstName: primeiroNome} = userDetails;
console.log(primeiroNome);

// 26 - Destructuring com arrays
const myList = ["Aviao", "Submarino", "Carro", "Trator"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON
const myJson = '{"name": "Matheus", "age": 31, "skills": ["PHP", "javaScript", "Python"]}'
console.log(myJson)
console.log(typeof myJson)

// 28 - JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJson);

console.log(myObject);
console.log(myObject.name)
console.log(typeof myObject)

// json invalido
const badJson = '{"name": Matheus, "age": 31}'
// const myBadJson = JSON.parse(badJson);

// console.log(myBadJson);

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);
console.log(typeof myNewJson);