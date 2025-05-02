/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:

Isósceles, escaleno ou eqüilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

const prompt = require('prompt-sync')();

let ladoA = Number(prompt("Informe a medida do lado A do triângulo: "));
let ladoB = Number(prompt("Informe a medida do lado B do triângulo: "));
let ladoC = Number(prompt("Informe a medida do lado C do triângulo: "));
let tipoTriangulo;

if(isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)){
    console.log("ERRO: Valor(es) inválido(s)!")

}else{
    //Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    if((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)){

        //Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */
        if((ladoA === ladoB) && (ladoB === ladoC)){
            console.log("Triângulo equilatero.")
        }
        //Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
        else if((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)){
            console.log("Triângulo isóceles.")
        }
        //Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
        else{
            console.log("Triângulo escaleno.")
        }

    }else{
        console.log("As medidas informadas não formam um triângulo.")
    }
}