'use strict';

const laske = confirm('Haluatko että lasken neliöjuuren?');

if (laske) {
  const num = +prompt('Kirjoita luku: ');
  if (num >= 0) {
    document.querySelector('#target').innerText
    = `Luvun ${num} neliöjuuri on ${Math.sqrt(num)}`;
  } else {
    document.querySelector('#target').innerText
    = `Negatiiviselle luvulle ei ole määritelty neliöjuurta.`;
  }
} else {
  document.querySelector('#target').innerText
  = `Neliöjuurta ei laskettu.`;
}