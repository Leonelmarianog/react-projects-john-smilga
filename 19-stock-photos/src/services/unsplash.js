import {
  getPhotosByPage as getPhotosByPageFromApi,
  getPhotosByPageAndQuery as getPhotosByPageAndQueryFromApi,
} from '../api/unsplash';

/**
 * @param {Number} [page = 1] - Photo List Page
 * @returns {Promise<Array<import('../entities/photo').Photo>>} Photo Entity
 */
export const getPhotosByPage = async (page = 1) => {
  const photos = await getPhotosByPageFromApi(page);
  return photos;
};

/**
 * @param {Number} [page = 1] - Photo List Page
 * @param {String} query - Search Query
 * @returns {Promise<Array<import('../entities/photo').Photo>>} Photo Entity
 */
export const getPhotosByPageAndQuery = async (page = 1, query) => {
  const photos = await getPhotosByPageAndQueryFromApi(page, query);
  return photos;
};
