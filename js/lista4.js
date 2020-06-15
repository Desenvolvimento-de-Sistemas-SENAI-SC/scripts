/* Copyright (c) 2020 SENAI Chapecó/SC 
 * Código desenvolvido para aula da turma de Desenvolvimento de Sistemas
 * Professor: Rafael Hengen Ribeiro
 * 
 * Utilização de filter para retornar apenas números pares
 */

var listaNumeros = [1, 2, 3, 4, 5];

var ehPar = function(numero)    {
    if(numero % 2 == 0)
        return true;
    return false;
}

var listaPares = listaNumeros.filter(ehPar);
console.log(listaPares);