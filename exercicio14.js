/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

const prompt = require('prompt-sync')();

let num = Number(prompt("Informe um número para ser fatorado: "));
let fatorial = 1;

if (isNaN(num) || !Number.isInteger(num) || num < 0) {
    console.log("Entrada inválida! Digite um número inteiro não negativo.");
} else {

    for(let i = num; i > 1; i--){
        fatorial *= i;
    }

    console.log(`O fatorial de ${num} é ${fatorial}.`);
}