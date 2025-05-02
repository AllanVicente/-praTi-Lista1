/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

const prompt = require('prompt-sync')();

let nota = Number(prompt("Informar uma nota de 0 a 10: "));

if(nota<4){
    console.log("Recuperação!")
}else if(nota<7){
    console.log("Reprovado!")
}else if(nota>=7){
    console.log("Aprovado!")
}else{
    console.log("ERRO: Valor inválido!")
}