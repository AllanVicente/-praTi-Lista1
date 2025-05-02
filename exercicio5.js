/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

const prompt = require('prompt-sync')();

let peso = Number(prompt("Informe o peso em kg: "));
let altura = Number(prompt("Informe a altura em metros: "));
let IMC, categoria;

IMC = peso / altura ** 2;

if(isNaN(peso) || isNaN(altura)){
    console.log("Peso ou altura inválidos!")
}else{
    if(IMC>39.9){
        categoria = "Obesidade grau III";
    }else if(IMC>34.9){
        categoria = "Obesidade grau II";
    }else if(IMC>29.9){
        categoria = "Obesidade grau I";
    }else if(IMC>24.9){
        categoria = "Sobre peso";
    }else if(IMC>=18.5){
        categoria = "Peso normal";
    }else{
        categoria = "Abaixo do peso";
    }

    console.log(`Para a altura e peso informados, obteve-se o IMC de ${IMC.toFixed(2)} que esta na categoria: ${categoria}`);
}
