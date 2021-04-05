class Cocktail {
  /**
   * @param {Number} id
   * @param {String} name
   * @param {String} category
   * @param {String} alcoholic
   * @param {String} glass
   * @param {String[]} ingredients
   * @param {String[]} instructions
   * @param {String} image
   */
  constructor({
    id,
    name,
    category,
    alcoholic,
    glass,
    ingredients,
    instructions,
    image,
  }) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.alcoholic = alcoholic;
    this.glass = glass;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.image = image;
  }
}

export default Cocktail;
