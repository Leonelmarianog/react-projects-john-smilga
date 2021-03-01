class Cocktail {
  /**
   * @param {Number} id
   * @param {String} name
   * @param {String} category
   * @param {String} alcoholic
   * @param {String} glass
   * @param {String[]} ingredients
   * @param {String[]} instructions
   */
  constructor(id, name, category, alcoholic, glass, ingredients, instructions) {
    id = this.id;
    name = this.name;
    category = this.category;
    alcoholic = this.alcoholic;
    glass = this.glass;
    ingredients = this.ingredients;
    instructions = this.instructions;
  }
}

export default Cocktail;
