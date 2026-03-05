//Criar um programa quese um numero é positivo ou negativo
if (-5 > 0) {
    console.log("O número é positivo.");
} else if (-5 < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}
//Criar um programa se um ano é bissexto
let ano = 2024;

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(ano + " é um ano bissexto.");
} else {
    console.log(ano + " não é um ano bissexto.");
}
//Criar um programa que mostre uma senha e a mensagem acesso permitido
let senha = "sixseven67";
if (senha === "sixseven67") {
    console.log("Acesso permitido.");
} else {    console.log("Acesso negado.");
}
//Criar um programa que mostre um desconto de 5% para compras maiores que R$100
let valorCompra = 120;
if (valorCompra > 100) {
    let desconto = valorCompra * 0.05;
    let valorFinal = valorCompra - desconto;
    Console.log("Valor final com desconto: R$" + valorFinal);
} else {
    Console.log("Valor da compra: R$" + valorCompra);
}
//Criar um programa que classifique uma pessoa como criança, adolescente, ou adulto de acordo com a idade
let idade = 25;
if (idade < 12) {
    Console.log("Criança");
} else if (idade >= 12 && idade < 18) {
    Console.log("Adolescente");
} else {
    Console.log("Adulto");
}
//Criar um programa que mostre um triamgulo de acordo com seus lados: (Equilátero, Isósceles ou Escaleno)
let ladoA = 5;
let ladoB = 5;
let ladoC = 5;
if (ladoA === ladoB && ladoB === ladoC) {
    Console.log("Triângulo Equilátero");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    Console.log("Triângulo Isósceles");
} else {
    Console.log("Triângulo Escaleno");
}
//Criar um programa que mostre conceitos  A B C ou  D e de acordo com as notas: >9.5 A; Entre 9.4 e 8.5 B; Entre 8.4 e 7.0 C; <6.9 D
let nota = 8.7;If (nota > 9.5); {
    Console.log("Conceito A");
} if (nota >= 8.5 && nota <= 9.4) {
    Console.log("Conceito B");
} else if (nota >= 7.0 && nota <= 8.4) {
    Console.log("Conceito C");
} else {
    Console.log("Conceito D");
}
//Criar um programa para verificar se o numero 12 é divisivel por 2 e 3
let numero = 12;
if (-5 % 2 === 0 && -5 % 3 === 0) {
    Console.log("O número 12 é divisível por 2 e 3");
} else {
    Console.log("O número 12 não é divisível por 2 e 3");
}
//Criar um programa para mostrar um desconto de 12% para produtos acima de 80R$
let valorProduto = 90;
if (valorProduto > 80) {
    let desconto = valorProduto * 0.12;
    let valorFinal = valorProduto - desconto;
    Console.log("Valor final com desconto: R$" + valorFinal);
} else {
    Console.log("Valor do produto: R$" + valorProduto);
}
//Criar um programa que mostre os numeros de 1 a 10 usando laço de repetição
for (let i = 1; i <= 10; i++) {
    Console.log(i);
}
//Criar um programa para mostrar apenas os numeros pares entre 1 e 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        Console.log(i);
    }
}
//Criar um programa para mostrar apenas os numeros impares de 1 a 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        Console.log(i);
    }
}
//Criar um programa para mostrar a tabuada do 5
let numeroTabuada = 5;
for (let i = 1; i <= 10; i++) {
    Console.log(numeroTabuada + " x " + i + " = " + (numeroTabuada * i));
}
//Criar um programa para mnostrar os numeros de 1 a 7 usando WHILE
let contador = 1;
while (contador <= 7) {
    Console.log(contador);
    contador++;
}
//Criar um programa para mostrar a tabuada do 3 usando WHILE
let numeroTabuada3 = 3;
let contadorTabuada3 = 1;
while (contadorTabuada3 <= 10) {
    Console.log(numeroTabuada3 + " x " + contadorTabuada3 + " = " + (numeroTabuada3 * contadorTabuada3));
    contadorTabuada3++;
}
//Criar um programa para mostrar o fatorial de 5
let numeroFatorial = 5;let fatorial = 1;
for (let i = 1; i <= numeroFatorial; i++) {
    fatorial *= i;
}
Console.log("O fatorial de " + numeroFatorial + " é: " + fatorial);
//Criar um prpgrama para saber se o nuemro 7 é fatorial
let numeroFatorial7 = 7;let fatorial7 = 1;
for (let i = 1; i <= numeroFatorial7; i++) {
    fatorial7 *= i;
}
//Criar um programa para calcular a potência de 2^3 usando laço
let base = 2;let expoente = 3;let resultado = 1;
for (let i = 1; i <= expoente; i++) {
    resultado *= base;
}
Console.log("O resultado de " + base + " elevado a " + expoente + " é: " + resultado);
