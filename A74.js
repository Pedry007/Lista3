// 1. Retirar todos os nomes de animais da string e imprimir um valor por linha
var str = "Cachorro, gato, rato, leão, girafa, veado";
var animais = str.split(", ");

animais.forEach(function(animal) {
    console.log(animal);
});

// 2. Construir a string "CURSO DE JAVASCRIPT" com partes extraídas de outras strings
var str1 = "CEF abre concurso para Advogados.";
var str2 = "Abel pede demissão do Flamengo.";
var str3 = "Bancos utilizam Java em operações financeiras online.";
var str4 = "Este script deve ser concluído em 5 minutos!!!";

var curso = str1.substring(0, 4).toUpperCase() + " " +
            str3.substring(22, 31).toUpperCase() + " " +
            str2.substring(0, 11).toUpperCase() + " " +
            str4.substring(0, 7).toUpperCase();

console.log(curso);  // Output: CURSO DE JAVASCRIPT

// 3. Script para calcular quantos meses
function calcularMeses(dataInicial, dataFinal) {
    var meses = (dataFinal.getFullYear() - dataInicial.getFullYear()) * 12;
    meses -= dataInicial.getMonth() + 1;
    meses += dataFinal.getMonth() + 1;
    return meses <= 0 ? 0 : meses;
}

// Exemplo de uso
var dataInicial = new Date("2022-01-01");
var dataFinal = new Date("2024-04-01");

var resultado = calcularMeses(dataInicial, dataFinal);
console.log("A diferença é de " + resultado + " meses.");
