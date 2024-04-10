// a) String
var exemploString = "Isso é uma string";

// b) Inteiro
var exemploInteiro = 10;

// c) Flutuante
var exemploFlutuante = 10.5;

// d) Verdadeiros (string e numerico) e Falso (string, numerico e nulo)
var verdadeiroString = "Verdadeiro";
var verdadeiroNumerico = 1;
var falsoString = "";
var falsoNumerico = 0;
var falsoNulo = null;

// Verificação dos Tipos de Variáveis
console.log("Tipo de exemploString: " + typeof exemploString);  // string
console.log("Tipo de exemploInteiro: " + typeof exemploInteiro);  // number
console.log("Tipo de exemploFlutuante: " + typeof exemploFlutuante);  // number
console.log("Tipo de verdadeiroString: " + typeof verdadeiroString);  // string
console.log("Tipo de verdadeiroNumerico: " + typeof verdadeiroNumerico);  // number
console.log("Tipo de falsoString: " + typeof falsoString);  // string
console.log("Tipo de falsoNumerico: " + typeof falsoNumerico);  // number
console.log("Tipo de falsoNulo: " + typeof falsoNulo);  // object (porque null é considerado um objeto em JavaScript)
