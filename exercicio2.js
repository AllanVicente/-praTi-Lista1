/*Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. */

const prompt = require('prompt-sync')();

let idade = Number(prompt("Informe a idade de uma pessoa para a classificação entre: criança, adulto e idoso: "));

if(idade<18){
    console.log("Criança")
}else if(idade<=18){
    console.log("Adulto")
}else if(idade>=60){
    console.log("Idoso")
}else{
    console.log("ERRO: Valor informado não corresponde as opções válidas(criança, adulto e idoso)")
}

