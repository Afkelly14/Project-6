const app = require("express")();
const Drinks = require("./models/Drinks");
const bodyParser = require("body-parser");
app.use(bodyParser.json());


//show all the drinks
app.get('/drinks', (req, resp) => {
    Drinks.find({}).then((drinks) => {
        resp.json(drinks);
    });
});


//create a show (detail) action to get the details of a PARTICULAR list
//find drinks by their ingredient



app.listen(3000, () => {
    console.log("this is working....");
}); //app