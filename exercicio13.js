/*Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

const prompt = require('prompt-sync')();

let numeros = [];
let i = 0;
let valor, soma = 0;

do {
    valor = Number(prompt("Informe um valor decimal (digite 0 para encerrar):"));

    if (isNaN(valor)) {
        console.log("Valor inválido! Digite um número decimal.");
    } else if (valor !== 0 && valor % 1 !== 0) {
        numeros[i] = valor;
        i++;
    } else if (valor !== 0) {
        console.log("Valor inválido! Digite um número decimal.");
    }

} while (valor !== 0);

for (let j = 0; j < numeros.length; j++) {
    soma += numeros[j];
}

let media = soma / numeros.length;
console.log(`A média dos valores informados é: ${media.toFixed(2)}`);

