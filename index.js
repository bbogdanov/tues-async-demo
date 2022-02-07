const starWarsAPIEndPoint = "https://swapi.dev/api/";

/**
 * @description - This function is used to fetch the characters from Star Wars Public API
 * @returns {Promise}
 */
const getStarWarsCharacters = async () => {
  const response = await fetch(starWarsAPIEndPoint + "people/");
  const data = await response.json();
  return data;
};

document.addEventListener('DOMContentLoaded', async () => {
  const spinner = document.querySelector('.loader');
  const charectersHolder = document.querySelector('#starWarsCharecters');

  /**
   * Show spinner before the data is loaded and hides it after the data is loaded
   */
  spinner.removeAttribute('hidden');
  const charectersResponse = await getStarWarsCharacters();
  spinner.setAttribute('hidden', true);


  /**
   * Show the data in the DOM
   */
  charectersResponse.results.forEach(charecter => {
    const li = document.createElement('li');
    li.innerHTML = charecter.name;
    charectersHolder.appendChild(li);
  });
});