// Array da Copa do Mundo de 2006
var copa2006 = [
    // Grupo A
    {
        grupo: 'Grupo A',
        times: ['Alemanha', 'Costa Rica', 'Polônia', 'Equador']
    },
    
    // Grupo B
    {
        grupo: 'Grupo B',
        times: ['Inglaterra', 'Paraguai', 'T. Tobago', 'Suécia']
    },
    
    // Grupo C
    {
        grupo: 'Grupo C',
        times: ['Argentina', 'C. do Marfim', 'Sérvia', 'Holanda']
    },
    
    // Grupo D
    {
        grupo: 'Grupo D',
        times: ['México', 'Irã', 'Angola', 'Portugal']
    },
    
    // Grupo E
    {
        grupo: 'Grupo E',
        times: ['Itália', 'Gana', 'EUA', 'Rep. Tcheca']
    },
    
    // Grupo F
    {
        grupo: 'Grupo F',
        times: ['Brasil', 'Croácia', 'Austrália', 'Japão']
    },
    
    // Grupo G
    {
        grupo: 'Grupo G',
        times: ['França', 'Suíça', 'Coréia do Sul', 'Togo']
    }
];

// Exibindo os times por grupo
copa2006.forEach(function(grupo) {
    console.log(grupo.grupo);
    console.log('------');
    grupo.times.forEach(function(time) {
        console.log(time);
    });
    console.log('\n');  // Linha em branco entre os grupos
});
