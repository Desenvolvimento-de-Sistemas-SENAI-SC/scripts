/* Copyright (c) 2020 SENAI Chapecó/SC 
 * Código desenvolvido para aula da turma de Desenvolvimento de Sistemas
 * Professor: Rafael Hengen Ribeiro
 * 
 * Utilização de filter e arrow function para retornar alunos maiores de idade
*/

var alunos = [
    {
        nome: "Rafael",
        idade: 24
    },
    {
        nome: "Miguel",
        idade: 18,
        periodo: 3
    },
    {
        nome: "Maria",
        idade: 16,
        periodo: 1
    }
];

var alunosMaiores = alunos.filter(obj => obj.idade >= 18);
console.log(alunosMaiores);