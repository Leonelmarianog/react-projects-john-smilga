const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

/**
 * @param {String} searchterm
 * @returns {Promise<Object>} API data
 */
const getResource = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something happened, try again in a few minutes');
  }

  const data = await response.json();

  return data;
};

export const cocktailsAPI = {
  getByName: (name) => getResource(`${BASE_URL}/search.php?s=${name}`),
  getById: (id) => getResource(`${BASE_URL}/lookup.php?i=${id}`),
};
