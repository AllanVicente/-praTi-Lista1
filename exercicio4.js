/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')();

let opcao = Number(prompt("Informe uma opção: 1. 2 ou 3: "));

switch(opcao){
    case 1:
        console.log("Você escolheu a opção 1!")
        break;
    case 2:
        console.log("Você escolheu a opção 2!")
        break;
    case 3:
        console.log("Você escolheu a opção 3!")
        break;
    default:
        console.log("ERRO: Valor inválido!")
        break;
}