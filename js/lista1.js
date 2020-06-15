/* Copyright (c) 2020 SENAI Chapecó/SC 
 * Código desenvolvido para aula da turma de Desenvolvimento de Sistemas
 * Professor: Rafael Hengen Ribeiro
 * 
 * Exemplo básico mostrando como percorrer listas de objetos com forEach
 */

var alunos = [
    {
        nome: "Rafael",
        idade: 24
    },
    {
        nome: "Miguel",
        idade: 17,
        periodo: 3
    },
    {
        nome: "Maria",
        idade: 16,
        periodo: 1
    }
];

var imprimirNome = function()   {
    // Percorrer lista de alunos através de forEach
    alunos.forEach(function(aluno)   {
        console.log(aluno.nome);
    });

    for(let i = 0; i < alunos.length; i++)  {
        aluno = alunos[i];
        console.log(aluno.nome);
    }
}

imprimirNome();