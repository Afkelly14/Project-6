const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  strIngredient1: String,
  strIngredient2: String,
  strIngredient3: String,
  strIngredient4: String,
  strIngredient5: String,
  strIngredient6: String,
  strIngredient7: String,
  strIngredient8: String,
  strIngredient9: String,
  strIngredient10: String,
});

const drinkSchema = new Schema({
  idDrink: String,
  strCategory: String,
  strAchoholic: String,
  strGlass: String,
  strInstructions: String,
  strDrinkThumb: String,
  Ingredients: [ingredientSchema],
});

module.exports = mongoose.model("Drinks", drinkSchema);
