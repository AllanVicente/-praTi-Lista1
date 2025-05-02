/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for. */

const prompt = require('prompt-sync')();

let tabuada;

do {
    tabuada = Number(prompt("Informe o número da tabuada que deseja sendo de 0 a 10: "))
    if (isNaN(tabuada) || tabuada < 0 || tabuada > 10 ) {
        console.log("Valor inválido! Digite um número entre 0 e 10.");
    }
} while (isNaN(tabuada) || tabuada < 0 || tabuada > 10);


for(let i=1; i<11; i++){
    console.log(`${tabuada} x ${i} = ${i*tabuada}`);
}

