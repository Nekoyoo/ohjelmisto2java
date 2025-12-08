'use strict';

const noppamäärä = +prompt('Montako noppaa heitetään?');
let total = 0;
for (let i = 0; i < noppamäärä; i++) {
  total += Math.floor(Math.random() * 6) + 1;
}

document.querySelector('#target').innerText = `Noppien summa on ${total}`;