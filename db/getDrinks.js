const fetch = require("node-fetch");
const fs = require("fs");

//API URL
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

//fetching the API
fetch(url)
  .then((res) => res.json())
  .then((res) => {
    let drinks = JSON.stringify(res);
    fs.writeFile("./db/data.json", drinks, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("API is working");
      }
    });
  });
