'use strict';

const ul = document.querySelector('#target');
console.log(ul);
function nopanheitto() {
  return Math.floor(Math.random() * 6) + 1;
}

let heitto = null
while (heitto !== 6) {
  heitto = nopanheitto();
  let li = document.createElement('li');
  li.innerText = heitto;
  ul.appendChild(li);
}