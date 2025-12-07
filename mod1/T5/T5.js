'use strict';

const vuosi = prompt('Anna vuosiluku:');

if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0) {
  document.querySelector('#target').innerText = `${vuosi} on karkausvuosi.`;
} else {
  document.querySelector('#target').innerText = `${vuosi} ei ole karkausvuosi.`;
}