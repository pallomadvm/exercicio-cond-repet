// 1. Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são 
// múltiplos de três e que se encontram no conjunto dos números de 1 até 500.

let soma_i = 0;

for (let i = 1; i <= 500; i++) {
    if (i % 2 !== 0 && i % 3 === 0) {
        soma += i;
    }
}
console.log("A soma de todos os números ímpares múltiplos de 3 entre 1 e 500 é:", soma);

// 2.Desenvolver um algoritmo que leia a altura de 15 pessoas. 
// Este programa deverá calcular e mostrar :
// a. A menor altura do grupo;
// b. A maior altura do grupo;

// Array com as alturas das 15 pessoas
let alturas = [1.65, 1.72, 1.80, 1.55, 1.90, 1.75, 1.68, 1.60, 1.85, 1.78, 1.62, 1.70, 1.66, 1.74, 1.58];

//a
let menorAltura = Math.min(...alturas);
console.log("A menor altura do grupo é:", menorAltura, "m");

//b
let maiorAltura = Math.max(...alturas);
console.log("A maior altura do grupo é:", maiorAltura, "m");

//3.Desenvolver um algoritmo que leia um número não determinado de valores 
// e calcule e escreva a média aritmética dos valores lidos, 
// a quantidade de valores positivos, a quantidade de valores negativos e 
// o percentual de valores negativos e positivos.

//número não determinado de valores => usaremos um loop while
//ler o numero, calcular e escrever a media aritmetica (I)
//numero de valores positivos, numero de valores negativos(II)
//percentual de valores negativos e positivos (III)

//(I)
let soma = 0; //soma dos valores
let contador = 0;

while (true) {
    let numero = parseFloat(prompt("Digite um número (ou 0 para sair): "));
    if (numero === 0) {
        break; // sai do loop se o número for 0
    }
    soma += numero; // soma os números
    contador++; // conta os números
}

if (contador > 0) {
    let mediaAritmetica = soma / contador; 
    console.log("A média aritmética dos valores lidos é:", mediaAritmetica);
}

// (II)

let positivos = 0;
let negativos = 0;

if (numero > 0) {
    positivos++;
    console.log("Quantidade de valores positivos:", positivos);
} else if (numero < 0) {
    negativos++;
    console.log("Quantidade de valores negativos:", negativos);
}

// (III)
if (contador > 0) {
    let mediaAritmetica = soma / contador;
    let percentualPositivos = (positivos / contador) * 100;
    let percentualNegativos = (negativos / contador) * 100;
}

//4. Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles
// estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
// terminar quando for lido um número negativo.
let contador01 = 0; // [0-25]
let contador02 = 0; // [26-50]
let contador03 = 0; // [51-75]
let contador04 = 0; // [76-100]
let numero = 0; // variável para armazenar o número lido

while (true) {
    let numero = parseFloat(prompt("Digite um número: "));
    if (numero < 0) {
        break; // sai do loop se o número for negativo
    }
}

//contador de cada intervalo

if (numero === 0 && numero <= 25) {
    contador01++;
    console.log("Quantidade de números no intervalo [0-25]:", contador01);
} else if (numero >= 26 && numero <= 50) {
    contador02++;
    console.log("Quantidade de números no intervalo [26-50]:", contador02);
}
else if (numero >= 51 && numero <= 75) {
    contador03++;
    console.log("Quantidade de números no intervalo [51-75]:", contador03);
}
else if (numero >= 76 && numero <= 100) {
    contador04++;
    console.log("Quantidade de números no intervalo [76-100]:", contador04);
}

//5. Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos.
// Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos
// números lidos. O número que encerrará a leitura será zero.

//não determinada de numeros positivos => usaremos um loop while numero > 0
// break = 0 => encerra a leitura | quantidade de pares e impares => contador | 
// media dos pares => soma dos pares / contador | media geral => soma dos numeros / contador 
//numero par => numeroPositivos % 2 === 0 
//numero impar => numeroPositivos % 2 !== 0

let numerosPositivos = 0;
contadorPositivos = 0; // contador total de números lidos
contadorPares = 0;
contadorImpares = 0;
somaPares = 0;
somaTotal = 0; // soma total dos números lidos
mediaPares = somasPares / contadorPares;
mediaGeral = somaTotal / contadorPares;

while (true) {
    let numerosPositivos = parseFloat(prompt("Digite um número positivo (ou um número negativo para sair): "));
    if (numerosPositivos < 0) {
    break; // sai do loop se o número for negativo
}
    somaTotal += numerosPositivos; // soma total dos números lidos
    contadorPositivos++;
}

if (numerosPositivos % 2 === 0) {
    contadorPares++;
    somaPares += numerosPositivos; // soma dos números pares
    console.log("Quantidade de números pares:", contadorPares);
    console.log("Média dos números pares:", mediaPares);
}
else if (numerosPositivos % 2 !== 0) {
    contadorImpares++;
    console.log("Quantidade de números ímpares:", contadorImpares);
        console.log("Média geral dos números lidos:", mediaGeral);
}

//6. Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.

let numerosImpares = 0;

for (numerosImpares >= 100; numerosImpares <= 200; numerosImpares++) {
    if (numerosImpares % 2 !== 0) {
        console.log(numerosImpares);
    }
}

//7.Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de
// N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N.

let N = parseInt(prompt("Digite um número de 1 a 10: "));
if (N < 1 || N > 10) {
    console.log("Número inválido. Digite um número de 1 a 10.");
}
else {
    for (let i = 0; i <= 10; i++) {
        let resultado = i * N;
        console.log(i + " x " + N + " = " + resultado);
    }
}

//8.Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
// P.A. contendo 10 valores.
//Fórmula da PA:
An = A + (n - 1) * R
// Termo da PA = An
// A = valor inicial
// R = razão
// n = posição do termo na sequência (1, 2, 3, ...)

// Leitura dos valores de A (valor inicial) e R (razão)
let A = parseFloat(prompt("Digite o valor inicial (A): "));
let R = parseFloat(prompt("Digite a razão (R): "));

// Geração e exibição dos 10 primeiros termos da P.A.
console.log("Os 10 primeiros termos da P.A. são:");
for (let n = 1; n <= 10; n++) {
    let An = A + (n - 1) * R; // Fórmula do termo geral da P.A.
    console.log(`Termo ${n}: ${An}`);
}


//9. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
// P.G. contendo 10 valores.
//Fórmula da PG:
Anumber = A * R^(number - 1)
// Termo da PG = Anumber
// A = valor inicial
// R = razão
// number = posição do termo na sequência (1, 2, 3, ...)
// Geração e exibição dos 10 primeiros termos da P.G.
console.log("Os 10 primeiros termos da P.G. são:");
for (let number = 1; number <= 10; number++) {
    let Anumber = A * Math.pow(R, n - 1); // Fórmula do termo geral da P.G.
    console.log(`Termo ${n}: ${Anumber}`);
}

//10. Escreva um algoritmo que leia um valor inicial A 
// e imprima a seqüência de valores do cálculo de
// A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120
//Afatorial tem que ser um número inteiro = parseInt

// Leitura do valor de Afatorial
let Afatorial = parseInt(prompt("Digite um número inteiro para calcular o fatorial (A): "));

// Verifica se o número é válido
if (Afatorial < 0) {
    console.log("O fatorial não é definido para números negativos.");
} else {
    let fatorial = 1; // Variável para armazenar o resultado do fatorial (1 = elemento neutro da multiplicação e o fatorial de 0 é 1)
    let sequencia = ""; // Variável para armazenar a sequência do cálculo => string vazia

    // Cálculo do fatorial
    for (let i = Afatorial; i >= 1; i--) {
        fatorial *= i; // Multiplica o número atual
        sequencia += (i === 1) ? `${i}` : `${i} × `; // Monta a sequência
    }

    // Exibe o resultado
    console.log(`${Afatorial}! = ${sequencia} = ${fatorial}`);
}