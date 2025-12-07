'use strict';

const num1 = +prompt('anna numero');
const num2 = +prompt('anna toinen numero');
const num3 = +prompt('anna kolmas numero');

const summa = num1 + num2 + num3;
const tulo = num1 * num2 * num3;
const avg = summa / 3;

document.querySelector(
    '#target'
).innerText = `numeroista ${num1}, ${num2} ja ${num3} tulee summa ${summa}, tulo ${tulo} ja keskiarvo ${avg}.`;