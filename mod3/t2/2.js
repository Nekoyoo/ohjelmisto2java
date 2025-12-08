'use strict';

const ul = document.querySelector('#target');
ul.className = 'my-item';

const numsString = ['First', 'Second', 'Third'];
for (let i = 0; i < numsString.length; i++) {
  const li = document.createElement('li');
  li.textContent = `${numsString[i]} item`;
  ul.appendChild(li);
}