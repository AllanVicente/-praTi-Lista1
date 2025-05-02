/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require('prompt-sync')();

let numMaca = Number(prompt("Informe o número de maçãs compradas: "));
let valorMaca, valorTotalCompra;

if(isNaN(numMaca)){
    console.log("Valor inválido!")
}else{
    if(numMaca < 12){
        valorMaca = 0.30; 
    }else{
        valorMaca = 0.25;
    }

    valorTotalCompra = numMaca * valorMaca;
    console.log(`A compra ficou em R$${valorTotalCompra.toFixed(2)}, onde cada maçã custou R$${valorMaca.toFixed(2)}.`)
}

