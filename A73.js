// 1. Trocar a cor de fundo da página
var changeColor = confirm("Deseja trocar a cor de fundo da página?");

if (changeColor) {
    var color = prompt("Escolha uma cor: blue, red ou green").toLowerCase();

    switch (color) {
        case "blue":
        case "red":
        case "green":
            document.body.style.backgroundColor = color;
            break;
        default:
            alert("Cor inválida. A cor de fundo não foi alterada.");
    }
}

// 2. Solicitar o nome do usuário e exibir uma mensagem de boas-vindas
var nomeUsuario = prompt("Qual é o seu nome?");
alert("Olá, " + nomeUsuario + "! Bem-vindo(a) ao nosso site.");

// 3. Função para calcular a média de 3 números
function calcularMedia() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));
    var num3 = parseFloat(prompt("Digite o terceiro número:"));

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        var media = (num1 + num2 + num3) / 3;
        alert("A média dos números é: " + media.toFixed(2));
    } else {
        alert("Por favor, informe números válidos.");
    }
}

calcularMedia();
