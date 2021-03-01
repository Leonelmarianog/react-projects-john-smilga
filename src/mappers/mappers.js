import Cocktail from '../entities/Cocktail';

/**
 * An instance of the Cocktail class
 * @typedef {Object} cocktail
 * @property {Number} cocktail.id
 * @property {String} cocktail.name
 * @property {String} cocktail.category
 * @property {String} cocktail.alcoholic
 * @property {String} cocktail.glass
 * @property {String[]} cocktail.ingredients
 * @property {String[]} cocktail.instructions
 */

/**
 * Maps data coming from an API to a Cocktail instance
 * @param {Object} data
 * @param {String} data.idDrink
 * @param {String} data.strDrink
 * @param {String} data.strAlcoholic
 * @param {String} data.strGlass
 * @param {String=} data.strIngredient1
 * @param {String=} data.strIngredient2
 * @param {String=} data.strIngredient3
 * @param {String=} data.strIngredient4
 * @param {String=} data.strIngredient5
 * @param {String=} data.strIngredient6
 * @param {String=} data.strIngredient7
 * @param {String=} data.strIngredient8
 * @param {String=} data.strIngredient9
 * @param {String=} data.strIngredient10
 * @param {String=} data.strIngredient11
 * @param {String=} data.strIngredient12
 * @param {String=} data.strIngredient13
 * @param {String=} data.strIngredient14
 * @param {String=} data.strIngredient15
 * @param {String} data.instructions
 * @returns {cocktail}
 */
const fromApiToEntity = ({
  idDrink,
  strDrink,
  strCategory,
  strAlcoholic,
  strGlass,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strIngredient6,
  strIngredient7,
  strIngredient8,
  strIngredient9,
  strIngredient10,
  strIngredient11,
  strIngredient12,
  strIngredient13,
  strIngredient14,
  strIngredient15,
  strInstructions,
}) => {
  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
  ].filter((ingredient) => ingredient !== null);
  const instructions = strInstructions.split('.').filter((instruction) => instruction.length !== 0);
  const formatedData = {
    id: +idDrink,
    name: strDrink,
    category: strCategory,
    alcoholic: strAlcoholic,
    glass: strGlass,
    ingredients,
    instructions,
  };

  return new Cocktail({ ...formatedData });
};

export default fromApiToEntity;
