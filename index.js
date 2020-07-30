const app = require("express")();
const Drinks = require("./models/Drinks");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//**need to check all of the below and add more CRUD */

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

//request for a user to delete a drink
app.delete("/drinks/:drinks", (req, resp) => {
  Drinks.findOneAndDelete({ strDrink: req.params.drinks }).then((drinks) => {
    resp.json(drinks);
  });
});

//create a show (detail) action to get the details of a PARTICULAR list
//find drinks by their ingredient

app.listen(3000, () => {
  console.log("this is working....");
}); //app
