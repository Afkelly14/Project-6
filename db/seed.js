const axios = require('axios').default;
//add models link

//this should get the API
axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => {
        console.log(response);
    })
   .catch((err) => {
       console.log(err)
   })
   .then(() => {

   });