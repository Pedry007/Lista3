var nome = "Ana";       // string
var idade = 25;         // inteiro
var peso = 55.5;        // double

if (idade % 2 === 0) {
    console.log(nome + " tem uma idade par.");
} else {
    console.log(nome + " tem uma idade ímpar.");
}

var anoAtual = new Date().getFullYear();
var anoNascimento = anoAtual - idade;

console.log("Anos do ano atual até o ano de nascimento:");
for (var i = anoAtual; i >= anoNascimento; i--) {
    console.log(i);
}
