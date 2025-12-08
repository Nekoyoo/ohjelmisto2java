'use strict';

const ol = document.querySelector('#target');
const osallistujat = +prompt('Anna osallistujien lukumäärä: ');

const nimet = [];
for(let i = 0; i < osallistujat; i++) {
  nimet.push(prompt('Anna osallistujan nimi: '));
}

nimet.sort();
for(let i = 0; i < nimet.length; i++) {
  const li = document.createElement('li');
  li.innerText = nimet[i];
  ol.appendChild(li);
}