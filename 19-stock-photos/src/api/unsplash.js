import { fromPlainToPhoto } from '../mappers/photoMapper';

const BASE_URL = `https://api.unsplash.com`;

/**
 * @param {String} url
 * @returns {Object | Array} Fetch Result
 */
const getResource = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const data = await response.json();

  return data;
};

/**
 * @param {Number} [page = 1] - Photo List Page
 * @returns {Promise<Array<import('../entities/photo').Photo>>} Photo Entity
 */
export const getPhotosByPage = async (page = 1) => {
  const photosData = await getResource(
    `${BASE_URL}/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${page}`
  );

  if (photosData.errors) {
    const errors = photosData.errors.join(', ');
    throw new Error(errors);
  }

  const photos = photosData.map((photoData) => fromPlainToPhoto(photoData));

  return photos;
};

/**
 * @param {Number} [page = 1] - Photo List Page
 * @param {String} query - Search Query
 * @returns {Promise<Array<import('../entities/photo').Photo>>} Photo Entity
 */
export const getPhotosByPageAndQuery = async (page = 1, query) => {
  const photosData = await getResource(
    `${BASE_URL}/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${page}&query=${query}`
  );

  if (photosData.errors) {
    const errors = photosData.errors.join(', ');
    throw new Error(errors);
  }

  const photos = photosData.results.map((photoData) =>
    fromPlainToPhoto(photoData)
  );

  return photos;
};
