// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Operaçòes aritimeticas
console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);

console.log(5 + (4 * 2));

// 3 - Especial numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd");
console.log(NaN);

// 4 - Strings
console.log(typeof "Um texto");
console.log(typeof `Um texto`);
console.log(typeof 'Um texto');

// 5 - Símbolos especiais em strings
console.log("Testando a \n quebra de linha");
console.log("Espaçamentos \t de tab")

// 6 - Concatenação
console.log("Oi, " + "tudo " + "bem");
console.log(`Testando ` + `com ` + `crases`);

// 7 - Interpolação / template strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podeos executar qualquer coisa aqui ${console.log(`teste`)}`);

// 8 - Boolean
console.log(true);
console.log(false);
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof false);

// 9 - Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10 = Identicos
console.log(9 == "9");
console.log(9 === "9")
console.log(9 != "9");
console.log(9 !== "9");

// 11 - Operadores lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "Matheus" === 1);
console.log(5 > 2 || "Matheus" === 1);
console.log(5 < 2 || 5 > 100);
console.log(!true);
console.log(!5 > 2);

// 12 - Empty values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);

// 13 - Mudança de tipos
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);
