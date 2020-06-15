/* Copyright (c) 2020 SENAI Chapecó/SC 
 * Código desenvolvido para aula da turma de Desenvolvimento de Sistemas
 * Professor: Rafael Hengen Ribeiro
 * 
 * Exemplo básico de utilização de map()
 */

var listaNumeros = [1, 2, 3, 4, 5];

console.log(listaNumeros);

var quadrado = function(numero) {
    return numero * numero;
}

var listaQuadrados = listaNumeros.map(quadrado);

console.log(listaQuadrados);