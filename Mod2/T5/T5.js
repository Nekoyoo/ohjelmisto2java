'use strict';

let num = +prompt('Anna luku, toistuva luku lopettaa ohjelman:');

const numerot = [];
while (true) {
  if (numerot.includes(num)) {
    alert(`Antamasi luku on jo syötetty`);
    break;
  }
  numerot.push(num);
  num = +prompt(('Anna luku, toistuva luku lopettaa ohjelman:'))
}

numerot.sort((x, y) => (y - x));
for (let i = 0; i < numerot.length; i++) {
  console.log(numerot[i]);
}