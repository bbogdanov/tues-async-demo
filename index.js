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

  const spinnerPromise = new Promise((resolve, reject) => {
    spinner.removeAttribute('hidden');
    resolve();
  });

  /**
   * Show spinner before the data is loaded and hides it after the data is loaded
   */
  spinnerPromise.then(async () => {
    try {
      const charectersResponse = await getStarWarsCharacters();
      return charectersResponse;
    }
    catch (error) {
      alert('Error while fetching the data');
      reject();
    }

  }).then((response) => {
    spinner.setAttribute('hidden', true);
    return response;
  }).then((response) => {
    /**
     * Show the data in the DOM
     */
    response.results.forEach(charecter => {
      const li = document.createElement('li');
      li.innerHTML = charecter.name;
      charectersHolder.appendChild(li);
    });
  });
});