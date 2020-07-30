const data = require("./data.json");
const Drinks = require("../models/Drinks");

//map thru the JSON data to pull specific data
const drinkInfo = data[0].drinks.map((item) => {
  const drinks = {};
  drinks.strDrink = item.strDrink;
  drinks.strCategory = item.strCategory;
  drinks.strAlcoholic = item.strAlcoholic;
  drinks.strGlass = item.strGlass;
  drinks.strInstructions = item.strInstructions;
  drinks.strDrinkThumb = item.strDrinkThumb;
  drinks.Ingredients = item.Ingredients;
  return drinks;
});

console.log(drinkInfo);

//seed the database to search by ingredient
Drinks.deleteMany({}).then(() => {
  Drinks.create(drinkInfo)
    .then((drinks) => {
      console.log(drinks);
      process.exit();
    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
});
