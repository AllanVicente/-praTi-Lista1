//Exercício: Verificar se um número é Par ou ìmpar

const prompt = require('prompt-sync')();

let num = Number(prompt("Informe um número para verificar se é ímpar ou par: "));

//condição ? valor_se_verdadeiro : valor_se_falso;
let tipo = ( num % 2 === 0) ? "PAR" : "ÍMPAR";
console.log(`O número é ${tipo}`)