'use strict';

function getrandomint(max) {
  return Math.floor(Math.random() * max);
}

const nimi = prompt('Anna nimesi:');
const num = getrandomint(4) + 1;

let tupa = null
switch (num) {
  case 0:
    tupa = 'Rohkelikko';
    break;
  case 1:
    tupa =  'Luihuinen';
    break;
  case 2:
    tupa = 'Puuskupuh';
    break;
  case 3:
    tupa = 'Korpinkynsi';
    break;

  default:
    tupa = 'tuvaton';
    break;
}

document.querySelector('#target').innerText = `${nimi}, olet ${tupa}.`;