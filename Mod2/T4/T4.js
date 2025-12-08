'use strict';

let num = +prompt('Anna luku, lopeta syöttämällä 0');

const numerot = [];
while (num !== 0) {
  numerot.push(num);
  num = +prompt('Anna luku, lopeta syöttämällä 0');
}

numerot.sort((x, y) => (y - x));
for (let i = 0; i < numerot.length; i++) {
  console.log(numerot[i]);
}