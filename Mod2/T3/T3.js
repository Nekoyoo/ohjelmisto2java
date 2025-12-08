'use strict';

const koirienNimet = [];
const ul = document.querySelector('#target');

for(let i = 0; i < 6; i++) {
  koirienNimet.push(prompt('Anna koiran nimi: '));
}

koirienNimet.sort().reverse();
for (let i = 0; i < koirienNimet.length; i++) {
  let li = document.createElement('li');
  li.innerText = koirienNimet[i];
  ul.appendChild(li);
}