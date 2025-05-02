/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require('prompt-sync')();

let valor1 = Number(prompt("Informe o primeiro valor:"));
let valor2 = Number(prompt("Informe o segundo valor:"));

if(isNaN(valor1) || isNaN(valor2)){
    console.log("ERRO: Valor 1 ou Valor 2, inválido(s)")
}else if(valor1 === valor2){
    console.log("Valor 1 e valor 2 são iguais")
}else{
    if(valor1 < valor2){
        console.log(`Valores em ordem crescente: ${valor1} < ${valor2}`)
    }else{
        console.log(`Valores em ordem crescente: ${valor2} < ${valor1}`)
    }
}