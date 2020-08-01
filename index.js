const app = require("express")();
const Drinks = require("./models/Drinks");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

//show all the drinks
app.get("/drinks", (req, resp) => {
  Drinks.find({}).then((drink) => {
    resp.json(drink);
  });
});

//find by the id
app.get("/drinks/:id", (req, resp) => {
  Drinks.findById(req.params.id).then((drink) => {
    resp.json(drink);
  });
});

//request so the user could POST(create) a new drink
app.post("/drinks", (req, resp) => {
  Drinks.create(req.body).then((drink) => {
    resp.json(drink);
  });
});

//show the type of glasses
app.get("/drinks/glass/:glass", (req, resp) => {
  Drinks.find({ strGlass: req.params.glass }).then((drinks) => {
    resp.json(drinks);
  });
});

//find a drink by name
app.get("/drinks/name/:name", (req, resp) => {
  Drinks.findOne({ strDrink: req.params.name }).then((drinks) => {
    resp.json(drinks);
  });
});

//update the name of a drink
app.put("/drinks/name/:name", (req, resp) => {
  Drinks.findOneAndUpdate({ strDrink: req.params.name }, req.body, {
    new: true,
  }).then((drinks) => {
    resp.json(drinks);
  });
});

//request for a user to delete a drink
app.delete("/drinks/:drinks", (req, resp) => {
  Drinks.findOneAndDelete({ strDrink: req.params.drinks }).then((drinks) => {
    resp.json(drinks);
  });
});

//find drink by the ingredient
app.get("/drinks/ingredient/:ingredients", (req, resp) => {
  Drinks.find({ strIngredient1: req.params.ingredients }).then((drinks) => {
    resp.json(drinks);
  });
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
