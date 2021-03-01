const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

/**
 * @param {String} searchterm
 * @returns {Promise<Object>} API data
 */
const getResource = async (searchterm) => {
  const response = await fetch(`${BASE_URL}${searchterm}`);

  if (!response.ok) {
    throw new Error('Something happened, try again in a few minutes');
  }

  const data = await response.json();

  return data;
};

export default getResource;
