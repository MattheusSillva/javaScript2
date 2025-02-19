// 1 - Criando funções
function minhaFuncao(){
    console.log("Testando");
}

minhaFuncao();
minhaFuncao();

// -------------------------------------------

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável")
}

minhaFuncaoEmVariavel();

// -------------------------------------------

function funcaoComParamentro(txt){
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParamentro("Imprimindo alguma coisa")
funcaoComParamentro("Outra função")

// 2 - return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2){
    return n1 + n2;
}

const resultado = soma(a, b)

console.log(resultado);

console.log(soma(c, d))

// 3 - Escopo da função
let y = 10;

function testandoEscopo(){
    let y = 20;
    console.log(`y dentro da funcao é ${y}`)
}

console.log(`y fora da funcao é ${y}`)
testandoEscopo()

// 4 - Escopo aninhado (Nested Scopes)
let m = 10;

function escopoAninhado(){
    let m = 20;

    if (true){
        let m = 30;

        if (true){
            let m = 40;
            console.log(m);
        }

        console.log(m)
    }

    console.log(m)
}

escopoAninhado();
console.log(m)

// 5 - Arrow function
const testArrow = () => {
    console.log("Esta é uma arrow function");
}

testArrow();

const parImpar = (n) => {
    if (n % 2 === 0){
        console.log("Par");
        return 
    } 

    console.log("Impar")
}

parImpar(5);
parImpar(10);

// 6 - Mais sobre arrow functions
const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(5));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(12));

const helloworld = () => console.log("Hello World")

helloworld()

// 7 - Parametro opcional
const multiplication = function(m, n) {
    if (n === undefined) {
        return m * 2
    } else {
        return m * n
    }
}

console.log(multiplication(2, 7))

const greeting = (name) => {
    if (!name){
        console.log("Olá")
        return
    }

    console.log(`Olá ${name}`)
}

greeting();
greeting("Matheus")

// 8 - Valor default
const customGreeeting = (name, greet = "olá") => {
    return `${greet}, ${name}`
}

console.log(customGreeeting("Matheus"))
console.log(customGreeeting("João", "Bom-dia"))

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i<repeat; i++){
        console.log(text)
    }
}

repeatText("Testando")
repeatText("Agora repete 5 vezes", 5)

// 9 - Closure
function someFunction(){
    let txt = "Alguma coisa"

    function display(){
        console.log(txt)
    }

    display();
}

someFunction()

// 10 - Mais sobre closure

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m
    }
}

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5))
console.log(c2(10))

// 11 - recursion
const untilTen = (n, m) => {
    if (n < 10){
        console.log("A funcao parou de executar")
    } else {
        const x = n - m

        console.log(x)

        untilTen(x, m)
    }
}

untilTen(100, 7)

// infinite recursion
function run(){
    console.log("Executando...")
    run()
}
// run()

function factorial(x){
    if (x === 0){
        return 1
    } else {
        return x * factorial(x -1)
    }
}

console.log((factorial(5)))