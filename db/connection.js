const axios = require('axios').default;
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost/drinks",
    { useNewUrlParser: true }
)

module.exports = mongoose