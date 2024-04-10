// 1) Loop Infinito com Condição de Parada
var contador = 0;

while (true) {
    console.log("Loop infinito");

    contador++;

    if (contador > 10) {  // Condição de parada após 10 iterações
        break;
    }
}

console.log("\n");  // Separador entre os exercícios

// 2) Tabela de Tabuada de Multiplicação
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
        var resultado = i * j;
        process.stdout.write(i + " x " + j + " = " + resultado);
        
        if (j < 9) {
            process.stdout.write(" | ");  // Separador entre as multiplicações
        }
    }
    
    console.log();  // Quebra de linha após cada linha da tabuada
}
