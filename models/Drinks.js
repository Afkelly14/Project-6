const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const drinkSchema = new Schema ({
    idDrink: String,
    strCategory: String,
    strAchoholic: String, 
    strGlass: String,




})


module.exports = mongoose.model("Drinks", drinkSchema);