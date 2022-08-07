const mongoose = require('mongoose');

const User = mongoose.model("User", {

    name: {type: String},
    lastname: {type: String},
    age: {type: Number},
    logo: {type: String},
    skills: {type: String}
});

module.exports=User;