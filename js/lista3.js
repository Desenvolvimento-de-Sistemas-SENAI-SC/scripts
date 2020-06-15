/* Copyright (c) 2020 SENAI Chapecó/SC 
 * Código desenvolvido para aula da turma de Desenvolvimento de Sistemas
 * Professor: Rafael Hengen Ribeiro
 * 
 * Utilização do map para adicionar uma nova propriedade ativo à lista de alunos
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

var alunoAtivo = function(aluno) {
    aluno.ativo = true;
    return aluno;
}

var listaAlunosAtivos = alunos.map(alunoAtivo);
console.log(listaAlunosAtivos);