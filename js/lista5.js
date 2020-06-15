/* Copyright (c) 2020 SENAI Chapecó/SC 
 * Código desenvolvido para aula da turma de Desenvolvimento de Sistemas
 * Professor: Rafael Hengen Ribeiro
 * 
 * Parte 1: Utilização de filter para retornar alunos maiores de idade
 * Parte 2: Utilização de filter para retornar alunos em período válido
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

var verificarMaioridade = function(aluno)   {
    return aluno.idade >= 18;
}

var alunosMaiores = alunos.filter(verificarMaioridade);
console.log(alunosMaiores);

var periodoValido = function(aluno) {
    return aluno.periodo != undefined;
}

var alunosPeriodoValido = alunos.filter(periodoValido);
console.log(alunosPeriodoValido);