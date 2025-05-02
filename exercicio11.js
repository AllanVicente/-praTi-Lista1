/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

const prompt = require('prompt-sync')();

let numeros = [];
let soma=0;

for (let i = 0; i < 5; i++) {
    let valor;
    do {
        valor = Number(prompt(`Informe o ${i + 1}º valor: `));
        if (isNaN(valor)) {
            console.log("Valor inválido! Por favor, digite um número.");
        }
    } while (isNaN(valor));

    numeros[i] = valor;
    soma += valor;
}

console.table(numeros)
console.log(`A soma dos valores informados foi de ${soma}.`)