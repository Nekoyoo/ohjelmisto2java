'use strict';

const form = document.querySelector('form');
const query = document.querySelector('input[name=q]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query.value}`
    );
    if (!response.ok) {
      throw new Error('Error');
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});