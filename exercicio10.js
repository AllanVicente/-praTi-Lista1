/* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

const prompt = require("prompt-sync")();

let numInt = Number(prompt("Informe um número inteiro que será repetido 10x na tela: "));


if(Number.isInteger(numInt)){
    for(let i=0; i<10 ; i++){
        console.log(`${i+1}ª repetição: ${numInt}`);
    }
}else{
    console.log("ERRO: O valor informado não é um número inteiro.");
}
