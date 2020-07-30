const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  idDrink: String,
  strCategory: String,
  strAchoholic: String,
  strGlass: String,
  strInstructions: String,
  strDrinkThumb: String,
  strIngredient1: String,
  strIngredient2: String,
  strIngredient3: String,
  strIngredient4: String,
  strIngredient5: String,
});

module.exports = mongoose.model("Drinks", drinkSchema);
