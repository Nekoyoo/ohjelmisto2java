'use strict';

const form = document.querySelector('form');
const query = document.querySelector('input[name=q]');
const results = document.querySelector('#results');

async function fetchShows() {
  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query.value}`
    );
    if (!response.ok) {
      throw new Error('Error');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  results.innerHTML = '';
  const shows = await fetchShows();
  for (let show of shows) {
    const h2 = document.createElement('h2');
    h2.innerText = show.show.name;

    const a = document.createElement('a');

    const img = document.createElement('img');
    img.src = show.show.image
      ? show.show.image.medium
      : 'https://placehold.co/210x295?text=Not%20Found';
    img.alt = show.show.name;

    const div = document.createElement('div');
    div.innerHTML = show.show.summary;

    const article = document.createElement('article');

    article.append(h2, a, img, div);

    results.append(article);
  }
})